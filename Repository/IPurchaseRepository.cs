using CRM_Web_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Repository
{
    public interface IPurchaseRepository
    {

        //--- add Course Purchase ---//
        Task<CoursePurchase> AddCoursePurchase(CoursePurchase coursePurchase);

        //--get course Purchase--//
        Task<List<CoursePurchase>> GetCoursePurchase();

        //--- add Resources Purchase---//
        Task<ResourcePurchase> AddResourcePurchase(ResourcePurchase resourcePurchase);

        //--get Resources Purchase--//
        Task<List<ResourcePurchase>> GetResourcePurchase();




    }
}
