using ApartamentoPay.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ApartamentoPay.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int NumeroApartamento { get; set; }
        public int FormaPagamentoId { get; set; }
        public FormaPagamento FormaPagamento { get; set; }

        //Pedido deve ter pelo menos um item de pedido ou muitos itens  de pedidos
        public ICollection<ItemPedido> ItensPedido { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (!ItensPedido.Any())
                AdicionarCritica("Crítica - Pedido não pode ficar sem item de pedidos");

            if(string.IsNullOrEmpty(CEP))
                AdicionarCritica("Crítica - CEP deve estar preenchido");

            if (FormaPagamentoId == 0)
                AdicionarCritica("Critica - Não foi informado a forma de Pagamento");

        }
    }
}