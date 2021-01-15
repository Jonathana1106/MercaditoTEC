using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class OfertaLaboral
    {
        [Key]
        public int IDOferta { get; set; }
        public string Oportunidad { get; set; }
        public string DescripcionPuesto { get; set; }
        public string Responsabilidades { get; set; }
        public string Empresa { get; set; }
        public string Requisitos { get; set; }
        public int BaseSalarial { get; set; }
        public string Ubicacion { get; set; }
        public int Ofertante { get; set; }

    }
}

