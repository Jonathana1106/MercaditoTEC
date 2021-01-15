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
    public class CategoriaController : ControllerBase
    {
        private readonly AppDbContext context; 
        public CategoriaController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Categoria>>> GetCategoria()
        {
            return await context.Categoria.ToListAsync();
        }

        // GET: api/categoria/5
        [HttpGet("{nombre}")]
        public async Task<ActionResult<Categoria>> GetCategoria(string nombre)
        {
            var categoria = await context.Categoria.FindAsync(nombre);

            if (categoria == null)
            {
                return NotFound();
            }

            return categoria;
        }

        // PUT: api/categoria/5
        [HttpPut("{nombre}")]
        public async Task<IActionResult> PutCategoria(string nombre, Categoria categoria)
        {
            if (nombre != categoria.Nombre)
            {
                return BadRequest();
            }

            context.Entry(categoria).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!categoriaExists(nombre))
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

        // POST: api/categoria
        [HttpPost]
        public async Task<ActionResult<Categoria>> PostCategoria(Categoria categoria)
        {
            context.Categoria.Add(categoria);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetCategoria", new { Nombre = categoria.Nombre }, categoria);
        }

        // DELETE: api/categoria/5
        [HttpDelete("{nombre}")]
        public async Task<ActionResult<Categoria>> DeleteCategoria(string nombre)
        {
            var categoria = await context.Categoria.FindAsync(nombre);
            if (categoria == null)
            {
                return NotFound();
            }

            context.Categoria.Remove(categoria);
            await context.SaveChangesAsync();

            return categoria;
        }

        private bool categoriaExists(string nombre)
        {
            return context.Categoria.Any(e => e.Nombre == nombre);
        }

    }
}
