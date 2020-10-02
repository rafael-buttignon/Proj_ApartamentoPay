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

            modelBuilder.Entity<FormaPagamento>().HasData(new FormaPagamento() { Id = 1, Nome = "Boleto", Descricao = "Forma de Pagamento Boleto" });
            modelBuilder.Entity<FormaPagamento>().HasData(new FormaPagamento() { Id = 2, Nome = "Cartao De Credito", Descricao = "Forma de Pagamento Cartão de Credito" });
            modelBuilder.Entity<FormaPagamento>().HasData(new FormaPagamento() { Id = 3, Nome = "Deposito", Descricao = "Forma de Pagamento Deposito" });
            modelBuilder.Entity<FormaPagamento>().HasData(new FormaPagamento() { Id = 4, Nome = "Boleto", Descricao = "Forma de Pagamento Boleto" });
            modelBuilder.Entity<FormaPagamento>().HasData(new FormaPagamento() { Id = 5, Nome = "Cartão De Credito", Descricao = "Forma de Pagamento Cartão De Credito" });
            modelBuilder.Entity<FormaPagamento>().HasData(new FormaPagamento() { Id = 6, Nome = "Boleto", Descricao = "Forma de Pagamento Boletinho" });


            base.OnModelCreating(modelBuilder);
        }
    }
}