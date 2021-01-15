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
    public class EvaluacionController : ControllerBase
    {
        private readonly AppDbContext context; 
        public EvaluacionController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Evaluacion>>> GetEvaluacion()
        {
            return await context.Evaluacion.ToListAsync();
        }

        // GET: api/evaluacion/5
        [HttpGet("{IDEvaluacion}")]
        public async Task<ActionResult<Evaluacion>> GetEvaluacion(int IDEvaluacion)
        {
            var evaluacion = await context.Evaluacion.FindAsync(IDEvaluacion);

            if (evaluacion == null)
            {
                return NotFound();
            }

            return evaluacion;
        }

        // PUT: api/evaluacion/5
        [HttpPut("{IDEvaluacion}")]
        public async Task<IActionResult> PutEvaluacion(int IDEvaluacion, Evaluacion evaluacion)
        {
            if (IDEvaluacion != evaluacion.IDEvaluacion)
            {
                return BadRequest();
            }

            context.Entry(evaluacion).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!evaluacionExists(IDEvaluacion))
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

        // POST: api/evaluacion
        [HttpPost]
        public async Task<ActionResult<Evaluacion>> PostEvaluacion(Evaluacion evaluacion)
        {
            context.Evaluacion.Add(evaluacion);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetEvaluacion", new { IDEvaluacion = evaluacion.IDEvaluacion }, evaluacion);
        }

        // DELETE: api/evaluacion/5
        [HttpDelete("{IDEvaluacion}")]
        public async Task<ActionResult<Evaluacion>> DeleteEvaluacion(int IDEvaluacion)
        {
            var evaluacion = await context.Evaluacion.FindAsync(IDEvaluacion);
            if (evaluacion == null)
            {
                return NotFound();
            }

            context.Evaluacion.Remove(evaluacion);
            await context.SaveChangesAsync();

            return evaluacion;
        }

        private bool evaluacionExists(int IDEvaluacion)
        {
            return context.Evaluacion.Any(e => e.IDEvaluacion == IDEvaluacion);
        }

    }
}
