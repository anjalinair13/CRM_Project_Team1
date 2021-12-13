using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.ViewModel
{
    public class CourseViewModel
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public int? QualificationId { get; set; }
        public bool IsPublic { get; set; }
        public bool IsAvailable { get; set; }
        public decimal CoursePrice { get; set; }
        public string CourseDescription { get; set; }
        public string QualificationName { get; set; }

    }
}
