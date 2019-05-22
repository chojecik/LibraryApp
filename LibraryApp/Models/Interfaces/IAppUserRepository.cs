using LibraryApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApp.Models.Interfaces
{
    public interface IAppUserRepository
    {
        List<AppUser> GetAllUsers();
        AppUser GetAppUser(string userName);
    }
}
