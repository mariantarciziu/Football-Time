using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Linq.Expressions;
using Core.Entities;
using Core.Repository_Interfaces;
using Core;

namespace Infrastructure.Repositories
{
    public class QuizRepository : IQuizRepository
    {
        private readonly FootballContext context;

        public QuizRepository(FootballContext context)
        {
            this.context = context;
        }

        public IQueryable<Quiz> GetAll()
        {
            return context.Quizzes.Include(q=>q.Questions);
        }

        public IQueryable<Quiz> GetOnly(int number)
        {
            return context.Quizzes.Include(q => q.Questions).OrderBy(quiz => Guid.NewGuid()).Take(number);
        }

        public PagedList<Quiz> GetQuizzesForSpecificPage(int pageNumber, int pageSize)
        {
            var quizzsBeforePagination = context.Quizzes.OrderByDescending(quiz => quiz.QuizId);
            return PagedList<Quiz>.Create(quizzsBeforePagination, pageNumber, pageSize, quizzsBeforePagination.Count());
        }

        public void Add(Quiz quiz)
        {
            context.Quizzes.Add(quiz);
        }

        public void Delete(Quiz quiz)
        {
            context.Quizzes.Remove(quiz);

        }

        public void Update(Quiz quiz)
        {
            context.Quizzes.Attach(quiz);
            context.Entry(quiz).State = EntityState.Modified;
        }

        public void SaveChanges()
        {
            context.SaveChanges();
        }
    }
}
