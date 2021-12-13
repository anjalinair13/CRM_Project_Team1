﻿using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class Qualification
    {
        public Qualification()
        {
            CourseEnquiry = new HashSet<CourseEnquiry>();
            Courses = new HashSet<Courses>();
            ResourceEnquiry = new HashSet<ResourceEnquiry>();
        }

        public int QualificationId { get; set; }
        public string QualificationName { get; set; }

        public virtual ICollection<CourseEnquiry> CourseEnquiry { get; set; }
        public virtual ICollection<Courses> Courses { get; set; }
        public virtual ICollection<ResourceEnquiry> ResourceEnquiry { get; set; }
    }
}
