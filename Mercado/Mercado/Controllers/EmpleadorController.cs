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
    public class EmpleadorController : ControllerBase
    {
        private readonly AppDbContext context; 
        public EmpleadorController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empleador>>> GetEmpleador()
        {
            return await context.Empleador.ToListAsync();
        }

        // GET: api/empleador/5
        [HttpGet("{cedula}")]
        public async Task<ActionResult<Empleador>> GetEmpleador(int cedula)
        {
            var empleador = await context.Empleador.FindAsync(cedula);

            if (empleador == null)
            {
                return NotFound();
            }

            return empleador;
        }

        // PUT: api/empleador/5
        [HttpPut("{cedula}")]
        public async Task<IActionResult> PutEmpleador(int cedula, Empleador empleador)
        {
            if (cedula != empleador.Cedula)
            {
                return BadRequest();
            }

            context.Entry(empleador).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!empleadorExists(cedula))
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

        // POST: api/empleador
        [HttpPost]
        public async Task<ActionResult<Empleador>> PostEmpleador(Empleador empleador)
        {
            context.Empleador.Add(empleador);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetEmpleador", new { Cedula = empleador.Cedula }, empleador);
        }

        // DELETE: api/empleador/5
        [HttpDelete("{cedula}")]
        public async Task<ActionResult<Empleador>> DeleteEmpleador(int cedula)
        {
            var empleador = await context.Empleador.FindAsync(cedula);
            if (empleador == null)
            {
                return NotFound();
            }

            context.Empleador.Remove(empleador);
            await context.SaveChangesAsync();

            return empleador;
        }

        private bool empleadorExists(int cedula)
        {
            return context.Empleador.Any(e => e.Cedula == cedula);
        }

    }
}
