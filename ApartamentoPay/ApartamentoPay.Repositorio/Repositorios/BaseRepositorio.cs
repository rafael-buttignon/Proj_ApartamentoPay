using ApartamentoPay.Dominio.Contratos;
using ApartamentoPay.Repositorio.Contexto;
using System.Collections.Generic;
using System.Linq;

namespace ApartamentoPay.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {
        protected readonly ApartamentoPayContexto ApartamentoPayContexto;

        public BaseRepositorio(ApartamentoPayContexto apartamentoPayContexto)
        {
            ApartamentoPayContexto = apartamentoPayContexto; 
        }

        public void Adicionar(TEntity entity)
        {
            ApartamentoPayContexto.Set<TEntity>().Add(entity);
            ApartamentoPayContexto.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            ApartamentoPayContexto.Set<TEntity>().Update(entity);
            ApartamentoPayContexto.SaveChanges();
        }

        public TEntity ObterPorId(int id)
        {
            return ApartamentoPayContexto.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return ApartamentoPayContexto.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            ApartamentoPayContexto.Remove(entity);
            ApartamentoPayContexto.SaveChanges();
        }

        public void Dispose()
        {
            ApartamentoPayContexto.Dispose();
        }
    }
}