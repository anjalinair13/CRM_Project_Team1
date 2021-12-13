using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class Trainee
    {
        public Trainee()
        {
            CoursePurchase = new HashSet<CoursePurchase>();
            ResourcePurchase = new HashSet<ResourcePurchase>();
        }

        public int TraineeId { get; set; }
        public int? BatchId { get; set; }
        public int? UserId { get; set; }
        public bool? IsActive { get; set; }

        public virtual Batch Batch { get; set; }
        public virtual Users User { get; set; }
        public virtual ICollection<CoursePurchase> CoursePurchase { get; set; }
        public virtual ICollection<ResourcePurchase> ResourcePurchase { get; set; }
    }
}
