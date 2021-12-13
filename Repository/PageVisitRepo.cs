using CRM_Web_Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM_Web_Api.Repository
{
    public class PageVisitRepo:IPageVisitRepo
    {
        CRM_DatabaseContext db;

        public PageVisitRepo(CRM_DatabaseContext db)
        {
            this.db = db;
        }


        // get all  page visit details
        public async Task<List<PageVisit>> GetPageVisit()
        {
            if (db != null)
            {
                return await db.PageVisit.ToListAsync();
            }
            return null;
        }


        // pasing page name and checking if it exist ,if then increasing its couunt
        public async Task<PageVisit> UpdatePageVisit(int id)
        {
            if (db != null)
            {
                // PageVisit dbpage = null;
                PageVisit dbpage = db.PageVisit.FirstOrDefault(em => em.PageId == id);
                if (dbpage != null)
                {
                    dbpage.PageCount = dbpage.PageCount + 1;
                    db.PageVisit.Update(dbpage);
                    db.SaveChanges();
                    return dbpage;
                }
                else
                {
                    PageVisit pagevisit = new PageVisit();
                    pagevisit.PageId = id;
                    pagevisit.PageCount = 1;

                    db.PageVisit.AddAsync(pagevisit);
                    db.SaveChangesAsync();
                    return pagevisit;

                }

            }
            return null;
        }

        public async Task<PageVisit> GetPageVisitById(int id)
        {

            if (db != null)
            {
                //LINQ
                return await (from c in db.PageVisit

                              where c.PageId == id
                              select new PageVisit
                              {
                                  PageId = c.PageId,
                                  PageName = c.PageName,
                                  
                                  PageCount = c.PageCount,
                                  

                              }).FirstOrDefaultAsync();

            }
            return null;

        }

    }
}
