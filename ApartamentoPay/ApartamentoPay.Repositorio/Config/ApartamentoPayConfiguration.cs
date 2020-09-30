using ApartamentoPay.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace ApartamentoPay.Repositorio.Config
{
    public class ApartamentoPayConfiguration : IEntityTypeConfiguration<Apartamento>
    {
        public void Configure(EntityTypeBuilder<Apartamento> builder)
        {
            throw new NotImplementedException();
        }
    }
}
