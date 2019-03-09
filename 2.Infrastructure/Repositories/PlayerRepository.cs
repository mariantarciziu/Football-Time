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
    public class PlayerRepository : IPlayerRepository
    {

        private readonly FootballContext context;

        public PlayerRepository(FootballContext context)
        {
            this.context = context;
        }

        public IQueryable<Player> GetAll()
        {
            return context.Players;
        }

        public IQueryable<Player> GetOnly(int number)
        {
            return context.Players.OrderBy(e => Guid.NewGuid()).Take(number);
        }

        public void Add(Player player)
        {
            context.Players.Add(player);
        }

        public void Delete(Player player)
        {
            context.Players.Remove(player);      
        }

        public void Update(Player player)
        {
            context.Players.Attach(player);
            context.Entry(player).State = EntityState.Modified;
        }

        public void SaveChanges()
        {
            context.SaveChanges();
        }
    }
}

