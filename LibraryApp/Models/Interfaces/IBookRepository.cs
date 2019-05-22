using LibraryApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApp.Models.Interfaces
{
    public interface IBookRepository
    {
        List<Book> GetAllBooks();
        Book GetBook(int bookId);
        int AddBook(Book book);
        int UpdateBook(Book book);
        void DeleteBook(Book book);
    }
}
