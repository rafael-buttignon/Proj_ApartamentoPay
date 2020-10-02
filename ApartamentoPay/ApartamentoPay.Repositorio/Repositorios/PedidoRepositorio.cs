using ApartamentoPay.Dominio.Contratos;
using ApartamentoPay.Dominio.Entidades;
using ApartamentoPay.Repositorio.Contexto;

namespace ApartamentoPay.Repositorio.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidoRepositorio(ApartamentoPayContexto apartamentoPayContexto) : base(apartamentoPayContexto)
        {
        }
    }
}
