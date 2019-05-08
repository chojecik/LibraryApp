using System.Collections.Generic;

namespace LibraryApp.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<Book> Books { get; set; }

        public virtual int AddressId { get; set; }
        public virtual Address Address { get; set; }
    }
}