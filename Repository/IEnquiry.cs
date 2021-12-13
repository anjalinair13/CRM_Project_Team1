using CRM_Web_Api.Models;
using CRM_Web_Api.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Repository
{
    public interface IEnquiry
    {
       
       
            //Get courseEnquiry
            Task<List<CourseEnquiry>> GetCourseEnquiry();
        //get course enquiry by id
        //Get a Particular Course Enquiry by id
        Task<ActionResult<CourseEnquiry>> GetCEnquiryById(int Id);

        //Get a Particular Resource Enquiry by id
        Task<ActionResult<ResourceEnquiry>> GetREnquiryById(int Id);
        //Add courseEnquires
        Task<int> AddCourseEnquiry(CourseEnquiry courseEnquiry);
        //Update courseEnquires
            Task UpdateCourseEnquiry(CourseEnquiry courseEnquiry);
        //Get ResourceEnquiry
            Task<List<ResourceEnquiry>> GetResourceEnquiry(); 
        //Add ResourceEnquiry
            Task<int> AddResourceEnquiry(ResourceEnquiry resourceEnquiry); 
        //Update ResourceEnquiry
            Task UpdateResourceEnquiry(ResourceEnquiry resourceEnquiry);
        //get interested course enquiries
        Task<List<ResourceCountModel>> GetResouceEnquiryStatus();
        Task<ActionResult<CourseEnquiry>> GetCourseEnquiryStatus(int Id);

    }


}

