namespace ApartamentoPay.Dominio.Entidades
{
    public class Apartamento : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public string NomeArquivo { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Nome do apartamento não foi informado");

            if (string.IsNullOrEmpty(Descricao))
                AdicionarCritica("Descrição não foi informado");

            if (Preco < 0)
                AdicionarCritica("Preco Invalido");
        }
    }
}