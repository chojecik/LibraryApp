using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApp.Models.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string IdentityId { get; set; }  //navigation property
        public AppUser Identity { get; set; }
        public Gender Gender { get; set; }
        public Role Role { get; set; }
    }

    public enum Gender
    {
        Female = 0,
        Male = 1
    }

    public enum Role
    {
        Customer = 0,
        Worker = 1
    }
}
