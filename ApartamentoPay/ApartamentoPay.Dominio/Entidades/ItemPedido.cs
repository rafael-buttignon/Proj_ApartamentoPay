namespace ApartamentoPay.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }
        public int ApartamentoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            if (ApartamentoId == 0)
                AdicionarCritica("Não foi identificado qual a referência do Ap");
            if (Quantidade == 0)
                AdicionarCritica("Quantidade não foi informado");
        }
    }
}