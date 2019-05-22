using LibraryApp.Database;
using LibraryApp.Models.Entities;
using LibraryApp.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApp.Models.Repositories
{
    public class AppUserRepository: IAppUserRepository
    {
        private readonly DatabaseContext _dbContext;

        public AppUserRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<AppUser> GetAllUsers()
        {
            return _dbContext.AppUsers.ToList();
        }

        public AppUser GetAppUser(string userName)
        {
            if(userName == null || userName == "")
            {
                throw new Exception("UserName cannot be null or empty string");
            }

            return _dbContext.AppUsers.Where(au => au.UserName.Equals(userName)).FirstOrDefault();
        }
    }
}
