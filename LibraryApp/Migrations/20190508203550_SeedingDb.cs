using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace LibraryApp.Migrations
{
    public partial class SeedingDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
                  migrationBuilder.Sql("INSERT INTO Addresses (Street, StreetNumber, LocalNumber, City, ZipCode) VALUES ('Grunwaldzka', 63, '3c', 'Gdańsk', '80-100')");
            migrationBuilder.Sql("INSERT INTO Addresses (Street, StreetNumber, LocalNumber, City, ZipCode) VALUES ('Kołobrzeska', 12, '80f','Gdańsk', '80-381')");
            migrationBuilder.Sql("INSERT INTO Addresses (Street, StreetNumber, LocalNumber, City, ZipCode) VALUES ('Jowisza', 1, '','Gdańsk', '80-299')");

            migrationBuilder.Sql("INSERT INTO Users (FirstName, LastName, Phone, Email, AddressId) VALUES ('Jan', 'Kowalski', '123456789', 'jan.kowalski@xyz.pl', 1)");
            migrationBuilder.Sql("INSERT INTO Users (FirstName, LastName, Phone, Email, AddressId) VALUES ('Tomasz', 'Nowak', '987654321', 'tomasz.nowak@abc.pl', 2)");
            migrationBuilder.Sql("INSERT INTO Users (FirstName, LastName, Phone, Email, AddressId) VALUES ('Agnieszka', 'Waciak', '192837465', 'ag.waciak@domain.com', 3)");

            
            migrationBuilder.Sql("INSERT INTO Books (Title, Author, Genre, NumberOfPages, YearOfPublishment, Status) VALUES ('Gra o tron', 'George R.R. Martin', 2, 500, 2001, 1)");
            migrationBuilder.Sql("INSERT INTO Books (Title, Author, Genre, NumberOfPages, YearOfPublishment, Status) VALUES ('Władca Pierścieni', 'J.R.R. Tolkien', 2, 602, 1990, 1)");
            migrationBuilder.Sql("INSERT INTO Books (Title, Author, Genre, NumberOfPages, YearOfPublishment, Status) VALUES ('Zbrodnia i kara', 'Fiodor Dostojewski', 3, 400, 1980, 1)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Users");
            migrationBuilder.Sql("DELETE FROM Adresses");
            migrationBuilder.Sql("DELETE FROM Books");

        }
    } 
}
