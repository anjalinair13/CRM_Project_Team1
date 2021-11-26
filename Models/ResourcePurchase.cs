using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class ResourcePurchase
    {
        public int PurchaseId { get; set; }
        public int? ResourceId { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public int? PeriodOfPurchase { get; set; }
        public bool? IsActive { get; set; }
        public int? TraineeId { get; set; }

        public virtual Resources Resource { get; set; }
        public virtual Trainee Trainee { get; set; }
    }
}
