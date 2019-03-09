using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Repository_Interfaces
{
    public interface IQuizRepository
    {
        IQueryable<Quiz> GetAll();

        IQueryable<Quiz> GetOnly(int number);

        PagedList<Quiz> GetQuizzesForSpecificPage(int pageNumber, int pageSize);

        void Add(Quiz quiz);

        void Delete(Quiz quiz);

        void Update(Quiz quiz);

        void SaveChanges();
    }
}
