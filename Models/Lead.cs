using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class Lead
    {
        public int LeadId { get; set; }
        public string LeadName { get; set; }
        public string LeadEmail { get; set; }
        public bool? IsActive { get; set; }
    }
}
