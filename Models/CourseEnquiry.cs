using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class CourseEnquiry
    {
        public int CourseEnquiryId { get; set; }
        public string Description { get; set; }
        public DateTime? EnquiryDate { get; set; }
        public int? CourseId { get; set; }
        public string Email { get; set; }

        public virtual Courses Course { get; set; }
    }
}
