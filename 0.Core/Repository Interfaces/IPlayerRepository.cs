using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Repository_Interfaces
{
    public interface IPlayerRepository
    {
        IQueryable<Player> GetAll();

        IQueryable<Player> GetOnly(int number);

        void Add(Player player);

        void Delete(Player player);

        void Update(Player player);

        void SaveChanges();
    }
}
