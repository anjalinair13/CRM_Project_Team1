using CRM_Web_Api.Models;
using CRM_Web_Api.Repository;
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
    public class EnquiryController : ControllerBase
    {//Constructor Dependency Injection for CourseEnquiryRepository



        private IConfiguration _config;
        IEnquiry courseEnquiryRepository;



        public EnquiryController(IConfiguration config, IEnquiry _e)
        {
            _config = config;
            this.courseEnquiryRepository = _e;
        }



        #region GetCourseEnquiry
        [HttpGet]
        [Route("GetCourseEnquiry")]
        public async Task<IActionResult> GetCourseEnquiry()
        {
            try
            {
                var courseEnquiry = await courseEnquiryRepository.GetCourseEnquiry();
                if (courseEnquiry == null)
                {
                    return NotFound();
                }
                return Ok(courseEnquiry);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion

        #region Get CEnquiryById
        [HttpGet]
        [Route("GetCEnquiryById")]
        public async Task<ActionResult<CourseEnquiry>> GetCEnquiryById(int Id)
        {
            try
            {
                var courseEnquiry = await courseEnquiryRepository.GetCEnquiryById(Id);
                if (courseEnquiry == null)
                {
                    return NotFound();
                }
                return courseEnquiry;
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion



        #region Get REnquiryById
        [HttpGet]
        [Route("GetREnquiryById")]
        public async Task<ActionResult<ResourceEnquiry>> GetREnquiryById(int Id)
        {
            try
            {
                var resourceEnquiry = await courseEnquiryRepository.GetREnquiryById(Id);
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
        #endregion


        //statuses
        [HttpGet]
        [Route("GetResouceEnquiryStatus")]
        public async Task<IActionResult> GetResouceEnquiryStatus()
        {
            try
            {
                var resourceEnquiry = await courseEnquiryRepository.GetResouceEnquiryStatus();
                if (resourceEnquiry == null)
                {
                    return NotFound();
                }
                return (IActionResult)resourceEnquiry;
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("GetCourseEnquiryStatus")]
        public async Task<ActionResult<CourseEnquiry>> GetCourseEnquiryStatus(int Id)
        {
            try
            {
                var resourceEnquiry = await courseEnquiryRepository.GetCourseEnquiryStatus(Id);
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



        #region Add CourseEnquiry
        [HttpPost]
        [Route("AddCourseEnquiry")]
        public async Task<IActionResult> AddCourseEnquiry([FromBody] CourseEnquiry model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var courseEnquiryId = await courseEnquiryRepository.AddCourseEnquiry(model);
                    if (courseEnquiryId > 0)
                    {
                        return Ok(courseEnquiryId);
                    }
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        #endregion



        #region Update CourseEnquiry
        [HttpPut]
        [Route("UpdateCourseEnquiry")]
        public async Task<IActionResult> UpdateCourseEnquiry([FromBody] CourseEnquiry model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await courseEnquiryRepository.UpdateCourseEnquiry(model);
                    return Ok();
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        #endregion



        #region GetResourceEnquiry
        [HttpGet]
        [Route("GetResourceEnquiry")]
        public async Task<IActionResult> GetResourceEnquiry()
        {
            try
            {
                var resourceEnquiry = await courseEnquiryRepository.GetResourceEnquiry();
                if (resourceEnquiry == null)
                {
                    return NotFound();
                }
                return Ok(resourceEnquiry);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion






        #region Add ResourceEnquiry
        [HttpPost]
        [Route("AddResourceEnquiry")]
        public async Task<IActionResult> AddResourceEnquiry([FromBody] ResourceEnquiry model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                
                
                    var resourceEnquiryId = await courseEnquiryRepository.AddResourceEnquiry(model);
                    if (resourceEnquiryId > 0)
                    {
                        return Ok(resourceEnquiryId);
                    }
                
            }
            return BadRequest();
        }
        #endregion




        #region Update ResourceEnquiry
        [HttpPut]
        [Route("UpdateResourceEnquiry")]
        public async Task<IActionResult> UpdateResourceEnquiry([FromBody] ResourceEnquiry model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await courseEnquiryRepository.UpdateResourceEnquiry(model);
                    return Ok();
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        #endregion
    }
}