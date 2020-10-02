using ApartamentoPay.Dominio.Contratos;
using ApartamentoPay.Dominio.Entidades;
using ApartamentoPay.Repositorio.Contexto;

namespace ApartamentoPay.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(ApartamentoPayContexto apartamentoPayContexto) : base(apartamentoPayContexto)
        {
        }
    }
}
