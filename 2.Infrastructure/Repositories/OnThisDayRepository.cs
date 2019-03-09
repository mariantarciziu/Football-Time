using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Linq.Expressions;
using Core.Entities;
using Core.Repository_Interfaces;

namespace Infrastructure.Repositories
{
    public class OnThisDayRepository : IOnThisDayRepository
    {
        private readonly FootballContext context;

        public OnThisDayRepository(FootballContext context)
        {
            this.context = context;
        }

        public IQueryable<OnThisDay> GetAll()
        {
            return context.OnThisDay;
        }

        public IQueryable<OnThisDay> GetOnly(int number)
        {
            return context.OnThisDay.OrderBy(e => Guid.NewGuid()).Take(number);
        }

        public void Add(OnThisDay onThisDay)
        {
            context.OnThisDay.Add(onThisDay);
        }

        public void Delete(OnThisDay onThisDay)
        {
            context.OnThisDay.Remove(onThisDay);

        }

        public void Update(OnThisDay onThisDay)
        {
            context.OnThisDay.Attach(onThisDay);
            context.Entry(onThisDay).State = EntityState.Modified;
        }

        public void SaveChanges()
        {
            context.SaveChanges();
        }

        public IQueryable<OnThisDay> GetTodayEvents()
        {
            var query = context.OnThisDay.Where(Event => Event.Date.DayOfYear == DateTime.Now.DayOfYear);
            return query;
        }
    }
}
