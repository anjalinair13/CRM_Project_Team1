using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class Batch
    {
        public Batch()
        {
            Trainee = new HashSet<Trainee>();
        }

        public int BatchId { get; set; }
        public string BatchName { get; set; }
        public DateTime? BatchStartDate { get; set; }
        public int? CourseId { get; set; }
        public bool? IsActive { get; set; }

        public virtual Courses Course { get; set; }
        public virtual ICollection<Trainee> Trainee { get; set; }
    }
}
