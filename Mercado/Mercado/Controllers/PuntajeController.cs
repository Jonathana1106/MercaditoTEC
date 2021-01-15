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
    public class PuntajeController : ControllerBase
    {
        private readonly AppDbContext context; 
        public PuntajeController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Puntaje>>> GetPuntaje()
        {
            return await context.Puntaje.ToListAsync();
        }

        // GET: api/puntaje/5
        [HttpGet("{IDPuntaje}")]
        public async Task<ActionResult<Puntaje>> GetPuntaje(int IDPuntaje)
        {
            var puntaje = await context.Puntaje.FindAsync(IDPuntaje);

            if (puntaje == null)
            {
                return NotFound();
            }

            return puntaje;
        }

        // PUT: api/puntaje/5
        [HttpPut("{IDPuntaje}")]
        public async Task<IActionResult> PutPuntaje(int IDPuntaje, Puntaje puntaje)
        {
            if (IDPuntaje != puntaje.IDPuntaje)
            {
                return BadRequest();
            }

            context.Entry(puntaje).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!puntajeExists(IDPuntaje))
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

        // POST: api/puntaje
        [HttpPost]
        public async Task<ActionResult<Puntaje>> PostPuntaje(Puntaje puntaje)
        {
            context.Puntaje.Add(puntaje);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetPuntaje", new { IDPuntaje = puntaje.IDPuntaje }, puntaje);
        }

        // DELETE: api/puntaje/5
        [HttpDelete("{IDPuntaje}")]
        public async Task<ActionResult<Puntaje>> DeletePuntaje(int IDPuntaje)
        {
            var puntaje = await context.Puntaje.FindAsync(IDPuntaje);
            if (puntaje == null)
            {
                return NotFound();
            }

            context.Puntaje.Remove(puntaje);
            await context.SaveChangesAsync();

            return puntaje;
        }

        private bool puntajeExists(int IDPuntaje)
        {
            return context.Puntaje.Any(e => e.IDPuntaje == IDPuntaje);
        }

    }
}
