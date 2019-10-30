using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Linq.Expressions;
using Core.Entities;
using Core.Repository_Interfaces;
using Core;
using System.IO;
using System.Reflection;

namespace Infrastructure.Repositories
{
    public class QuizRepository : IQuizRepository
    {
        private readonly FootballContext context;
        private IEnumerable<Quiz> dbQuizzes; 

        public QuizRepository(FootballContext context)
        {
            this.context = context;
            string _filePath = Path.GetDirectoryName(System.AppDomain.CurrentDomain.BaseDirectory);
            _filePath = Directory.GetParent(Directory.GetParent(Directory.GetParent(_filePath).FullName).FullName).FullName +  @"\wwwroot\quizzes.json";
            var content = File.ReadAllText(_filePath);
            dbQuizzes = Newtonsoft.Json.JsonConvert.DeserializeObject<IEnumerable<Quiz>>(content);
        }

        public IQueryable<Quiz> GetAll()
        {
            //return context.Quizzes.Include(q=>q.Questions);
            return dbQuizzes.AsQueryable();
        }

        public IQueryable<Quiz> GetOnly(int number)
        {
            //return context.Quizzes.Include(q => q.Questions).OrderBy(quiz => Guid.NewGuid()).Take(number);
            return dbQuizzes.OrderBy(quiz => Guid.NewGuid()).Take(number).AsQueryable();
        }

        public PagedList<Quiz> GetQuizzesForSpecificPage(int pageNumber, int pageSize)
        {
            var quizzsBeforePagination = dbQuizzes.AsQueryable().OrderByDescending(quiz => quiz.Title);//context.Quizzes.OrderByDescending(quiz => quiz.QuizId);
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
