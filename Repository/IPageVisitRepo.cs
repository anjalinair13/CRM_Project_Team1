using CRM_Web_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Repository
{
    public interface IPageVisitRepo
    {
        //get PageVisit 
        public Task<List<PageVisit>> GetPageVisit();

        //get page by id
        Task<PageVisit> GetPageVisitById(int id);

        //update PageVisit enquiry
        public Task<PageVisit> UpdatePageVisit(int id);
    }
}
