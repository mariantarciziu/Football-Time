using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Linq.Expressions;
using Core.Entities;

namespace Infrastructure.Repositories
{
    public class Team_PlayerRepository
    {
        private readonly FootballContext context;

        public Team_PlayerRepository(FootballContext context)
        {
            this.context = context;
        }

        public void Add(Team_Player team_player)
        {
            context.Team_Player.Add(team_player);
        }

        public int Count()
        {
            return context.Team_Player.Count();
        }

        public void Delete(Team_Player team_player)
        {
            context.Team_Player.Remove(team_player);
           
        }

        public void Update(Team_Player team_player)
        {
            context.Team_Player.Attach(team_player);
            context.Entry(team_player).State = EntityState.Modified;
        }

        public List<Team_Player> GetAllPlayersByTeam(string name)
        {
            var query = context.Team_Player.Where(team_player => team_player.TeamName.Equals(name)).ToList();
            return query;
        }

        public void Commit()
        {
            context.SaveChanges();
        }
    }
}

