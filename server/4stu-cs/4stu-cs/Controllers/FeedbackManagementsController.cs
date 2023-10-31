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
    public class FeedbackManagementsController : ControllerBase
    {
        private readonly IConfiguration _config;
        public FeedbackManagementsController(IConfiguration config)
        {
            _config = config;
        }

        private _4stuDbContext _context = new _4stuDbContext();

        // GET: api/FeedbackManagements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FeedbackManagement>>> GetFeedbackManagements()
        {
          if (_context.FeedbackManagements == null)
          {
              return NotFound();
          }
            return await _context.FeedbackManagements.ToListAsync();
        }

        // GET: api/FeedbackManagements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FeedbackManagement>> GetFeedbackManagement(int id)
        {
          if (_context.FeedbackManagements == null)
          {
              return NotFound();
          }
            var feedbackManagement = await _context.FeedbackManagements.FindAsync(id);

            if (feedbackManagement == null)
            {
                return NotFound();
            }

            return feedbackManagement;
        }

        // PUT: api/FeedbackManagements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFeedbackManagement(int id, FeedbackManagement feedbackManagement)
        {
            if (id != feedbackManagement.FeedbackId)
            {
                return BadRequest();
            }

            _context.Entry(feedbackManagement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FeedbackManagementExists(id))
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

        // POST: api/FeedbackManagements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FeedbackManagement>> PostFeedbackManagement(FeedbackManagement feedbackManagement)
        {
          if (_context.FeedbackManagements == null)
          {
              return Problem("Entity set '_4stuDbContext.FeedbackManagements'  is null.");
          }
            _context.FeedbackManagements.Add(feedbackManagement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFeedbackManagement", new { id = feedbackManagement.FeedbackId }, feedbackManagement);
        }

        // DELETE: api/FeedbackManagements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFeedbackManagement(int id)
        {
            if (_context.FeedbackManagements == null)
            {
                return NotFound();
            }
            var feedbackManagement = await _context.FeedbackManagements.FindAsync(id);
            if (feedbackManagement == null)
            {
                return NotFound();
            }

            _context.FeedbackManagements.Remove(feedbackManagement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FeedbackManagementExists(int id)
        {
            return (_context.FeedbackManagements?.Any(e => e.FeedbackId == id)).GetValueOrDefault();
        }
    }
}
