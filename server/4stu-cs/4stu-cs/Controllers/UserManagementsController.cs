using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Data.Entity.Core.Common.CommandTrees.ExpressionBuilder;
using System.Security;
using Azure.Core;
using _4stu_cs.Models;

namespace _4stu_cs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserManagementsController : ControllerBase
    {
        private readonly IConfiguration _config;
        public UserManagementsController(IConfiguration config)
        {
            _config = config;
        }

        private _4stuDbContext _context = new _4stuDbContext();

        // GET: api/UserManagements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserManagement>>> GetUserManagements()
        {
            if (_context.UserManagements == null)
            {
                return NotFound();
            }
            return await _context.UserManagements.ToListAsync();
        }

        private string GetCurrentEmail()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var userClaims = identity.Claims;
                Console.Write(userClaims.Count());

                foreach (var claim in userClaims)
                {
                    Console.WriteLine(claim.ToString());
                }

                return userClaims.FirstOrDefault(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress")?.Value;
            }
            return null;
        }

        public class UserWithRole
        {
            public UserManagement User { get; set; }
            public string Role { get; set; }
        }

        [Authorize]
        [HttpGet("Launch")]
        public async Task<ActionResult<UserWithRole>> Launch()
        {
            var extractedEmail = GetCurrentEmail();

            if (extractedEmail == null) return NotFound("Token hết hạn");

            var user = await _context.UserManagements.FirstOrDefaultAsync(row => row.Email == extractedEmail);

            if (user == null) return NotFound("User not found");

            // Get user role from the database
            var userRole = user.Role;

            // Create a new object containing user information and role
            var userWithRole = new UserWithRole
            {
                User = user,
                Role = userRole
            };

            return Ok(userWithRole);
        }

        // GET: api/UserManagements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserManagement>> GetUserManagement(int id)
        {
            if (_context.UserManagements == null)
            {
                return NotFound();
            }
            var userManagement = await _context.UserManagements.FindAsync(id);

            if (userManagement == null)
            {
                return NotFound();
            }

            return userManagement;
        }

        // PUT: api/UserManagements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserManagement(int id, UserManagement userManagement)
        {
            if (id != userManagement.UserId)
            {
                return BadRequest();
            }

            _context.Entry(userManagement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserManagementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        public class LoginBody
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class LoginResponse
        {
            public UserManagement User { get; set; }
            public string AccessToken { get; set; }
        }

        private string GenerateToken(UserManagement user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            // claim này dựa trên email trong tham số user
            var claims = new List<Claim>
            {
                new Claim("email", user.Email)
            };

            // tạo ra token
            var token = new JwtSecurityToken(
                _config["Jwt:Issuer"],
                _config["Jwt:Audience"],
                claims,
                // có thời gian chết, 15 phút
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<ActionResult<UserManagement>> Login(LoginBody body)
        {
            if (_context.UserManagements == null)
            {
                return Problem("Entity set '_4stuDbContext.UserManagements'  is null.");
            }
            var result = await _context.UserManagements.FirstOrDefaultAsync(row => row.Email == body.Email && row.Password == body.Password);

            if (result != null)
            {
                return Ok(new LoginResponse()
                {
                    User = result,
                    AccessToken = GenerateToken(result)
                });
            }
            else
            {
                return NotFound("The user is not existed!");
            }
        }

        public class RegisterBody
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string Password { get; set; }
            public string ConfirmPassword { get; set; }
        }

        [AllowAnonymous]
        [HttpPost("Register")]
        public async Task<ActionResult<UserManagement>> Register(RegisterBody body)
        {
            if (_context.UserManagements == null)
            {
                return Problem("Entity set '_4stuDbContext.UserManagements'  is null.");
            }

            // Kiểm tra xem người dùng có tồn tại trong cơ sở dữ liệu hay không
            var existingUser = await _context.UserManagements.FirstOrDefaultAsync(row => row.Email == body.Email);

            if (existingUser != null)
            {
                return Conflict("Email đã được sử dụng bởi người dùng khác.");
            }

            // Kiểm tra xác nhận mật khẩu
            if (body.Password != body.ConfirmPassword)
            {
                return BadRequest("Mật khẩu và xác nhận mật khẩu không khớp.");
            }

            // Tạo một đối tượng CustomerManagement từ dữ liệu đăng ký
            var newUser = new UserManagement
            {
                FirstName = body.FirstName,
                LastName = body.LastName,
                Email = body.Email,
                Password = body.Password,
                Phone = body.Phone,
            };

            _context.UserManagements.Add(newUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserManagement", new { id = newUser.UserId }, newUser);
        }

        [HttpPost]
        public async Task<ActionResult<UserManagement>> PostUserManagement(UserManagement userManagement)
        {
            _context.UserManagements.Add(userManagement);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserManagementExists(userManagement.UserId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUserManagement", new { id = userManagement.UserId }, userManagement);
        }

        // DELETE: api/UserManagements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserManagement(int id)
        {
            if (_context.UserManagements == null)
            {
                return NotFound();
            }
            var userManagement = await _context.UserManagements.FindAsync(id);
            if (userManagement == null)
            {
                return NotFound();
            }

            _context.UserManagements.Remove(userManagement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserManagementExists(int id)
        {
            return (_context.UserManagements?.Any(e => e.UserId == id)).GetValueOrDefault();
        }
    }
}
