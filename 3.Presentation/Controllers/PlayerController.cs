using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Core.Service_Interfaces;
using Core.Entities;

namespace Presentation.Controllers
{
    [Route("api/[controller]")]
    public class PlayerController : Controller
    {
        private readonly IPlayerService PlayerService;

        public PlayerController(IPlayerService PlayerService)
        {
            this.PlayerService = PlayerService;
        }

        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            var players = PlayerService.GetAll();
            return Ok(players);
        }

        [HttpGet("[action]/{id}")]
        public IActionResult GetById(int id)
        {
            var player = PlayerService.GetById(id);
            return Ok(player);
        }

        [HttpGet("[action]/{name}")]
        public IActionResult GetByName(string name)
        {
            var player = PlayerService.GetByName(name);
            return Ok(player);
        }

        [HttpGet("[action]/{number}")]
        public IActionResult GetOnly(int number)
        {
            var players = PlayerService.GetOnly(number);
            return Ok(players);
        }

        [HttpGet("[action]/{team}")]
        public IActionResult GetAllByTeam(string team)
        {
            var teams = PlayerService.GetAllByTeam(team);
            return Ok(teams);
        }

        [HttpGet("[action]/{position}")]
        public IActionResult GetAllByPosition(string position)
        {
            var players = PlayerService.GetAllByPosition(position);
            return Ok(players);
        }

        [HttpGet("[action]")]
        public IActionResult GetAllWithTeamsAndLeagues()
        {
            var players = PlayerService.GetAll();
            return Ok(players);
        }

        [HttpGet("[action]")]
        public IActionResult GetAllByBirthDate(DateTime birthDay)
        {
            var players = PlayerService.GetAllByBirthDate(birthDay);
            return Ok(players);
        }

        [HttpPost("[action]")]
        [AdminValidator]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Add([FromBody] Player player)
        {
            PlayerService.Add(player);
            PlayerService.SaveChanges();
            return Created("Player created", player.Name);
        }

        [HttpPost("[action]")]
        [AdminValidator]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult AddPlayers([FromBody] Player[] players)
        {
            foreach (var player in players)
            {
                PlayerService.Add(player);
            }
            PlayerService.SaveChanges();
            return Created("Players added", players.Count());
        }

        [HttpDelete("{id:int}")]
        [AdminValidator]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Delete([FromBody] Player player)
        {
            PlayerService.Delete(player);
            PlayerService.SaveChanges();
            return Ok();
        }

        [HttpPut("{id:int}")]
        [AdminValidator]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Update([FromBody] Player player)
        {
            PlayerService.Update(player);
            PlayerService.SaveChanges();
            return Ok();
        }


    }
}
