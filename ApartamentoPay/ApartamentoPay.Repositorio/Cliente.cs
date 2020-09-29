using ApartamentoPay.Dominio.Entidades;
using ApartamentoPay.Repositorio.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartamentoPay.Repositorio
{
    public class Cliente
    {
        public Cliente()
        {
            var usuarioRepositorio = new UsuarioRepositorio();
            var usuario = new Usuario();
            usuarioRepositorio.Adicionar(usuario);
        }
    }
}
