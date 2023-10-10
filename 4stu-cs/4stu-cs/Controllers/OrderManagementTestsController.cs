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
    public class OrderManagementTestsController : ControllerBase
    {
        private readonly IConfiguration _config;
        public OrderManagementTestsController(IConfiguration config)
        {
            _config = config;
        }

        private _4stuDbContext _context = new _4stuDbContext();

        // GET: api/OrderManagementTests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderManagementTest>>> GetOrderManagementTests()
        {
          if (_context.OrderManagementTests == null)
          {
              return NotFound();
          }
            return await _context.OrderManagementTests.ToListAsync();
        }

        // GET: api/OrderManagementTests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderManagementTest>> GetOrderManagementTest(int id)
        {
          if (_context.OrderManagementTests == null)
          {
              return NotFound();
          }
            var orderManagementTest = await _context.OrderManagementTests.FindAsync(id);

            if (orderManagementTest == null)
            {
                return NotFound();
            }

            return orderManagementTest;
        }

        // PUT: api/OrderManagementTests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderManagementTest(int id, OrderManagementTest orderManagementTest)
        {
            if (id != orderManagementTest.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(orderManagementTest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderManagementTestExists(id))
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

        // POST: api/OrderManagementTests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<OrderManagementTest>> PostOrderManagementTest(OrderManagementTest orderManagementTest)
        {
          if (_context.OrderManagementTests == null)
          {
              return Problem("Entity set '_4stuDbContext.OrderManagementTests'  is null.");
          }
            _context.OrderManagementTests.Add(orderManagementTest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrderManagementTest", new { id = orderManagementTest.OrderId }, orderManagementTest);
        }

        // DELETE: api/OrderManagementTests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderManagementTest(int id)
        {
            if (_context.OrderManagementTests == null)
            {
                return NotFound();
            }
            var orderManagementTest = await _context.OrderManagementTests.FindAsync(id);
            if (orderManagementTest == null)
            {
                return NotFound();
            }

            _context.OrderManagementTests.Remove(orderManagementTest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderManagementTestExists(int id)
        {
            return (_context.OrderManagementTests?.Any(e => e.OrderId == id)).GetValueOrDefault();
        }
    }
}
