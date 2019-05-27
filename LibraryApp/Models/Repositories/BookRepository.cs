using LibraryApp.Database;
using LibraryApp.Models.Entities;
using LibraryApp.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApp.Models.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly DatabaseContext _dbContext;

        public BookRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int AddBook(Book book)
        {
            if(book == null)
            {
                throw new Exception("Book object cannot be null");
            }
            book.Status = StatusType.Available;
            _dbContext.Books.Add(book);
            _dbContext.SaveChanges();
            return book.Id;
        }

        public void DeleteBook(Book book)
        {
            if (book == null)
            {
                throw new Exception("Book object cannot be null");
            }

            _dbContext.Books.Remove(book);
            _dbContext.SaveChanges();
        }

        public List<Book> GetAllBooks()
        {
            return _dbContext.Books.ToList();
        }

        public Book GetBook(int bookId)
        {
            if(bookId <= 0)
            {
                throw new Exception("Book id cannot be less or even 0");
            }
            return _dbContext.Books.Where(b => b.Id == bookId).FirstOrDefault();
        }

        public int UpdateBook(Book book)
        {
            if (book == null)
            {
                throw new Exception("Book object cannot be null");
            }

            _dbContext.Books.Update(book);
            _dbContext.SaveChanges();

            return book.Id;
        }
    }
}
