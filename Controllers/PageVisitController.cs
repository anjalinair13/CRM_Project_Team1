using CRM_Web_Api.Models;
using CRM_Web_Api.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PageVisitController : ControllerBase
    {
        CRM_DatabaseContext db;
        IPageVisitRepo pageVisitRepo;
        //pageName:string;

        public PageVisitController(CRM_DatabaseContext db, IPageVisitRepo _pageVisitRepo)
        {
            this.db = db;
            this.pageVisitRepo = _pageVisitRepo;
        }

        #region get all PageVisit Details
        //get Page Visit Details
        [HttpGet]
        [Route("GetPageVisit")]
        public async Task<IActionResult> GetPageVisit()
        {
            try
            {
                var pageVisit = await pageVisitRepo.GetPageVisit();
                if (pageVisit == null)
                {
                    return NotFound();
                }
                return Ok(pageVisit);
            }
            catch
            {
                return BadRequest();
            }
        }
        #endregion

        //update 
        #region update page visit
        [HttpGet]
        [Route("UpdatePageVisit")]
        // increase page visit count if exist or add new with 1 count
        public async Task<IActionResult> UpdatePageVisit(int id)
        {
            try
            {
                PageVisit pageVisit = await pageVisitRepo.UpdatePageVisit(id);
                if (pageVisit != null)
                {
                    return Ok(pageVisit);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("page visit put api error ");
                return BadRequest("page visit put api error :" + e.Message);
            }
        }

        #endregion

        #region Get page visit By ID
        [HttpGet]
        [Route("GetPageVisitById")]
        public async Task<IActionResult> GetPageVisitById(int id)
        {
            try
            {
                var resource = await pageVisitRepo.GetPageVisitById(id);
                if (resource != null)
                {
                    return Ok(resource);
                }
                return NotFound("No resource Found");

            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        #endregion
    }
}
