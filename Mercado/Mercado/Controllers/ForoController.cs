using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mercado.Contexto;
using Mercado.Entidades;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Mercado.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ForoController : ControllerBase
    {
        private readonly AppDbContext context; 
        public ForoController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Foro>>> GetForo()
        {
            return await context.Foro.ToListAsync();
        }

        // GET: api/foro/5
        [HttpGet("{IDForo}")]
        public async Task<ActionResult<Foro>> GetForo(int IDForo)
        {
            var foro = await context.Foro.FindAsync(IDForo);

            if (foro == null)
            {
                return NotFound();
            }

            return foro;
        }

        // PUT: api/foro/5
        [HttpPut("{IDForo}")]
        public async Task<IActionResult> PutForo(int IDForo, Foro foro)
        {
            if (IDForo!= foro.IDForo)
            {
                return BadRequest();
            }

            context.Entry(foro).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!foroExists(IDForo))
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

        // POST: api/foro
        [HttpPost]
        public async Task<ActionResult<Foro>> PostForo(Foro foro)
        {
            context.Foro.Add(foro);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetForo", new { IDForo = foro.IDForo }, foro);
        }

        // DELETE: api/foro/5
        [HttpDelete("{IDForo}")]
        public async Task<ActionResult<Foro>> DeleteForo(int IDForo)
        {
            var foro = await context.Foro.FindAsync(IDForo);
            if (foro == null)
            {
                return NotFound();
            }

            context.Foro.Remove(foro);
            await context.SaveChangesAsync();

            return foro;
        }

        private bool foroExists(int IDForo)
        {
            return context.Foro.Any(e => e.IDForo == IDForo);
        }

    }
}
