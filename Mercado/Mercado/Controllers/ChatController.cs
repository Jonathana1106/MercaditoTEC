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
    public class ChatController : ControllerBase
    {
        private readonly AppDbContext context; 
        public ChatController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Chat>>> GetChat()
        {
            return await context.Chat.ToListAsync();
        }

        // GET: api/chat/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Chat>> GetChat(int id)
        {
            var chat = await context.Chat.FindAsync(id);

            if (chat == null)
            {
                return NotFound();
            }

            return chat;
        }

        // PUT: api/chat/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChat(int id, Chat chat)
        {
            if (id != chat.idMensaje)
            {
                return BadRequest();
            }

            context.Entry(chat).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!chatExists(id))
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

        // POST: api/chat
        [HttpPost]
        public async Task<ActionResult<Chat>> PostChat(Chat chat)
        {
            context.Chat.Add(chat);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetChat", new { idMensaje = chat.idMensaje }, chat);
        }

        // DELETE: api/chat/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Chat>> DeleteChat(int id)
        {
            var chat = await context.Chat.FindAsync(id);
            if (chat == null)
            {
                return NotFound();
            }

            context.Chat.Remove(chat);
            await context.SaveChangesAsync();

            return chat;
        }

        private bool chatExists(int id)
        {
            return context.Chat.Any(e => e.idMensaje == id);
        }

    }
}
