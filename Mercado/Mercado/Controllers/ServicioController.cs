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
    public class ServicioController : ControllerBase
    {
        private readonly AppDbContext context; 
        public ServicioController(AppDbContext context)
        {
            this.context = context;
        }
        
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Servicio>>> GetServicio()
        {
            return await context.Servicio.ToListAsync();
        }

        // GET: api/servicio/5
        [HttpGet("{IDServicio}")]
        public async Task<ActionResult<Servicio>> GetServicio(int IDServicio)
        {
            var servicio = await context.Servicio.FindAsync(IDServicio);

            if (servicio == null)
            {
                return NotFound();
            }

            return servicio;
        }

        // PUT: api/servicio/5
        [HttpPut("{IDServicio}")]
        public async Task<IActionResult> PutServicio(int IDServicio, Servicio servicio)
        {
            if (IDServicio != servicio.IDServicio)
            {
                return BadRequest();
            }

            context.Entry(servicio).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!servicioExists(IDServicio))
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

        // POST: api/servicio
        [HttpPost]
        public async Task<ActionResult<Servicio>> PostServicio(Servicio servicio)
        {
            context.Servicio.Add(servicio);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetServicio", new { IDServicio = servicio.IDServicio }, servicio);
        }

        // DELETE: api/servicio/5
        [HttpDelete("{IDServicio}")]
        public async Task<ActionResult<Servicio>> DeleteServicio(int IDServicio)
        {
            var servicio = await context.Servicio.FindAsync(IDServicio);
            if (servicio == null)
            {
                return NotFound();
            }

            context.Servicio.Remove(servicio);
            await context.SaveChangesAsync();

            return servicio;
        }

        private bool servicioExists(int IDServicio)
        {
            return context.Servicio.Any(e => e.IDServicio == IDServicio);
        }

    }
}
