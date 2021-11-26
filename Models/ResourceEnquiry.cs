using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class ResourceEnquiry
    {
        public int ResourceEnquiryId { get; set; }
        public string Description { get; set; }
        public DateTime? EnquiryDate { get; set; }
        public int? ResourceId { get; set; }
        public string Email { get; set; }

        public virtual Resources Resource { get; set; }
    }
}
