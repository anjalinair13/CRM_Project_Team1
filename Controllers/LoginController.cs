using CRM_Web_Api.Models;
using CRM_Web_Api.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRM_Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public IConfiguration _config;
        ILoginRepository loginRepository;



        public LoginController(IConfiguration config, ILoginRepository _l)
        {
            _config = config;
            loginRepository = _l;
        }


        //Login
        [AllowAnonymous]
        [HttpGet("{userName}/{password}")]
        //loginmethod--IActionResult
        public IActionResult Login(string userName, string password)
        {
            IActionResult response = Unauthorized();
            Users dbuser = null;


            //Authenticate the user
            dbuser = AuthenticateUser(userName, password);



            if (dbuser != null)
            {
                var tokenString = GenerateJSONWebToken(dbuser);
                response = Ok(new
                {
                    uName = dbuser.UserName,
                    rId = dbuser.RoleId,
                    token = tokenString
                });
            }
            return response;
        }

        // get user details with username and password
        #region user details 


        #endregion
        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        [Route("GetUser/{UserName}/{Password}")]

        public async Task<ActionResult<Users>> GetUser(string userName, string password)
        {
            try
            {
                var user = loginRepository.validateUser(userName, password);
                if (user == null)
                {
                    return NotFound();
                }
                return user;
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        //Generate token
        private string GenerateJSONWebToken(Users user)
        {
            //security key
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));



            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);



            //generate token
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
            _config["Jwt:Issuer"], null, expires: DateTime.Now.AddMinutes(20), signingCredentials: credentials);



            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        //AuthenticateUSer()
        private Users AuthenticateUser(string userName, string password)
        {

            //validate the user credentials
            //Retrieve data from the database


            Users dbuser = loginRepository.validateUser(userName, password);//checking whether validity of username

            if (dbuser != null)
            {


                return dbuser;

            }
            return null;
        }

    }
}
