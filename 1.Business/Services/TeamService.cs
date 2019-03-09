using Core.Service_Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;
using Core.Repository_Interfaces;
using System.Linq;

namespace Business.Services
{
    public class TeamService : ITeamService
    {
        private readonly ITeamRepository TeamRepository;
        public TeamService(ITeamRepository TeamRepository)
        {
            this.TeamRepository = TeamRepository;
        }

        public IQueryable<Team> GetAll()
        {
            return TeamRepository.GetAll();
        }

        public Team GetById(int id)
        {
            return TeamRepository.GetAll().FirstOrDefault(team=>team.TeamId.Equals(id));
            
        }

        public IQueryable<Team> GetOnly(int number)
        {
            return TeamRepository.GetOnly(number);
        }

        public Team GetByName(string name)
        {
            return TeamRepository.GetAll().FirstOrDefault(team => team.Name.Equals(name));
        }

        public IQueryable<Team> GetAllByCountry(string country)
        {
            return TeamRepository.GetAll().Where(team => team.Country.Equals(country));
        }

        public IQueryable<Team> GetAllByLeague(string league)
        {
            return TeamRepository.GetAll().Where(team => team.League.Equals(league));
        }

        public void Add(Team team)
        {
            TeamRepository.Add(team);
        }

        public void Delete(Team team)
        {
            TeamRepository.Delete(team);
        }

        public void Update(Team team)
        {
            TeamRepository.Update(team);
        }

        public int Count()
        {
            return TeamRepository.GetAll().Count();
        }

        public void SaveChanges()
        {
            TeamRepository.SaveChanges();
        }
    }
}
