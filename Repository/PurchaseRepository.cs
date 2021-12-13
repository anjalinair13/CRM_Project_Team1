using CRM_Web_Api.Models;
using Microsoft.EntityFrameworkCore;
using CRM_Web_Api.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Repository
{
    public class PurchaseRepository : IPurchaseRepository
    {
        CRM_DatabaseContext db;

        //constructor dependancy injection
        public PurchaseRepository(CRM_DatabaseContext _db)
        {
            db = _db;
        }
        public async Task<CoursePurchase> AddCoursePurchase(CoursePurchase coursePurchase)
        {
            //--- member function to add department ---//
            if (db != null)
            {
                await db.CoursePurchase.AddAsync(coursePurchase);
                await db.SaveChangesAsync();
                return coursePurchase;
            }
            return null;


        }

        public async Task<ResourcePurchase> AddResourcePurchase(ResourcePurchase resourcePurchase)
        {
            //--- member function to add department ---//
            if (db != null)
            {
                await db.ResourcePurchase.AddAsync(resourcePurchase);
                await db.SaveChangesAsync();
                return resourcePurchase;
            }
            return null;

        }

        public async Task<List<CoursePurchase>> GetCoursePurchase()
        {
            if (db != null)
            {
                return await db.CoursePurchase.ToListAsync();
            }
            return null;
        }

        public async Task<List<ResourcePurchase>> GetResourcePurchase()
        {
            if (db != null)
            {
                return await db.ResourcePurchase.ToListAsync();
            }
            return null;
        }
    }
}
