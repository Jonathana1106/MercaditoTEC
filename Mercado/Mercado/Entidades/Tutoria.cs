using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class Tutoria
    {
        [Key]
        public int IDTutoria { get; set; }
        public int Tutor { get; set; }
        public string Curso { get; set; }
        public Byte Practica { get; set; } //check this:)
        public int Precio { get; set; }
        public int Nota { get; set; }
        public string MetodoPago { get; set; }
        public Byte Solucion { get; set; } //check this:)
        public string Tema { get; set; }
    }
}