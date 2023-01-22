using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReminderAPI;
using ReminderAPI.Data;

namespace ReminderAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReminderTypesController : ControllerBase
    {
        private readonly DataContext _context;

        public ReminderTypesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/ReminderTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReminderType>>> GetRemindersType()
        {
            return await _context.RemindersType.ToListAsync();
        }

        // GET: api/ReminderTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReminderType>> GetReminderType(int id)
        {
            var reminderType = await _context.RemindersType.FindAsync(id);

            if (reminderType == null)
            {
                return NotFound();
            }

            return reminderType;
        }

        // PUT: api/ReminderTypes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReminderType(int id, ReminderType reminderType)
        {
            if (id != reminderType.Id)
            {
                return BadRequest();
            }

            _context.Entry(reminderType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReminderTypeExists(id))
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

        // POST: api/ReminderTypes
        [HttpPost]
        public async Task<ActionResult<ReminderType>> PostReminderType(ReminderType reminderType)
        {
            _context.RemindersType.Add(reminderType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReminderType", new { id = reminderType.Id }, reminderType);
        }

        // DELETE: api/ReminderTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReminderType(int id)
        {
            var reminderType = await _context.RemindersType.FindAsync(id);
            if (reminderType == null)
            {
                return NotFound();
            }

            _context.RemindersType.Remove(reminderType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReminderTypeExists(int id)
        {
            return _context.RemindersType.Any(e => e.Id == id);
        }
    }
}
