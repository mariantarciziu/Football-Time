using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Repository_Interfaces
{
    public interface ITeamRepository
    {
        IQueryable<Team> GetAll();

        IQueryable<Team> GetOnly(int number);

        void Add(Team player);

        void Delete(Team player);

        void Update(Team player);

        void SaveChanges();


    }
}
