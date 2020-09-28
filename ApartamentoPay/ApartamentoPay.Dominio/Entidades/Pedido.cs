using System;
using System.Collections.Generic;

namespace ApartamentoPay.Dominio.Entidades
{
    public class Pedido
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }

        //Pedido deve ter pelo menos um pedido ou muitos pedidos
        public ICollection<ItemPedido> ItensPedido { get; set; }
    }
}