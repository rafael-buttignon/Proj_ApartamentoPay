namespace ApartamentoPay.Dominio.Entidades
{
    public class Apartamento : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }

        public override void Validate()
        {

            if (Preco < 0)
                AdicionarCritica("Preco Invalido");
        }
    }
}