using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryApp.Models.Entities;
using LibraryApp.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApp.Controllers
{
    //[Produces("application/json")]
    //[Route("api/Book")]
    public class BookController : Controller
    {
        private readonly IBookRepository _repository;

        public BookController(IBookRepository repository)
        {
            _repository = repository; 
        }

        [HttpGet("action")]
        public IActionResult GetAllBooks()
        {
            return new JsonResult(_repository.GetAllBooks());
        }

        [HttpGet("action")]
        public IActionResult GetBook(int bookId)
        {
            return new JsonResult(_repository.GetBook(bookId));
        }

        [HttpPost("action")]
        public IActionResult AddBook([FromBody] Book book)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repository.AddBook(book);
            return new JsonResult(book.Id);
        }

        [HttpPut("action")]
        public IActionResult UpdateBook([FromBody] Book book) 
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _repository.UpdateBook(book);
            return new JsonResult(book.Id);
        }

        [HttpGet("action")]
        public IActionResult DeleteBook(int bookId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var book = _repository.GetBook(bookId);

            if(book == null)
            {
                return NotFound("Cannot find book with provided book id");
            }

            _repository.DeleteBook(book);
            return new JsonResult(book.Id);
        }
    }
}