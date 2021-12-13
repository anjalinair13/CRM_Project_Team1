using CRM_Web_Api.Models;
using CRM_Web_Api.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Repository
{
    public class Enquiry:IEnquiry
    {//database
        CRM_DatabaseContext db;

        //Constructor dependency injection
        public Enquiry(CRM_DatabaseContext _db)
        {
            db = _db;
        }
        //crud operation
        #region Get CourseEnquiry
        public async Task<List<CourseEnquiry>> GetCourseEnquiry()
        {

            if (db != null)
            {
                return await db.CourseEnquiry.ToListAsync();
            }
            return null;
        }
        #endregion

        #region Get Course Enquiry By Id
        public async Task<ActionResult<CourseEnquiry>> GetCEnquiryById(int id)
        {
            if (db != null)
            {
                CourseEnquiry courseEnquiry = await db.CourseEnquiry.FirstOrDefaultAsync(n => n.CourseEnquiryId == id);//CourseEnquiryId
                return courseEnquiry;
            }
            return null;
        }



        #endregion



        #region Add CourseEnquiry
        public async Task<int> AddCourseEnquiry(CourseEnquiry courseEnquiry)
        {
            if (db != null)
            {
                await
                db.CourseEnquiry.AddAsync(courseEnquiry);
                await db.SaveChangesAsync();
                return courseEnquiry.CourseEnquiryId;
            }
            return 0;
        }
        #endregion

        public async Task<ActionResult<CourseEnquiry>> GetCourseEnquiryStatus(int id)
        {
            if (db != null)
            {
                CourseEnquiry resourceEnquiry = await db.CourseEnquiry.FirstOrDefaultAsync(n => n.StatusId == id);
                return resourceEnquiry;
            }
            return null;
        }



        #region Update CourseEnquiry
        public async Task UpdateCourseEnquiry(CourseEnquiry courseEnquiry)
        {
            if (db != null)
            {
                db.CourseEnquiry.Update(courseEnquiry);
                await db.SaveChangesAsync();
            }
        }
        #endregion



        #region Get ResourceEnquiry
        public async Task<List<ResourceEnquiry>> GetResourceEnquiry()
        {

            if (db != null)
            {
                return await db.ResourceEnquiry.ToListAsync();
            }
            return null;
        }
        #endregion

        #region Get Resource Enquiry By Id
        public async Task<ActionResult<ResourceEnquiry>> GetREnquiryById(int id)
        {
            if (db != null)
            {
                ResourceEnquiry resourceEnquiry = await db.ResourceEnquiry.FirstOrDefaultAsync(n => n.ResourceEnquiryId == id);
                return resourceEnquiry;
            }
            return null;
        }



        #endregion

        public async Task<List<ResourceCountModel>> GetResouceEnquiryStatus()
        {
            
            {
                return await (from re in db.ResourceEnquiry
                              join r in db.Resources on re.ResourceId equals r.ResourceId
                              group re by new { re.ResourceId, r.ResourceName } into grp
                              select new ResourceCountModel
                              {
                                  ResourceId = (int)grp.Key.ResourceId,
                                  ResourceName = grp.Key.ResourceName,
                                  ResourceCount = grp.Count()
                              }
                              ).ToListAsync();
                              
                
            }
            
        }




        #region Add ResourceEnquiry
        public async Task<int> AddResourceEnquiry(ResourceEnquiry resourceEnquiry)
        {
            if (db != null)
            {
                await db.ResourceEnquiry.AddAsync(resourceEnquiry);
                await db.SaveChangesAsync();
                return resourceEnquiry.ResourceEnquiryId;
            }
            return 0;
        }
        #endregion




        #region Update ResourceEnquiry
        public async Task UpdateResourceEnquiry(ResourceEnquiry resourceEnquiry)
        {
            if (db != null)
            {
                db.ResourceEnquiry.Update(resourceEnquiry);
                await db.SaveChangesAsync();
            }
        }
        #endregion




    }
}
