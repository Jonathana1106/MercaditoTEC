using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class Estudiante
    {
        [Key]
        public int IDEstudiante { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Correo { get; set; }
        public int Puntos { get; set; }
        public int Telefono { get; set; }
        public int Carnet { get; set; }
        public DateTime FechaActividad { get; set; }
    }
}

