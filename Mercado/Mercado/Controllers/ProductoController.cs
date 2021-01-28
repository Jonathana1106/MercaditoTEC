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
    public class ProductoController : ControllerBase
    {
        private readonly AppDbContext context; 
        public ProductoController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Producto>>> GetProducto()
        {
            return await context.Producto.ToListAsync();
        }

        // GET: api/producto/5
        [HttpGet("{IDProducto}")]
        public async Task<ActionResult<Producto>> GetProducto(int IDProducto)
        {
            var producto = await context.Producto.FindAsync(IDProducto);

            if (producto == null)
            {
                return NotFound();
            }

            return producto;
        }

        // PUT: api/producto/5
        [HttpPut("{IDProducto}")]
        public async Task<IActionResult> PutProducto(int IDProducto, Producto producto)
        {
            if (IDProducto != producto.IDProducto)
            {
                return BadRequest();
            }

            context.Entry(producto).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!productoExists(IDProducto))
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

        // POST: api/producto
        [HttpPost]
        public async Task<ActionResult<Producto>> PostProducto(Producto producto)
        {
            context.Producto.Add(producto);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetProducto", new { IDProducto = producto.IDProducto }, producto);
        }

        // DELETE: api/producto/5
        [HttpDelete("{IDProducto}")]
        public async Task<ActionResult<Producto>> DeleteProducto(int IDProducto)
        {
            var producto = await context.Producto.FindAsync(IDProducto);
            if (producto == null)
            {
                return NotFound();
            }

            context.Producto.Remove(producto);
            await context.SaveChangesAsync();

            return producto;
        }

        private bool productoExists(int IDProducto)
        {
            return context.Producto.Any(e => e.IDProducto == IDProducto);
        }

    }
}
