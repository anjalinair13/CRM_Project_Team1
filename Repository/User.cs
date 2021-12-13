using CRM_Web_Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Repository
{
    public class User:IUser
    {
        CRM_DatabaseContext db;
        //Constructor dependency injection
        public User(CRM_DatabaseContext _db)
        {
            db = _db;
        }
        //get all users
        public async Task<List<Users>> GetUsers()
        {
            if (db != null)
            {
                return await db.Users.ToListAsync();
            }
            return null;
        }


        //Add User
        public async Task<int> AddUser(Users user)
        {
            if (db != null)
            {
                user.RoleId = 4;
                user.IsActive = true;
                await db.Users.AddAsync(user);
                await db.SaveChangesAsync(); //commit the transaction
                return user.UserId;
            }
            return 0;

        }

        //update User
        public async Task UpdateUser(Users user)
        {
            if (db != null)
            {
                db.Users.Update(user);
                await db.SaveChangesAsync(); //commit the transaction

            }
        }
        //get user by id
        public async Task<ActionResult<Users>> GetUserById(int id)
        {
            if (db != null)
            {
                Users resourceEnquiry = await db.Users.FirstOrDefaultAsync(n => n.UserId == id);
                return resourceEnquiry;
            }
            return null;
        }
    }
}
