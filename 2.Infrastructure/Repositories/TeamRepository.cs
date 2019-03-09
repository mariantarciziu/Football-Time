using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Core.Entities;
using Core.Repository_Interfaces;

namespace Infrastructure.Repositories
{
    public class TeamRepository : ITeamRepository
    {
        private readonly FootballContext context;

        public TeamRepository(FootballContext context)
        {
            this.context = context;
        }

        public Dictionary<string, string[]> GetLeaguesWithTeams()
        {
            var leagues = new Dictionary<string, string[]>();
            leagues.Add("Premier League", GetTeamsByLeague("Premier League"));
            leagues.Add("Bundesliga", GetTeamsByLeague("Bundesliga"));
            leagues.Add("La Liga", GetTeamsByLeague("La Liga"));
            leagues.Add("Ligue 1", GetTeamsByLeague("Ligue 1"));
            leagues.Add("Serie A", GetTeamsByLeague("Serie A"));
            return leagues;
        }

        public string[] GetTeamsByLeague(string league)
        {
            int contor = 0;
            string[] list_duplicate = new string[1000];
            foreach (var team in context.Teams)
            {
                if (team.League == league)
                {
                    list_duplicate[contor] = team.Name;
                    contor++;
                }
            }
            contor = list_duplicate.Distinct().Count();
            string[] list = new string[contor];
            contor = 0;
            foreach (var team in list_duplicate.Distinct())
            {
                list[contor] = team;
                contor++;
            }
            list = list.Take(list.Count() - 1).ToArray();           
            return list;
        }

        public IQueryable<Team> GetAll()
        {
            return context.Teams;
        }

        public IQueryable<Team> GetOnly(int number)
        {
            return context.Teams.OrderBy(e => Guid.NewGuid()).Take(number);
        }

        public void Add(Team team)
        {
            context.Teams.Add(team);
        }

        public void Delete(Team team)
        {
            context.Teams.Remove(team);
        }

        public void Update(Team team)
        {
            context.Teams.Attach(team);
            context.Entry(team).State = EntityState.Modified;
        }

        public void SaveChanges()
        {
            context.SaveChanges();
        }
    }
}
