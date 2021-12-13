using CRM_Web_Api.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Repository
{
    public interface IUser
    {
        //get all users
        Task<List<Users>> GetUsers();

        //add user
        Task<int> AddUser(Users user);
        //update user
        Task UpdateUser(Users user);

        //get user by id
        Task<ActionResult<Users>> GetUserById(int Id);
    }
}
