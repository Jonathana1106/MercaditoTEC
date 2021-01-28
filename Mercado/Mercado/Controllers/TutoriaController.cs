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
    public class TutoriaController : ControllerBase
    {
        private readonly AppDbContext context; 
        public TutoriaController(AppDbContext context)
        {
            this.context = context;
        }
        
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Tutoria>>> GetTutoria()
        {
            return await context.Tutoria.ToListAsync();
        }

        // GET: api/tutoria/5
        [HttpGet("{IDTutoria}")]
        public async Task<ActionResult<Tutoria>> GetTutoria(int IDTutoria)
        {
            var tutoria = await context.Tutoria.FindAsync(IDTutoria);

            if (tutoria == null)
            {
                return NotFound();
            }

            return tutoria;
        }

        // PUT: api/tutoria/5
        [HttpPut("{IDTutoria}")]
        public async Task<IActionResult> PutTutoria(int IDTutoria, Tutoria tutoria)
        {
            if (IDTutoria != tutoria.IDTutoria)
            {
                return BadRequest();
            }

            context.Entry(tutoria).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tutoriaExists(IDTutoria))
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

        // POST: api/tutoria
        [HttpPost]
        public async Task<ActionResult<Tutoria>> PostTutoria(Tutoria tutoria)
        {
            context.Tutoria.Add(tutoria);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetTutoria", new { IDTutoria = tutoria.IDTutoria }, tutoria);
        }

        // DELETE: api/tutoria/5
        [HttpDelete("{IDTutoria}")]
        public async Task<ActionResult<Tutoria>> DeleteTutoria(int IDTutoria)
        {
            var tutoria = await context.Tutoria.FindAsync(IDTutoria);
            if (tutoria == null)
            {
                return NotFound();
            }

            context.Tutoria.Remove(tutoria);
            await context.SaveChangesAsync();

            return tutoria;
        }

        private bool tutoriaExists(int IDTutoria)
        {
            return context.Tutoria.Any(e => e.IDTutoria == IDTutoria);
        }

    }
}
