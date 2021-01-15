using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class Chat
    {
        [Key]
        public int idMensaje { get; set; }
        public DateTime Fecha { get; set; }
        public DateTime Hora { get; set; }
        public int Comprador { get; set; }
        public int Vendedor { get; set; }
        public string Mensaje { get; set; }
    }
}
