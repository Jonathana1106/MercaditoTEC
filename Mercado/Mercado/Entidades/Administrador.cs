using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class Administrador
    {
        [Key]
        public int Cedula { get; set; }
        public string Nombre { get; set; }
        public int Telefono { get; set; }
        public string Apellidos { get; set; }
        public string Correo { get; set; }
    }
}
