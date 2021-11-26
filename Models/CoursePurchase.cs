using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class CoursePurchase
    {
        public int PurchaseId { get; set; }
        public int? CourseId { get; set; }
        public int? TraineeId { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public bool? IsActive { get; set; }

        public virtual Courses Course { get; set; }
        public virtual Trainee Trainee { get; set; }
    }
}
