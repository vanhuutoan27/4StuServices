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
    public class AccountManagementsController : ControllerBase
    {
        private readonly IConfiguration _config;
        public AccountManagementsController(IConfiguration config)
        {
            _config = config;
        }

        private _4stuDbContext _context = new _4stuDbContext();

        // GET: api/AccountManagements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AccountManagement>>> GetAccountManagements()
        {
            if (_context.AccountManagements == null)
            {
                return NotFound();
            }
            return await _context.AccountManagements.ToListAsync();
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

        [Authorize]
        [HttpGet("Launch")]
        public async Task<ActionResult<AccountManagement>> Launch()
        {
            var extractedEmail = GetCurrentEmail();

            if (extractedEmail == null) return NotFound("Token hết hạn");

            var result = await _context.AccountManagements.FirstOrDefaultAsync(row => row.Email == extractedEmail);

            return Ok(result);
        }

        // GET: api/AccountManagements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AccountManagement>> GetAccountManagement(string id)
        {
            if (_context.AccountManagements == null)
            {
                return NotFound();
            }
            var accountManagement = await _context.AccountManagements.FindAsync(id);

            if (accountManagement == null)
            {
                return NotFound();
            }

            return accountManagement;
        }

        // PUT: api/AccountManagements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccountManagement(string id, AccountManagement accountManagement)
        {
            if (id != accountManagement.Email)
            {
                return BadRequest();
            }

            _context.Entry(accountManagement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountManagementExists(id))
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

        // POST: api/AccountManagements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        public class LoginBody
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class LoginResponse
        {
            public AccountManagement Account { get; set; }
            public string AccessToken { get; set; }
        }

        private string GenerateToken(AccountManagement account)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            // claim này dựa trên email trong tham số account
            var claims = new List<Claim>
            {
                new Claim("email", account.Email)
            };

            // tạo ra token
            var token = new JwtSecurityToken(
                _config["Jwt:Issuer"],
                _config["Jwt:Audience"],
                claims,
                // có thời gian chết, 5 phút
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<ActionResult<AccountManagement>> Login(LoginBody body)
        {
            if (_context.AccountManagements == null)
            {
                return Problem("Entity set '_4stuDbContext.AccountManagements'  is null.");
            }
            var result = await _context.AccountManagements.FirstOrDefaultAsync(row => row.Email == body.Email && row.Password == body.Password);


            if (result != null)
            {
                return Ok(new LoginResponse()
                {
                    Account = result,
                    AccessToken = GenerateToken(result)
                });
            }
            else
            {
                return NotFound("The account is not existed!");
            }

        }


        [HttpPost]
        public async Task<ActionResult<AccountManagement>> PostAccountManagement(AccountManagement accountManagement)
        {
            if (_context.AccountManagements == null)
            {
                return Problem("Entity set '_4stuDbContext.AccountManagements'  is null.");
            }
            _context.AccountManagements.Add(accountManagement);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AccountManagementExists(accountManagement.Email))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAccountManagement", new { id = accountManagement.Email }, accountManagement);
        }

        // DELETE: api/AccountManagements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccountManagement(string id)
        {
            if (_context.AccountManagements == null)
            {
                return NotFound();
            }
            var accountManagement = await _context.AccountManagements.FindAsync(id);
            if (accountManagement == null)
            {
                return NotFound();
            }

            _context.AccountManagements.Remove(accountManagement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccountManagementExists(string id)
        {
            return (_context.AccountManagements?.Any(e => e.Email == id)).GetValueOrDefault();
        }
    }
}
