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
    public class OnThisDayController : Controller
    {
        private readonly IOnThisDayService OnThisDayService;

        public OnThisDayController(IOnThisDayService OnThisDayService)
        {
            this.OnThisDayService = OnThisDayService;
        }

        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            var events = OnThisDayService.GetAll();
            return Ok(events);
        }

        [HttpGet("[action]")]
        public IActionResult GetAllForToday()
        {
            var events = OnThisDayService.GetAllForToday();
            return Ok(events);
        }

        [HttpGet("[action]/{id}")]
        public IActionResult GetById(int id)
        {
            var onThisDay = OnThisDayService.GetById(id);
            return Ok(onThisDay);
        }

        [HttpGet("[action]")]
        public IActionResult GetToday()
        {
            var onThisDay = OnThisDayService.GetTodayEvent().OrderBy(evenimentOfTheDay => Guid.NewGuid()).FirstOrDefault();
            return Ok(onThisDay);
        }

        [HttpGet("[action]/{number}")]
        public IActionResult GetOnly(int number)
        {
            var onThisDays = OnThisDayService.GetOnly(number);
            return Ok(onThisDays);
        }

        [HttpGet("[action]")]
        public IActionResult GetAllByDate(DateTime date)
        {
            var events = OnThisDayService.GetAllByDate(date);
            return Ok(events);
        }

        [HttpPost("[action]")]
        [ApiExplorerSettings(IgnoreApi = true)]
        [AdminValidator]
        public IActionResult Add([FromBody] OnThisDay onThisDay)
        {
            OnThisDayService.Add(onThisDay);
            OnThisDayService.SaveChanges();
            return Created("Event created", onThisDay.Id);
        }

        [HttpPost("[action]")]
        [ApiExplorerSettings(IgnoreApi = true)]
        [AdminValidator]
        public IActionResult AddOnThisDays([FromBody] OnThisDay[] events)
        {
            foreach (var onThisDay in events)
            {
                OnThisDayService.Add(onThisDay);
            }
            OnThisDayService.SaveChanges();
            return Created("Events added", events.Count());
        }

        [HttpDelete("{id:int}")]
        [AdminValidator]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Delete([FromBody] OnThisDay onThisDay)
        {
            OnThisDayService.Delete(onThisDay);
            OnThisDayService.SaveChanges();
            return Ok();
        }

        [HttpPut("{id:int}")]
        [ApiExplorerSettings(IgnoreApi = true)]
        [AdminValidator]
        public IActionResult Update([FromBody] OnThisDay onThisDay)
        {
            OnThisDayService.Update(onThisDay);
            OnThisDayService.SaveChanges();
            return Ok();
        }


    }
}
