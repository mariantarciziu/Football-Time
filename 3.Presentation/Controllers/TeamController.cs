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
    public class TeamController : Controller
    {
        private readonly ITeamService TeamService;

        public TeamController(ITeamService TeamService)
        {
            this.TeamService = TeamService;
        }

        [HttpGet("[action]")]
        public IQueryable<Team> GetAll()
        {
            var teams = TeamService.GetAll();
            return teams;
        }

        [HttpGet("[action]/{id}")]
        public IActionResult GetById(int id)
        {
            var team = TeamService.GetById(id);
            return Ok(team);
        }

        [HttpGet("[action]/{number}")]
        public IActionResult GetOnly(int number)
        {
            var teams = TeamService.GetOnly(number);
            return Ok(teams);
        }

        [HttpGet("[action]")]
        public IActionResult GetByName(string name)
        {
            var player = TeamService.GetByName(name);
            return Ok(player);
        }

        [HttpGet("[action]")]
        public IActionResult GetAllByCountry(string country)
        {
            var teams = TeamService.GetAllByCountry(country);
            return Ok(teams);
        }

        [HttpGet("[action]/{league}")]
        public IActionResult GetAllByLeague(string league)
        {
            var teams = TeamService.GetAllByLeague(league);
            return Ok(teams);
        }

        [HttpPost("[action]")]
        [AdminValidator]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Add([FromBody] Team team)
        {
            TeamService.Add(team);
            TeamService.SaveChanges();
            return Created("Player created",team.Name);
        }

        [HttpPost("[action]")]
        [AdminValidator]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult AddTeams([FromBody] Team[] teams)
        {
           foreach(var team in teams)
            {
                TeamService.Add(team);
            }
            TeamService.SaveChanges();
            return Created("Teams added", teams.Count());
        }

        [HttpDelete("{id:int}")]
        [AdminValidator]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Delete([FromBody] Team team)
        {
            TeamService.Delete(team);
            TeamService.SaveChanges();
            return Ok();
        }

        [HttpPut("{id:int}")]
        [AdminValidator]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Update([FromBody] Team team)
        {
            TeamService.Update(team);
            TeamService.SaveChanges();
            return Ok();
        }


    }
}
