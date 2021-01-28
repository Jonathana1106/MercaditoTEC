using Mercado.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mercado.Contexto
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Administrador> Administrador { get; set; }
        public DbSet<Categoria> Categoria { get; set; }
        public DbSet<Chat> Chat { get; set; }
        public DbSet<Empleador> Empleador { get; set; }
        public DbSet<Estudiante> Estudiante { get; set; }
        public DbSet<Evaluacion> Evaluacion { get; set; }
        public DbSet<Foro> Foro { get; set; }
        public DbSet<OfertaLaboral> OfertaLaboral { get; set; }
        public DbSet<Producto> Producto { get; set; }
        public DbSet<Puntaje> Puntaje { get; set; }
        public DbSet<Reporte> Reporte { get; set; }
        public DbSet<ReporteCompra> ReporteCompra { get; set; }
        public DbSet<Servicio> Servicio { get; set; }
        public DbSet<Tutoria> Tutoria { get; set; }

    }
}
