using ApartamentoPay.Dominio.Contratos;
using ApartamentoPay.Dominio.Entidades;
using ApartamentoPay.Repositorio.Contexto;
using Microsoft.EntityFrameworkCore.Internal;
using System.Linq;

namespace ApartamentoPay.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(ApartamentoPayContexto apartamentoPayContexto) : base(apartamentoPayContexto)
        {
        }

        public Usuario Obter(string email, string senha)
        {
            return ApartamentoPayContexto.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
