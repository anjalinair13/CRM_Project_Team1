using CRM_Web_Api.Models;
using CRM_Web_Api.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public IConfiguration _config;
        IUser loginRepository;



        public UserController(IConfiguration config, IUser _l)
        {
            _config = config;
            loginRepository = _l;
        }

        //get all users
        [HttpGet]
        [Route("GetUsers")]
        public async Task<IActionResult> GetUsers()
        {
            try
            {
                var categories = await loginRepository.GetUsers();
                if (categories == null)
                {
                    return NotFound();
                }
                return Ok(categories);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        
        [HttpPost]
        [Route("AddUser")]
        public async Task<IActionResult> AddUser([FromBody] Users model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var postId = await loginRepository.AddUser(model);
                    if (postId > 0)
                    {
                        //return ();
                        return Ok(postId);
                    }
                    else
                    {
                        return NotFound();
                    }
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }

        //update user
        [HttpPut]
        [Route("UpdateUser")]
        public async Task<IActionResult> UpdateUser([FromBody] Users model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await loginRepository.UpdateUser(model);
                    return Ok();
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }

        

        //get user by id
        [HttpGet]
        [Route("GetuserById")]
        public async Task<ActionResult<Users>> GetuserById(int id)
        {
            try
            {
                var resourceEnquiry = await loginRepository.GetUserById(id);
                if (resourceEnquiry == null)
                {
                    return NotFound();
                }
                return resourceEnquiry;
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


    }
}
