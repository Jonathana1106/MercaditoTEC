using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class Categoria
    {
        [Key]
        public string Nombre { get; set; }
        public int Puntaje { get; set; }
        public string Tipo { get; set; }
    }
}
