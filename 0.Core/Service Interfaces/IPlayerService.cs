using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Service_Interfaces
{
    public interface IPlayerService
    {
        IQueryable<Player> GetAll();

        Player GetById(int id);

        Player GetByName(string name);

        IQueryable<Player> GetOnly(int number);

        IQueryable<Player> GetAllByTeam(string team);

        IQueryable<Player> GetAllByPosition(string position);

        IQueryable<Player> GetAllByBirthDate(DateTime birthDay);

        void Add(Player player);

        void Delete(Player player);

        void Update(Player player);

        int Count();

        void SaveChanges();
    }
}
