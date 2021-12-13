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
    public class ResourceController : ControllerBase
    {
        ICourseResource resourceRepository;

        public ResourceController(ICourseResource _p)
        {
            resourceRepository = _p;
        }


        #region GetResources
        //GetResources
        [HttpGet]
        [Route("GetResources")]
        public async Task<IActionResult> GetResources()
        {
            try
            {
                var categories = await resourceRepository.GetResources();
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


        #region Get Resource By ID
        [HttpGet]
        [Route("GetResourceById")]
        public async Task<IActionResult> GetResourceById(int id)
        {
            try
            {
                var resource = await resourceRepository.GetResourceById(id);
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



        #region Add resource
        //[Authorize]
        [HttpPost]
        [Route("AddResource")]
        public async Task<IActionResult> AddResources(Resources resource)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var resId = await resourceRepository.AddResource(resource);
                    if (resId != null)
                    {
                        return Ok(resId);
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

        #endregion


        //UpdateResource

        #region Update resource
        // [Authorize]
        [HttpPut]
        // [Authorize]
        [Route("UpdateResource")]
        public async Task<IActionResult> UpdateResource(Resources resource)
        {
            //Check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await resourceRepository.UpdateResource(resource);
                    return Ok(resource);
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
