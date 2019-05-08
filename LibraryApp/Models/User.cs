using System.Collections.Generic;

namespace LibraryApp.Models
{
    public class User
    {
        public User()
        {
            this.Books = new HashSet<Book>();
        }
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
       

        public virtual int AddressId { get; set; }
        public virtual Address Address { get; set; }

        public virtual ICollection<Book> Books { get; set; }

    }
}