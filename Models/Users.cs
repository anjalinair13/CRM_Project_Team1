using System;
using System.Collections.Generic;

namespace CRM_Web_Api.Models
{
    public partial class Users
    {
        public Users()
        {
            Trainee = new HashSet<Trainee>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public int RoleId { get; set; }
        public bool? IsActive { get; set; }
        public decimal? UserContact { get; set; }
        public string UserEmail { get; set; }

        public virtual Roles Role { get; set; }
        public virtual ICollection<Trainee> Trainee { get; set; }
    }
}
