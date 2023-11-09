using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace _4stu_cs.Migrations
{
    /// <inheritdoc />
    public partial class InitialDBSetup : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FeedbackManagement",
                columns: table => new
                {
                    FeedbackID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderID = table.Column<int>(type: "int", nullable: false),
                    ServiceID = table.Column<int>(type: "int", nullable: false),
                    CustomerID = table.Column<int>(type: "int", nullable: false),
                    Rating = table.Column<int>(type: "int", nullable: false),
                    Comment = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    DateFeedback = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Feedback__6A4BEDF6F55E1751", x => x.FeedbackID);
                });

            migrationBuilder.CreateTable(
                name: "OrderManagement",
                columns: table => new
                {
                    OrderId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dateCreated = table.Column<DateTime>(type: "date", nullable: true, defaultValueSql: "(getdate())"),
                    dateCompleted = table.Column<DateTime>(type: "date", nullable: true),
                    CustomerId = table.Column<int>(type: "int", nullable: false),
                    CustomerName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Phone = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Address = table.Column<string>(type: "text", nullable: false),
                    Price = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    paymentMethod = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    ServiceId = table.Column<int>(type: "int", nullable: false),
                    ServiceName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    NOTE = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    Status = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true, defaultValueSql: "('Pending')")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__OrderMan__C3905BCFC7471820", x => x.OrderId);
                });

            migrationBuilder.CreateTable(
                name: "PackageServiceManagement",
                columns: table => new
                {
                    PackageServiceID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PackageServiceName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    PackageServiceDesc = table.Column<string>(type: "text", nullable: false),
                    Time = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
                    Price = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    RepetitionCycle = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Status = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true, defaultValueSql: "('Active')"),
                    Image = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true, defaultValueSql: "('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo.png?alt=media&token=2736aeb6-4735-4890-a257-9ef1a0593566&_gl=1*1e16zej*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5NjM0Mzg5OC4xMi4xLjE2OTYzNDM5NDUuMTMuMC4w')"),
                    LongImage = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true, defaultValueSql: "('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo%20(320%20x%20160%20px).png?alt=media&token=e63499fb-1d54-498e-9687-103ab9f255bc&_gl=1*2scf3l*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM2MDQuMjIuMC4w')"),
                    ratingCount = table.Column<int>(type: "int", nullable: true, defaultValueSql: "((0))"),
                    averageRating = table.Column<double>(type: "float", nullable: true, defaultValueSql: "((0))")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__PackageS__5EAFC210E66994B4", x => x.PackageServiceID);
                });

            migrationBuilder.CreateTable(
                name: "ServiceManagement",
                columns: table => new
                {
                    ServiceID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ServiceName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    ServiceDesc = table.Column<string>(type: "text", nullable: false),
                    Time = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
                    Price = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Tag = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Status = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true, defaultValueSql: "('Active')"),
                    Image = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true, defaultValueSql: "('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo.png?alt=media&token=2736aeb6-4735-4890-a257-9ef1a0593566&_gl=1*1e16zej*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5NjM0Mzg5OC4xMi4xLjE2OTYzNDM5NDUuMTMuMC4w')"),
                    LongImage = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true, defaultValueSql: "('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2F4Stu-Logo%20(320%20x%20160%20px).png?alt=media&token=e63499fb-1d54-498e-9687-103ab9f255bc&_gl=1*2scf3l*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM2MDQuMjIuMC4w')"),
                    ratingCount = table.Column<int>(type: "int", nullable: true, defaultValueSql: "((0))"),
                    averageRating = table.Column<double>(type: "float", nullable: true, defaultValueSql: "((0))")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__ServiceM__C51BB0EAF24B08D7", x => x.ServiceID);
                });

            migrationBuilder.CreateTable(
                name: "StaffManagement",
                columns: table => new
                {
                    StaffID = table.Column<int>(type: "int", nullable: false),
                    dateCreated = table.Column<DateTime>(type: "date", nullable: true, defaultValueSql: "(getdate())"),
                    email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    password = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    phone = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    firstName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    lastName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Avatar = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true, defaultValueSql: "('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2Favatar-nobita.png?alt=media&token=b7b03285-7690-47ef-b1ac-44a33e4179e5&_gl=1*1rvt5ir*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM4NzcuNDEuMC4w')"),
                    dob = table.Column<DateTime>(type: "date", nullable: true),
                    sex = table.Column<bool>(type: "bit", nullable: true),
                    ratingCount = table.Column<int>(type: "int", nullable: true, defaultValueSql: "((0))"),
                    averageRating = table.Column<double>(type: "float", nullable: true, defaultValueSql: "((0))"),
                    Tag = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    Status = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true, defaultValueSql: "('Active')")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__StaffMan__96D4AAF76B2C5EE7", x => x.StaffID);
                });

            migrationBuilder.CreateTable(
                name: "StaffOrderManagement",
                columns: table => new
                {
                    TaskID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderID = table.Column<int>(type: "int", nullable: true),
                    StaffID = table.Column<int>(type: "int", nullable: true),
                    DateShipping = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__StaffOrd__7C6949D1EA7BC80F", x => x.TaskID);
                });

            migrationBuilder.CreateTable(
                name: "UserManagement",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dateCreated = table.Column<DateTime>(type: "date", nullable: true, defaultValueSql: "(getdate())"),
                    email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    password = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    firstName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    lastName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    phone = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    Avatar = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true, defaultValueSql: "('https://firebasestorage.googleapis.com/v0/b/stufb-e00cc.appspot.com/o/images%2Favatar-nobita.png?alt=media&token=b7b03285-7690-47ef-b1ac-44a33e4179e5&_gl=1*1rvt5ir*_ga*MzExODI2NzcyLjE2OTQ5NjAyNDU.*_ga_CW55HF8NVT*MTY5Njk0MzU2Ni4xNi4xLjE2OTY5NDM4NzcuNDEuMC4w')"),
                    dob = table.Column<DateTime>(type: "date", nullable: true),
                    sex = table.Column<bool>(type: "bit", nullable: true),
                    totalOrders = table.Column<int>(type: "int", nullable: true, defaultValueSql: "((0))"),
                    Status = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true, defaultValueSql: "('Active')"),
                    Role = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true, defaultValueSql: "('Customer')")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__UserMana__1788CCACA95A14E1", x => x.UserID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FeedbackManagement");

            migrationBuilder.DropTable(
                name: "OrderManagement");

            migrationBuilder.DropTable(
                name: "PackageServiceManagement");

            migrationBuilder.DropTable(
                name: "ServiceManagement");

            migrationBuilder.DropTable(
                name: "StaffManagement");

            migrationBuilder.DropTable(
                name: "StaffOrderManagement");

            migrationBuilder.DropTable(
                name: "UserManagement");
        }
    }
}
