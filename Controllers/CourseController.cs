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
    public class CourseController : ControllerBase
    {
        ICourseResource courseResource;
        public CourseController(ICourseResource _p)
        {
            courseResource = _p;
        }

        //getcourses
        [HttpGet]
        [Route("GetCourses")]
        public async Task<IActionResult> GetCourses()
        {
            try
            {
                var categories = await courseResource.GetCourses();
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

        [HttpGet]
        [Route("GetCourseById")]
        public async Task<IActionResult> GetCourseById(int id)
        {
            try
            {
                var employee = await courseResource.GetCourseById(id);
                if (employee != null)
                {
                    return Ok(employee);
                }
                return NotFound();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("AddCourse")]
        public async Task<IActionResult> AddCourse([FromBody] Courses model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var postId = await courseResource.AddCourse(model);
                    if (postId > 0)
                    {
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

        //update employee
        [HttpPut]
        [Route("UpdateCourse")]
        public async Task<IActionResult> UpdateCourse([FromBody] Courses model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await courseResource.UpdateCourse(model);
                    return Ok();
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }

        //get all categories
        #region Get all Qualification
        [HttpGet]
        [Route("GetQualifications")]
        //localhost:43365/api/post/getQualification
        public async Task<IActionResult> GetQualifications()
        {



            try
            {
                var categories = await courseResource.GetQualifications();
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
        #endregion

        [HttpGet]
        [Route("GetStatus")]

        public async Task<IActionResult> GetStatus()
        { 
            try
            {
                var categories = await courseResource.GetStatus();
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

    }
}
