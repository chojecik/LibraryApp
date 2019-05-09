using System.Threading.Tasks;
using AutoMapper;
using LibraryApp.Database;
using LibraryApp.Helpers;
using LibraryApp.Models.Entities;
using LibraryApp.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApp.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        private readonly DatabaseContext _dbContext;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;

        public AccountsController(DatabaseContext dbContext, UserManager<AppUser> userManager, IMapper mapper)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _mapper = mapper;
        }

        // POST api/accounts
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<AppUser>(model);
            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded)
            {
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));
            }

            await _dbContext.Users.AddAsync(new User { IdentityId = userIdentity.Id });
            await _dbContext.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }

        [HttpGet("[action]")]
        public IActionResult Test()
        {
            return null;
        }
    }
}