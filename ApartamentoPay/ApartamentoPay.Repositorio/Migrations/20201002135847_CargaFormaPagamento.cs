using Microsoft.EntityFrameworkCore.Migrations;

namespace ApartamentoPay.Repositorio.Migrations
{
    public partial class CargaFormaPagamento : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FormaPagamento",
                columns: new[] { "Id", "Descricao", "Nome" },
                values: new object[,]
                {
                    { 1, "Forma de Pagamento Boleto", "Boleto" },
                    { 2, "Forma de Pagamento Cartão de Credito", "Cartao De Credito" },
                    { 3, "Forma de Pagamento Deposito", "Deposito" },
                    { 4, "Forma de Pagamento Boleto", "Boleto" },
                    { 5, "Forma de Pagamento Cartão De Credito", "Cartão De Credito" },
                    { 6, "Forma de Pagamento Boletinho", "Boleto" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 6);
        }
    }
}
