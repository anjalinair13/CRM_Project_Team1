using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class Status
    {
        public Status()
        {
            CourseEnquiry = new HashSet<CourseEnquiry>();
            ResourceEnquiry = new HashSet<ResourceEnquiry>();
        }

        public int StatusId { get; set; }
        public string Status1 { get; set; }

        public virtual ICollection<CourseEnquiry> CourseEnquiry { get; set; }
        public virtual ICollection<ResourceEnquiry> ResourceEnquiry { get; set; }
    }
}
