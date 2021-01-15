using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class Reporte
    {
        [Key]
        public int IDReporte { get; set; }
        public int IDEvaluacion { get; set; }
        public int Denunciante { get; set; }
        public string Justificacion { get; set; }
    }
}
