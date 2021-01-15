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
    public class ReporteCompraController : ControllerBase
    {
        private readonly AppDbContext context; 
        public ReporteCompraController(AppDbContext context)
        {
            this.context = context;
        }
        
        [HttpGet]

        public async Task<ActionResult<IEnumerable<ReporteCompra>>> GetReporteCompra()
        {
            return await context.ReporteCompra.ToListAsync();
        }

        // GET: api/reporteCompra/5
        [HttpGet("{IDReporteCompra}")]
        public async Task<ActionResult<ReporteCompra>> GetReporteCompra(int IDReporteCompra)
        {
            var reporteCompra = await context.ReporteCompra.FindAsync(IDReporteCompra);

            if (reporteCompra == null)
            {
                return NotFound();
            }

            return reporteCompra;
        }
        
        // PUT: api/reporteCompra/5
        [HttpPut("{IDReporteCompra}")]
        public async Task<IActionResult> PutReporteCompra(int IDReporteCompra, ReporteCompra reporteCompra)
        {
            if (IDReporteCompra != reporteCompra.IDReporte)
            {
                return BadRequest();
            }

            context.Entry(reporteCompra).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!reporteCompraExists(IDReporteCompra))
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

        // POST: api/reporteCompra
        [HttpPost]
        public async Task<ActionResult<ReporteCompra>> PostReporteCompra(ReporteCompra reporteCompra)
        {
            context.ReporteCompra.Add(reporteCompra);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetReporteCompra", new { IDReporteCompra = reporteCompra.IDReporte }, reporteCompra);
        }

        // DELETE: api/reporteCompra/5
        [HttpDelete("{IDReporteCompra}")]
        public async Task<ActionResult<ReporteCompra>> DeleteReporteCompra(int IDReporteCompra)
        {
            var reporteCompra = await context.ReporteCompra.FindAsync(IDReporteCompra);
            if (reporteCompra == null)
            {
                return NotFound();
            }

            context.ReporteCompra.Remove(reporteCompra);
            await context.SaveChangesAsync();

            return reporteCompra;
        }

        private bool reporteCompraExists(int IDReporteCompra)
        {
            return context.ReporteCompra.Any(e => e.IDReporte == IDReporteCompra);
        }

    }
}
