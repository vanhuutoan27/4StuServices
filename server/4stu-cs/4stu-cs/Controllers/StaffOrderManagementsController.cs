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
    public class StaffOrderManagementsController : ControllerBase
    {
        private readonly IConfiguration _config;
        public StaffOrderManagementsController(IConfiguration config)
        {
            _config = config;
        }

        private _4stuDbContext _context = new _4stuDbContext();

        // GET: api/StaffOrderManagements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StaffOrderManagement>>> GetStaffOrderManagements()
        {
          if (_context.StaffOrderManagements == null)
          {
              return NotFound();
          }
            return await _context.StaffOrderManagements.ToListAsync();
        }

        // GET: api/StaffOrderManagements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StaffOrderManagement>> GetStaffOrderManagement(int id)
        {
          if (_context.StaffOrderManagements == null)
          {
              return NotFound();
          }
            var staffOrderManagement = await _context.StaffOrderManagements.FindAsync(id);

            if (staffOrderManagement == null)
            {
                return NotFound();
            }

            return staffOrderManagement;
        }

        // PUT: api/StaffOrderManagements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStaffOrderManagement(int id, StaffOrderManagement staffOrderManagement)
        {
            if (id != staffOrderManagement.TaskId)
            {
                return BadRequest();
            }

            _context.Entry(staffOrderManagement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StaffOrderManagementExists(id))
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

        // POST: api/StaffOrderManagements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StaffOrderManagement>> PostStaffOrderManagement(StaffOrderManagement staffOrderManagement)
        {
          if (_context.StaffOrderManagements == null)
          {
              return Problem("Entity set '_4stuDbContext.StaffOrderManagements'  is null.");
          }
            _context.StaffOrderManagements.Add(staffOrderManagement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStaffOrderManagement", new { id = staffOrderManagement.TaskId }, staffOrderManagement);
        }

        // DELETE: api/StaffOrderManagements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStaffOrderManagement(int id)
        {
            if (_context.StaffOrderManagements == null)
            {
                return NotFound();
            }
            var staffOrderManagement = await _context.StaffOrderManagements.FindAsync(id);
            if (staffOrderManagement == null)
            {
                return NotFound();
            }

            _context.StaffOrderManagements.Remove(staffOrderManagement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StaffOrderManagementExists(int id)
        {
            return (_context.StaffOrderManagements?.Any(e => e.TaskId == id)).GetValueOrDefault();
        }
    }
}
