using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryApp.Models.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApp.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class AppUserController : Controller
    {
        private readonly IAppUserRepository _repository;

        public AppUserController(IAppUserRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("[action]")]
        public IActionResult GetAllUsers()
        {
            return new JsonResult(_repository.GetAllUsers());
        }

        [HttpGet("[action]")]
        public IActionResult GetUser(string userName)
        {
            return new JsonResult(_repository.GetAppUser(userName));
        }
    }
}