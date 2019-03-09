using Core.Service_Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;
using Core.Repository_Interfaces;
using System.Linq;

namespace Business.Services
{
    public class PlayerService : IPlayerService
    {
        private readonly IPlayerRepository PlayerRepository;
        public PlayerService(IPlayerRepository PlayerRepository)
        {
            this.PlayerRepository = PlayerRepository;
        }

        public IQueryable<Player> GetAll()
        {
            return PlayerRepository.GetAll();
        }

        public Player GetById(int id)
        {
            return PlayerRepository.GetAll().FirstOrDefault(player=>player.PlayerId.Equals(id));
        }

        public Player GetByName(string name)
        {
            return PlayerRepository.GetAll().FirstOrDefault(player => player.Name.Equals(name));
        }

        public IQueryable<Player> GetOnly(int number)
        {
            return PlayerRepository.GetOnly(number);
        }

        public IQueryable<Player> GetAllByTeam(string team)
        {
            return PlayerRepository.GetAll().Where(player => player.CurrentTeam.Equals(team));
        }

        public IQueryable<Player> GetAllByPosition(string position)
        {
            return PlayerRepository.GetAll().Where(player => player.Position.Equals(position));
        }

        public IQueryable<Player> GetAllByBirthDate(DateTime birthDay)
        {
            return PlayerRepository.GetAll().Where(player => player.BirthDay.DayOfYear.Equals(birthDay.DayOfYear));
        }

        public void Add(Player player)
        {
            PlayerRepository.Add(player);
        }

        public void Delete(Player player)
        {
            PlayerRepository.Delete(player);
        }

        public void Update(Player player)
        {
            PlayerRepository.Update(player);
        }

        public int Count()
        {
            return PlayerRepository.GetAll().Count();
        }

        public void SaveChanges()
        {
            PlayerRepository.SaveChanges();
        }


    }
}
