using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApp.Models.Entities
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public GenreType Genre { get; set; }
        public int NumberOfPages { get; set; }
        public int YearOfPublishment { get; set; }
        public StatusType Status { get; set; }

        public virtual int? UserId { get; set; }
        public virtual AppUser User { get; set; }
    }

    public enum StatusType
    {
        Borrowed = 0,
        Available = 1,
        Reserved = 2
    }

    public enum GenreType
    {
        CrimeStory = 0,
        Thriller = 1,
        Fantasy = 2,
        BellesLettres = 3,
        Drama = 4,
    }
}
