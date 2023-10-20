using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using _4stu_cs.Models;

namespace _4stu_cs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffManagementsController : ControllerBase
    {
        private readonly IConfiguration _config;
        public StaffManagementsController(IConfiguration config)
        {
            _config = config;
        }

        private _4stuDbContext _context = new _4stuDbContext();

        // GET: api/StaffManagements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StaffManagement>>> GetStaffManagements()
        {
            if (_context.StaffManagements == null)
            {
                return NotFound();
            }
            return await _context.StaffManagements.ToListAsync();
        }

        // GET: api/StaffManagements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StaffManagement>> GetStaffManagement(int id)
        {
            if (_context.StaffManagements == null)
            {
                return NotFound();
            }
            var staffManagement = await _context.StaffManagements.FindAsync(id);

            if (staffManagement == null)
            {
                return NotFound();
            }

            return staffManagement;
        }

        // PUT: api/StaffManagements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStaffManagement(int id, StaffManagement staffManagement)
        {
            if (id != staffManagement.StaffId)
            {
                return BadRequest();
            }

            _context.Entry(staffManagement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StaffManagementExists(id))
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

        // POST: api/StaffManagements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StaffManagement>> PostStaffManagement(StaffManagement staffManagement)
        {
            if (_context.StaffManagements == null)
            {
                return Problem("Entity set '_4stuDbContext.StaffManagements'  is null.");
            }
            _context.StaffManagements.Add(staffManagement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStaffManagement", new { id = staffManagement.StaffId }, staffManagement);
        }

        // DELETE: api/StaffManagements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStaffManagement(int id)
        {
            if (_context.StaffManagements == null)
            {
                return NotFound();
            }
            var staffManagement = await _context.StaffManagements.FindAsync(id);
            if (staffManagement == null)
            {
                return NotFound();
            }

            _context.StaffManagements.Remove(staffManagement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StaffManagementExists(int id)
        {
            return (_context.StaffManagements?.Any(e => e.StaffId == id)).GetValueOrDefault();
        }
    }
}
