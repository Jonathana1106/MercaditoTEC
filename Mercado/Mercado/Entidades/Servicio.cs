using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class Servicio
    {
        [Key]
        public int IDServicio { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Imagen { get; set; }
        public int Precio { get; set; }
        public string MetodoPago { get; set; }
        public string Ubicacion { get; set; }
        public int Vendedor { get; set; }
    }
}
