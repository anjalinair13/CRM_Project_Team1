using CRM_Web_Api.Models;
using CRM_Web_Api.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Repository
{
    public class CourseResource:ICourseResource
    {
        CRM_DatabaseContext db;

        //constructor dependancy injection
        public CourseResource(CRM_DatabaseContext _db)
        {
            db = _db;
        }
        public async Task<List<Courses>> GetCourses()
        {
            if (db != null)
            {
                return await db.Courses.ToListAsync();
            }
            return null;
        }      


        public async Task<CourseViewModel> GetCourseById(int id)
        {
            if (db != null)
            {
                //LINQ
                return await (from c in db.Courses
                              from q in db.Qualification
                              where c.CourseId == id && c.QualificationId == q.QualificationId
                              select new CourseViewModel
                              {
                                  CourseId = c.CourseId,
                                  CourseName = c.CourseName,
                                  CoursePrice = c.CoursePrice,
                                  CourseDescription=c.CourseDescription,
                                  QualificationId=q.QualificationId,
                                  IsPublic = (bool)c.IsPublic,
                                  IsAvailable = (bool)c.IsAvailable,
                                  QualificationName=q.QualificationName
                                  
                             }).FirstOrDefaultAsync();
            }
            return null;
        }

        public async Task<int> AddCourse(Courses course)
        {
            if (db != null)
            {
                await db.Courses.AddAsync(course);
                await db.SaveChangesAsync(); //commit the transaction
                return course.CourseId;
            }
            return 0;

        }

        //update Course
        public async Task UpdateCourse(Courses course)
        {
            if (db != null)
            {
                db.Courses.Update(course);
                await db.SaveChangesAsync(); //commit the transaction

            }
        }

        //qualifications
        public async Task<List<Qualification>> GetQualifications()
        {



            if (db != null)
            {
                return await db.Qualification.ToListAsync();
            }
            return null;



        }

        //get status
        public async Task<List<Status>> GetStatus()
        {



            if (db != null)
            {
                return await db.Status.ToListAsync();
            }
            return null;



        }




        public async Task<List<Resources>> GetResources()
        {



            if (db != null)
            {
                return await db.Resources.ToListAsync();
            }
            return null;



        }



        public async Task<Resources> GetResourceById(int id)
        {

            if (db != null)
            {
                //LINQ
                return await (from c in db.Resources

                              where c.ResourceId == id
                              select new Resources
                              {
                                  ResourceId = c.ResourceId,
                                  ResourceName = c.ResourceName,
                                  IsPublic = (bool)c.IsPublic,
                                  IsAvailable = (bool)c.IsAvailable,
                                  ResourceCost=c.ResourceCost,
                                  ResourceDescription=c.ResourceDescription,
                                  Capacity=c.Capacity

                              }).FirstOrDefaultAsync();

            }
            return null;

        }



         public async Task<Resources> AddResource(Resources resource)
        {

            //--- member function to add department ---//
            if (db != null)
            {
                await db.Resources.AddAsync(resource);
                await db.SaveChangesAsync();
                return resource;
            }
            return null;




        }



        public async Task<Resources> UpdateResource(Resources resource)
        {

            if (db != null)
            {
                db.Resources.Update(resource);
                await db.SaveChangesAsync();
                return resource;
            }
            return null;

        }







    }
}
