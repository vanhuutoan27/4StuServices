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
    public class PackageServiceManagementsController : ControllerBase
    {
        private _4stuDbContext _context = new _4stuDbContext();

        // GET: api/PackageServiceManagements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PackageServiceManagement>>> GetPackageServiceManagements()
        {
            if (_context.PackageServiceManagements == null)
            {
                return NotFound();
            }
            return await _context.PackageServiceManagements.ToListAsync();
        }

        // GET: api/PackageServiceManagements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PackageServiceManagement>> GetPackageServiceManagement(int id)
        {
            if (_context.PackageServiceManagements == null)
            {
                return NotFound();
            }
            var packageServiceManagement = await _context.PackageServiceManagements.FindAsync(id);

            if (packageServiceManagement == null)
            {
                return NotFound();
            }

            return packageServiceManagement;
        }

        // PUT: api/PackageServiceManagements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPackageServiceManagement(int id, PackageServiceManagement packageServiceManagement)
        {
            if (id != packageServiceManagement.PackageServiceId)
            {
                return BadRequest();
            }

            _context.Entry(packageServiceManagement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PackageServiceManagementExists(id))
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

        // POST: api/PackageServiceManagements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PackageServiceManagement>> PostPackageServiceManagement(PackageServiceManagement packageServiceManagement)
        {
            if (_context.PackageServiceManagements == null)
            {
                return Problem("Entity set '_4stuDbContext.PackageServiceManagements'  is null.");
            }
            _context.PackageServiceManagements.Add(packageServiceManagement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPackageServiceManagement", new { id = packageServiceManagement.PackageServiceId }, packageServiceManagement);
        }

        // DELETE: api/PackageServiceManagements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePackageServiceManagement(int id)
        {
            if (_context.PackageServiceManagements == null)
            {
                return NotFound();
            }
            var packageServiceManagement = await _context.PackageServiceManagements.FindAsync(id);
            if (packageServiceManagement == null)
            {
                return NotFound();
            }

            _context.PackageServiceManagements.Remove(packageServiceManagement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PackageServiceManagementExists(int id)
        {
            return (_context.PackageServiceManagements?.Any(e => e.PackageServiceId == id)).GetValueOrDefault();
        }
    }
}
