using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class Puntaje
    {
        [Key]
        public int IDPuntaje { get; set; }
        public int Puntos { get; set; }
        public int TasaConversion { get; set; }
    }
}
