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
    public class ServiceManagementsController : ControllerBase
    {
        private _4stuDbContext _context = new _4stuDbContext();

        // GET: api/ServiceManagements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServiceManagement>>> GetServiceManagements()
        {
            if (_context.ServiceManagements == null)
            {
                return NotFound();
            }
            return await _context.ServiceManagements.ToListAsync();
        }

        // GET: api/ServiceManagements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceManagement>> GetServiceManagement(int id)
        {
            if (_context.ServiceManagements == null)
            {
                return NotFound();
            }
            var serviceManagement = await _context.ServiceManagements.FindAsync(id);

            if (serviceManagement == null)
            {
                return NotFound();
            }

            return serviceManagement;
        }

        // PUT: api/ServiceManagements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServiceManagement(int id, ServiceManagement serviceManagement)
        {
            if (id != serviceManagement.ServiceId)
            {
                return BadRequest();
            }

            _context.Entry(serviceManagement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceManagementExists(id))
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

        // POST: api/ServiceManagements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ServiceManagement>> PostServiceManagement(ServiceManagement serviceManagement)
        {
            if (_context.ServiceManagements == null)
            {
                return Problem("Entity set '_4stuDbContext.ServiceManagements'  is null.");
            }
            _context.ServiceManagements.Add(serviceManagement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServiceManagement", new { id = serviceManagement.ServiceId }, serviceManagement);
        }

        // DELETE: api/ServiceManagements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteServiceManagement(int id)
        {
            if (_context.ServiceManagements == null)
            {
                return NotFound();
            }
            var serviceManagement = await _context.ServiceManagements.FindAsync(id);
            if (serviceManagement == null)
            {
                return NotFound();
            }

            _context.ServiceManagements.Remove(serviceManagement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ServiceManagementExists(int id)
        {
            return (_context.ServiceManagements?.Any(e => e.ServiceId == id)).GetValueOrDefault();
        }

    }
}
