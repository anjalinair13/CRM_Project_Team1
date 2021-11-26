using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class Qualification
    {
        public Qualification()
        {
            Courses = new HashSet<Courses>();
        }

        public int QualificationId { get; set; }
        public string QualificationName { get; set; }

        public virtual ICollection<Courses> Courses { get; set; }
    }
}
