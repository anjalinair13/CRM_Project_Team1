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
        public string AdminReply { get; set; }
        public DateTime? AdminReplyDate { get; set; }
        public bool? IsActive { get; set; }
        public int? StatusId { get; set; }
        public int? QualificationId { get; set; }
        public string EnquirerName { get; set; }

        public virtual Qualification Qualification { get; set; }
        public virtual Resources Resource { get; set; }
        public virtual Status Status { get; set; }
    }
}
