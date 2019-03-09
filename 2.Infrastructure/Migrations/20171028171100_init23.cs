using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Infrastructure.Migrations
{
    public partial class init23 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageName",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "ImageName",
                table: "Players");

            migrationBuilder.AddColumn<string>(
                name: "ImageSource",
                table: "Teams",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageSource",
                table: "Quizzes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageSource",
                table: "Post",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageSource",
                table: "Players",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageSource",
                table: "OnThisDay",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageSource",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "ImageSource",
                table: "Quizzes");

            migrationBuilder.DropColumn(
                name: "ImageSource",
                table: "Post");

            migrationBuilder.DropColumn(
                name: "ImageSource",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "ImageSource",
                table: "OnThisDay");

            migrationBuilder.AddColumn<string>(
                name: "ImageName",
                table: "Teams",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageName",
                table: "Players",
                nullable: true);
        }
    }
}
