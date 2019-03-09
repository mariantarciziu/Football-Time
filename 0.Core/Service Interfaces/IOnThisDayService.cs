using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Service_Interfaces
{
    public interface IOnThisDayService
    {
        IQueryable<OnThisDay> GetAll();

        OnThisDay GetById(int id);

        IQueryable<OnThisDay> GetAllByDate(DateTime date);

        IQueryable<OnThisDay> GetTodayEvent();

        IQueryable<OnThisDay> GetOnly(int number);

        IQueryable<OnThisDay> GetAllForToday();

        void Add(OnThisDay onThisDay);

        void Delete(OnThisDay onThisDay);

        void Update(OnThisDay onThisDay);

        int Count();

        void SaveChanges();
    }
}
