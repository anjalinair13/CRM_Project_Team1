using CRM_Web_Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Repository
{
    public class LoginRepository:ILoginRepository
    {
        CRM_DatabaseContext _db;

        public LoginRepository(CRM_DatabaseContext db)
        {
            _db = db;
        }


        //Validate user 
        public Users validateUser(string username, string password)
        {
            if (_db != null)
            {
                Users dbuser = _db.Users.FirstOrDefault(em => em.UserName == username && em.Password == password);
                if (dbuser != null)
                {
                    return dbuser;
                }
            }

            return null;
        }

        //get User by password
        public Users GetUser(string UserName, string Password)
        {
            if (_db != null)
            {
                Users dbuser = _db.Users.FirstOrDefault(em => em.UserName == UserName && em.Password == Password);
                if (dbuser != null)
                {
                    return dbuser;
                }
            }

            return null;
        }

       

    }
}
