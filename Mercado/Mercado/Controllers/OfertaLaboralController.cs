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
    public class OfertaLaboralController : ControllerBase
    {
        private readonly AppDbContext context; 
        public OfertaLaboralController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<OfertaLaboral>>> GetOfertaLaboral()
        {
            return await context.OfertaLaboral.ToListAsync();
        }

        // GET: api/ofertalaboral/5
        [HttpGet("{IDOferta}")]
        public async Task<ActionResult<OfertaLaboral>> GetOfertaLaboral(int IDOferta)
        {
            var oferta = await context.OfertaLaboral.FindAsync(IDOferta);

            if (oferta == null)
            {
                return NotFound();
            }

            return oferta;
        }

        // PUT: api/ofertalaboral/5
        [HttpPut("{IDOferta}")]
        public async Task<IActionResult> PutOfertaLaboral(int IDOferta, OfertaLaboral oferta)
        {
            if (IDOferta!= oferta.IDOferta)
            {
                return BadRequest();
            }

            context.Entry(oferta).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ofertalaboralExists(IDOferta))
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

        // POST: api/ofertalaboral
        [HttpPost]
        public async Task<ActionResult<OfertaLaboral>> PostOfertaLaboral(OfertaLaboral oferta)
        {
            context.OfertaLaboral.Add(oferta);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetOfertaLaboral", new { IDForo = oferta.IDOferta }, oferta);
        }

        // DELETE: api/ofertalaboral/5
        [HttpDelete("{IDOferta}")]
        public async Task<ActionResult<OfertaLaboral>> DeleteOfertaLaboral(int IDOferta)
        {
            var oferta = await context.OfertaLaboral.FindAsync(IDOferta);
            if (oferta == null)
            {
                return NotFound();
            }

            context.OfertaLaboral.Remove(oferta);
            await context.SaveChangesAsync();

            return oferta;
        }

        private bool ofertalaboralExists(int IDOferta)
        {
            return context.OfertaLaboral.Any(e => e.IDOferta == IDOferta);
        }

    }
}
