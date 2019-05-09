using LibraryApp.Models.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace LibraryApp.Database
{
    public class DatabaseContext : IdentityDbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        new public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<AppUser> AppUsers { get; set; }

    }
}