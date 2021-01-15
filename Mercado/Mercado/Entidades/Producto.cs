using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Entidades
{
    public class Producto
    {
        [Key]
        public int IDProducto { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public int Precio { get; set; }
        public string Fotos { get; set; }
        public string MetodoPago { get; set; }
        public string LugarEntrega { get; set; }
        public int Vendedor { get; set; }
        public string ConfirmacionVendedor { get; set; }
        public string ConfirmacionComprador { get; set; }
    }
}
