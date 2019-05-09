using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace LibraryApp.Models.Entities
{
    public class AppUser: IdentityUser
    {
        public AppUser()
        {
            this.Books = new HashSet<Book>();
        }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public int StreetNumber { get; set; }
        public string LocalNumber { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }

        public virtual ICollection<Book> Books { get; set; }

    }
}