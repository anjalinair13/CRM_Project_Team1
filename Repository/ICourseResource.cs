using CRM_Web_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM_Web_Api.ViewModel;

namespace CRM_Web_Api.Repository
{
    public interface ICourseResource
    {
        Task<List<Courses>> GetCourses();

        Task<List<Qualification>> GetQualifications();
        Task<List<Status>> GetStatus();

        //get courses by id
        Task<CourseViewModel> GetCourseById(int id);

        Task<int> AddCourse(Courses course);
        Task UpdateCourse(Courses course);

        
        //--- get all Resources ---//

        Task<List<Resources>> GetResources();



        //--- get Resource by id ---//
        Task<Resources> GetResourceById(int id);



        //--- add Resources ---//
        Task<Resources> AddResource(Resources resource);




        //--- update Resources ---//
        Task<Resources> UpdateResource(Resources resource);
    }
}
