using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class Foro
    {
        [Key]
        public int IDForo { get; set; }
        public TimeSpan Fecha { get; set; } //check this:)
        public DateTime Hora { get; set; }
        public string Mensaje { get; set; }
        public string Estudiante { get; set; }
        public string Curso { get; set; }
    }
}

