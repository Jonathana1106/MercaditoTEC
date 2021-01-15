using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class ReporteCompra
    {
        [Key]
        public int IDReporte { get; set; }
        public string NombreVendedor { get; set; }
        public int CarnetVendedor { get; set; }
        public string NombreEstudiante { get; set; }
        public int CarnetEstudiante { get; set; }
        public DateTime FechaVenta { get; set; }
        public string NombreProducto { get; set; }
        public string Evaluacion { get; set; }
        public int IDProducto { get; set; }
    }
}
