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
    public class AdministradorController : ControllerBase
    {
        private readonly AppDbContext context; 
        public AdministradorController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Administrador>>> Getadministrador()
        {
            return await context.Administrador.ToListAsync();
        }

        // GET: api/administrador/5
        [HttpGet("{cedula}")]
        public async Task<ActionResult<Administrador>> Getadministrador(int cedula)
        {
            var administrador = await context.Administrador.FindAsync(cedula);

            if (administrador == null)
            {
                return NotFound();
            }

            return administrador;
        }

        // PUT: api/administrador/5
        [HttpPut("{cedula}")]
        public async Task<IActionResult> Putadministrador(int cedula, Administrador administrador)
        {
            if (cedula != administrador.Cedula)
            {
                return BadRequest();
            }

            context.Entry(administrador).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!administradorExists(cedula))
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

        // POST: api/administrador
        [HttpPost]
        public async Task<ActionResult<Administrador>> Postadministrador(Administrador administrador)
        {
            context.Administrador.Add(administrador);
            await context.SaveChangesAsync();

            return CreatedAtAction("Getadministrador", new { cedula = administrador.Cedula }, administrador);
        }

        // DELETE: api/administrador/5
        [HttpDelete("{cedula}")]
        public async Task<ActionResult<Administrador>> Deleteadministrador(int cedula)
        {
            var administrador = await context.Administrador.FindAsync(cedula);
            if (administrador == null)
            {
                return NotFound();
            }

            context.Administrador.Remove(administrador);
            await context.SaveChangesAsync();

            return administrador;
        }

        private bool administradorExists(int cedula)
        {
            return context.Administrador.Any(e => e.Cedula == cedula);
        }

    }
}
