using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Service_Interfaces
{
    public interface ITeamService
    {
        IQueryable<Team> GetAll();

        Team GetById(int id);

        Team GetByName(string name);

        IQueryable<Team> GetOnly(int number);

        IQueryable<Team> GetAllByCountry(string country);

        IQueryable<Team> GetAllByLeague(string league);

        void Add(Team team);

        void Delete(Team player);

        void Update(Team player);

        int Count();

        void SaveChanges();
    }
}
