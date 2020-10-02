using ApartamentoPay.Dominio.Contratos;
using ApartamentoPay.Dominio.Entidades;
using ApartamentoPay.Repositorio.Contexto;

namespace ApartamentoPay.Repositorio.Repositorios
{
    public class ApartamentoRepositorio : BaseRepositorio<Apartamento>, IApartamentoRepositorio
    {
        public ApartamentoRepositorio(ApartamentoPayContexto apartamentoPayContexto) : base(apartamentoPayContexto)
        {
        }
    }
}
