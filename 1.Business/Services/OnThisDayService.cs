using Core.Service_Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;
using Core.Repository_Interfaces;
using System.Linq;

namespace Business.Services
{
    public class OnThisDayService : IOnThisDayService
    {
        private readonly IOnThisDayRepository OnThisDayRepository;
        public OnThisDayService(IOnThisDayRepository OnThisDayRepository)
        {
            this.OnThisDayRepository = OnThisDayRepository;
        }

        public IQueryable<OnThisDay> GetAll()
        {
            return OnThisDayRepository.GetAll();
        }

        public IQueryable<OnThisDay> GetAllForToday()
        {
            return OnThisDayRepository.GetTodayEvents();
        }

        public IQueryable<OnThisDay> GetTodayEvent()
        {
            return OnThisDayRepository.GetTodayEvents();
        }

        public IQueryable<OnThisDay> GetOnly(int number)
        {
            return OnThisDayRepository.GetOnly(number);
        }

        public OnThisDay GetById(int id)
        {
            return OnThisDayRepository.GetAll().FirstOrDefault(onThisDay=>onThisDay.Id.Equals(id));
        }

        public IQueryable<OnThisDay> GetAllByDate(DateTime date)
        {
            return OnThisDayRepository.GetAll().Where(onThisDay => onThisDay.Date.DayOfYear.Equals(date.DayOfYear));
        }

        public void Add(OnThisDay onThisDay)
        {
            OnThisDayRepository.Add(onThisDay);
        }

        public void Delete(OnThisDay onThisDay)
        {
            OnThisDayRepository.Delete(onThisDay);
        }

        public void Update(OnThisDay onThisDay)
        {
            OnThisDayRepository.Update(onThisDay);
        }

        public int Count()
        {
            return OnThisDayRepository.GetAll().Count();
        }

        public void SaveChanges()
        {
            OnThisDayRepository.SaveChanges();
        }


    }
}
