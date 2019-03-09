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
    public class QuizController : Controller
    {
        private readonly IQuizService QuizService;

        public QuizController(IQuizService QuizService)
        {
            this.QuizService = QuizService;
        }

        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            var quizzes = QuizService.GetAll();
            return Ok(quizzes);
        }

        [HttpGet("[action]/{number}")]
        public IActionResult GetOnly(int number)
        {
            var quizzes = QuizService.GetOnly(number);
            return Ok(quizzes);
        }

        [HttpGet("[action]/{id}")]
        public IActionResult GetById(int id)
        {
            var quiz = QuizService.GetById(id);
            return Ok(quiz);
        }

        [HttpGet("[action]/{pageNumber:int}/{pageSize:int}")]
        public IActionResult GetQuizzesPerPage(int pageNumber = 1, int pageSize = 10)
        {
            var quizzesPerPage = QuizService.GetQuizzesForSpecificPage(pageNumber, pageSize);

            if (quizzesPerPage == null)
            {
                return NotFound();
            }

            return Ok(quizzesPerPage);
        }

        [HttpPost("[action]")]
        public IActionResult Add([FromBody] Quiz quiz)
        {
            QuizService.Add(quiz);
            QuizService.SaveChanges();
            return Created("Quiz created", quiz.QuizId);
        }

        [HttpPost("[action]")]
        public IActionResult AddQuizzes([FromBody] Quiz[] quizzes)
        {
            foreach (var quiz in quizzes)
            {
                QuizService.Add(quiz);
            }
            QuizService.SaveChanges();
            return Created("Quizzes added", quizzes.Count());
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete([FromBody] Quiz quiz)
        {
            QuizService.Delete(quiz);
            QuizService.SaveChanges();
            return Ok();
        }

        [HttpPut("{id:int}")]
        public IActionResult Update([FromBody] Quiz quiz)
        {
            QuizService.Update(quiz);
            QuizService.SaveChanges();
            return Ok();
        }


    }
}
