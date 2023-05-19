using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace customer_api.Data
{
    /// <inheritdoc />
    public partial class notnullCP : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_ContactPhones_ContactPhonesId",
                table: "Customers");

            migrationBuilder.AlterColumn<int>(
                name: "ContactPhonesId",
                table: "Customers",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_ContactPhones_ContactPhonesId",
                table: "Customers",
                column: "ContactPhonesId",
                principalTable: "ContactPhones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_ContactPhones_ContactPhonesId",
                table: "Customers");

            migrationBuilder.AlterColumn<int>(
                name: "ContactPhonesId",
                table: "Customers",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_ContactPhones_ContactPhonesId",
                table: "Customers",
                column: "ContactPhonesId",
                principalTable: "ContactPhones",
                principalColumn: "Id");
        }
    }
}
