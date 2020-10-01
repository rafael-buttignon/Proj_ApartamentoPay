using ApartamentoPay.Dominio.Entidades;
using ApartamentoPay.Dominio.ObjetoDeValor;
using ApartamentoPay.Repositorio.Config;
using Microsoft.EntityFrameworkCore;

namespace ApartamentoPay.Repositorio.Contexto
{
    public class ApartamentoPayContexto : DbContext
    {
        public ApartamentoPayContexto(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Apartamento> Apartamentos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> ItensPedidos { get; set; }
        public DbSet<FormaPagamento> FormaPagamento { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Classes de mapeamento aqui...
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new ApartamentoPayConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }
}