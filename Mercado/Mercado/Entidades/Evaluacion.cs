using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class Evaluacion
    {
        [Key]
        public int IDEvaluacion { get; set; }
        public DateTime Fecha { get; set; }
        public string Evaluador { get; set; }
        public string Evaluado { get; set; }
        public string Evaluacionn { get; set; }
        public string Comentario { get; set; }

    }
}
