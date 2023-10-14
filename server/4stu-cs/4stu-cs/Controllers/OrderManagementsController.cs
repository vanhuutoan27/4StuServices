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
    public class OrderManagementsController : ControllerBase
    {
        private readonly IConfiguration _config;
        public OrderManagementsController(IConfiguration config)
        {
            _config = config;
        }

        private _4stuDbContext _context = new _4stuDbContext();

        // GET: api/OrderManagements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderManagement>>> GetOrderManagements()
        {
            if (_context.OrderManagements == null)
            {
                return NotFound();
            }
            return await _context.OrderManagements.ToListAsync();
        }

        // GET: api/OrderManagements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderManagement>> GetOrderManagement(int id)
        {
            if (_context.OrderManagements == null)
            {
                return NotFound();
            }
            var orderManagement = await _context.OrderManagements.FindAsync(id);

            if (orderManagement == null)
            {
                return NotFound();
            }

            return orderManagement;
        }

        // PUT: api/OrderManagements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderManagement(int id, OrderManagement orderManagement)
        {
            if (id != orderManagement.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(orderManagement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderManagementExists(id))
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

        // POST: api/OrderManagements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<OrderManagement>> PostOrderManagement(OrderManagement orderManagement)
        {
            if (_context.OrderManagements == null)
            {
                return Problem("Entity set '_4stuDbContext.OrderManagements'  is null.");
            }
            _context.OrderManagements.Add(orderManagement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrderManagement", new { id = orderManagement.OrderId }, orderManagement);
        }

        // DELETE: api/OrderManagements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderManagement(int id)
        {
            if (_context.OrderManagements == null)
            {
                return NotFound();
            }
            var orderManagement = await _context.OrderManagements.FindAsync(id);
            if (orderManagement == null)
            {
                return NotFound();
            }

            _context.OrderManagements.Remove(orderManagement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderManagementExists(int id)
        {
            return (_context.OrderManagements?.Any(e => e.OrderId == id)).GetValueOrDefault();
        }
    }
}
