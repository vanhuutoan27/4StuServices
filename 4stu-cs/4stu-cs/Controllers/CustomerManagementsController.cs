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
    public class CustomerManagementsController : ControllerBase
    {
        private readonly IConfiguration _config;
        public CustomerManagementsController(IConfiguration config)
        {
            _config = config;
        }

        private _4stuDbContext _context = new _4stuDbContext();

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomerManagement>>> GetCustomerManagements()
        {
            if (_context.CustomerManagements == null)
            {
                return NotFound();
            }
            return await _context.CustomerManagements.ToListAsync();
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
        public async Task<ActionResult<CustomerManagement>> Launch()
        {
            var extractedEmail = GetCurrentEmail();

            if (extractedEmail == null) return NotFound("Token hết hạn");

            var result = await _context.CustomerManagements.FirstOrDefaultAsync(row => row.Email == extractedEmail);

            return Ok(result);
        }

        // GET: api/CustomerManagements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerManagement>> GetCustomerManagement(int id)
        {
            if (_context.CustomerManagements == null)
            {
                return NotFound();
            }
            var customerManagement = await _context.CustomerManagements.FindAsync(id);

            if (customerManagement == null)
            {
                return NotFound();
            }

            return customerManagement;
        }

        // PUT: api/CustomerManagements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerManagement(int id, CustomerManagement customerManagement)
        {
            if (id != customerManagement.CustomerId)
            {
                return BadRequest();
            }

            _context.Entry(customerManagement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerManagementExists(id))
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

        // POST: api/CustomerManagements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        public class LoginBody
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class LoginResponse
        {
            public CustomerManagement Customer { get; set; }
            public string AccessToken { get; set; }
        }

        private string GenerateToken(CustomerManagement customer)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            // claim này dựa trên email trong tham số customer
            var claims = new List<Claim>
            {
                new Claim("email", customer.Email)
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
        public async Task<ActionResult<CustomerManagement>> Login(LoginBody body)
        {
            if (_context.CustomerManagements == null)
            {
                return Problem("Entity set '_4stuDbContext.CustomerManagements'  is null.");
            }
            var result = await _context.CustomerManagements.FirstOrDefaultAsync(row => row.Email == body.Email && row.Password == body.Password);


            if (result != null)
            {
                return Ok(new LoginResponse()
                {
                    Customer = result,
                    AccessToken = GenerateToken(result)
                });
            }
            else
            {
                return NotFound("The customer is not existed!");
            }

        }

        [HttpPost]
        public async Task<ActionResult<CustomerManagement>> PostCustomerManagement(CustomerManagement customerManagement)
        {
            _context.CustomerManagements.Add(customerManagement);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CustomerManagementExists(customerManagement.CustomerId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCustomerManagement", new { id = customerManagement.CustomerId }, customerManagement);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomerManagement(int id)
        {
            var customerManagement = await _context.CustomerManagements.FindAsync(id);
            if (customerManagement == null)
            {
                return NotFound();
            }

            _context.CustomerManagements.Remove(customerManagement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CustomerManagementExists(int id)
        {
            return _context.CustomerManagements.Any(e => e.CustomerId == id);
        }
    }
}

