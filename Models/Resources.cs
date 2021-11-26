using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class Resources
    {
        public Resources()
        {
            ResourceEnquiry = new HashSet<ResourceEnquiry>();
            ResourcePurchase = new HashSet<ResourcePurchase>();
        }

        public int ResourceId { get; set; }
        public string ResourceName { get; set; }
        public bool IsPublic { get; set; }
        public bool IsAvailable { get; set; }
        public decimal ResourceCost { get; set; }
        public string ResourceDescription { get; set; }

        public virtual ICollection<ResourceEnquiry> ResourceEnquiry { get; set; }
        public virtual ICollection<ResourcePurchase> ResourcePurchase { get; set; }
    }
}
