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
    public class ReporteController : ControllerBase
    {
        private readonly AppDbContext context; 
        public ReporteController(AppDbContext context)
        {
            this.context = context;
        }
        
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Reporte>>> GetReporte()
        {
            return await context.Reporte.ToListAsync();
        }

        // GET: api/reporte/5
        [HttpGet("{IDReporte}")]
        public async Task<ActionResult<Reporte>> GetReporte(int IDReporte)
        {
            var reporte = await context.Reporte.FindAsync(IDReporte);

            if (reporte == null)
            {
                return NotFound();
            }

            return reporte;
        }

        // PUT: api/reporte/5
        [HttpPut("{IDReporte}")]
        public async Task<IActionResult> PutReporte(int IDReporte, Reporte reporte)
        {
            if (IDReporte != reporte.IDReporte)
            {
                return BadRequest();
            }

            context.Entry(reporte).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!reporteExists(IDReporte))
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

        // POST: api/reporte
        [HttpPost]
        public async Task<ActionResult<Reporte>> PostReporte(Reporte reporte)
        {
            context.Reporte.Add(reporte);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetReporte", new { IDReporte = reporte.IDReporte }, reporte);
        }

        // DELETE: api/reporte/5
        [HttpDelete("{IDReporte}")]
        public async Task<ActionResult<Reporte>> DeleteReporte(int IDReporte)
        {
            var reporte = await context.Reporte.FindAsync(IDReporte);
            if (reporte == null)
            {
                return NotFound();
            }

            context.Reporte.Remove(reporte);
            await context.SaveChangesAsync();

            return reporte;
        }

        private bool reporteExists(int IDReporte)
        {
            return context.Reporte.Any(e => e.IDReporte == IDReporte);
        }

    }
}
