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
    public class PurchaseController : ControllerBase
    {
        IPurchaseRepository purchaseRepository;
        public PurchaseController(IPurchaseRepository _p)
        {
            purchaseRepository = _p;
        }

        //getcourses purchase
        [HttpGet]
        [Route("GetCoursePurchase")]
        public async Task<IActionResult> GetCoursePurchase()
        {
            try
            {
                var categories = await purchaseRepository.GetCoursePurchase();
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

        /* [HttpGet]
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
        */
        #region add course purchase
        [HttpPost]
        [Route("AddCoursePurchase")]
        public async Task<IActionResult> AddCoursePurchase(CoursePurchase course)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var corId = await purchaseRepository.AddCoursePurchase(course);
                    if (corId != null)
                    {
                        return Ok(corId);
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


        #region add resource purchase
        [HttpPost]
        [Route("AddResourcePurchase")]
        public async Task<IActionResult> AddResourcePurchase(ResourcePurchase res)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var resId = await purchaseRepository.AddResourcePurchase(res);
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


        //getcourses purchase
        [HttpGet]
        [Route("GetResourcePurchase")]
        public async Task<IActionResult> GetResourcePurchase()
        {
            try
            {
                var categories = await purchaseRepository.GetResourcePurchase();
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
