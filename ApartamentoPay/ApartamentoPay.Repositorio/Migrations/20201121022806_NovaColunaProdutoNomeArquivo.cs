using Microsoft.EntityFrameworkCore.Migrations;

namespace ApartamentoPay.Repositorio.Migrations
{
    public partial class NovaColunaProdutoNomeArquivo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NomeArquivo",
                table: "Apartamentos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NomeArquivo",
                table: "Apartamentos");
        }
    }
}
