using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Repository_Interfaces
{
    public interface IOnThisDayRepository
    {
        IQueryable<OnThisDay> GetAll();

        IQueryable<OnThisDay> GetOnly(int number);

        void Add(OnThisDay onThisDay);

        void Delete(OnThisDay onThisDay);

        void Update(OnThisDay onThisDay);

        IQueryable<OnThisDay> GetTodayEvents();

        void SaveChanges();
    }
}
