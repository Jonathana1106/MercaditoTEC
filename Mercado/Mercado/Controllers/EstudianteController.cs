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
    public class EstudianteController : ControllerBase
    {
        private readonly AppDbContext context; 
        public EstudianteController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Estudiante>>> GetEstudiante()
        {
            return await context.Estudiante.ToListAsync();
        }

        // GET: api/estudiante/5
        [HttpGet("{IDEstudiante}")]
        public async Task<ActionResult<Estudiante>> GetEstudiante(int IDEstudiante)
        {
            var estudiante = await context.Estudiante.FindAsync(IDEstudiante);

            if (estudiante == null)
            {
                return NotFound();
            }

            return estudiante;
        }

        // PUT: api/estudiante/5
        [HttpPut("{IDEstudiante}")]
        public async Task<IActionResult> PutEstudiante(int IDEstudiante, Estudiante estudiante)
        {
            if (IDEstudiante != estudiante.IDEstudiante)
            {
                return BadRequest();
            }

            context.Entry(estudiante).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!estudianteExists(IDEstudiante))
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

        // POST: api/estudiante
        [HttpPost]
        public async Task<ActionResult<Estudiante>> PostEstudiante(Estudiante estudiante)
        {
            context.Estudiante.Add(estudiante);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetEstudiante", new { IDEstudiante = estudiante.IDEstudiante }, estudiante);
        }

        // DELETE: api/estudiante/5
        [HttpDelete("{IDEstudiante}")]
        public async Task<ActionResult<Estudiante>> DeleteEstudiante(int IDEstudiante)
        {
            var estudiante = await context.Estudiante.FindAsync(IDEstudiante);
            if (estudiante == null)
            {
                return NotFound();
            }

            context.Estudiante.Remove(estudiante);
            await context.SaveChangesAsync();

            return estudiante;
        }

        private bool estudianteExists(int IDEstudiante)
        {
            return context.Estudiante.Any(e => e.IDEstudiante == IDEstudiante);
        }

    }
}
