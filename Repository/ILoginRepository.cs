using CRM_Web_Api.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Repository
{
    public interface ILoginRepository
    {
        //validate user
        public Users validateUser(string username, string password);
        //get user by password
        public Users GetUser(string UserName, string Password);

       

    }
}
