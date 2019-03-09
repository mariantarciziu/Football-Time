using Core.Service_Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using Core.Entities;
using Core.Repository_Interfaces;
using System.Linq;
using Core;

namespace Business.Services
{
    public class QuizService : IQuizService
    {
        private readonly IQuizRepository QuizRepository;
        public QuizService(IQuizRepository QuizRepository)
        {
            this.QuizRepository = QuizRepository;
        }

        public IQueryable<Quiz> GetAll()
        {
            return QuizRepository.GetAll();
        }

        public Quiz GetById(int id)
        {
            return QuizRepository.GetAll().FirstOrDefault(quiz => quiz.QuizId.Equals(id));
        }

        public IQueryable<Quiz> GetOnly(int number)
        {
            return QuizRepository.GetOnly(number);
        }

        public PaginationDTO<Quiz> GetQuizzesForSpecificPage(int pageNumber, int pageSize)
        {
            var quizzesPerPage = QuizRepository.GetQuizzesForSpecificPage(pageNumber, pageSize);
            var paginatedQuizzesDTO = new PaginationDTO<Quiz>
            {
                TotalNumber = quizzesPerPage.TotalCount,
                TotalPages = quizzesPerPage.TotalPages,
                CurrentPage = quizzesPerPage.CurrentPage,
                PageSize = quizzesPerPage.PageSize,
                Items = quizzesPerPage
            };
            return paginatedQuizzesDTO;
        }

        public void Add(Quiz quiz)
        {
            QuizRepository.Add(quiz);
        }

        public void Delete(Quiz quiz)
        {
            QuizRepository.Delete(quiz);
        }

        public void Update(Quiz quiz)
        {
            QuizRepository.Update(quiz);
        }

        public int Count()
        {
            return QuizRepository.GetAll().Count();
        }

        public void SaveChanges()
        {
            QuizRepository.SaveChanges();
        }


    }
}
