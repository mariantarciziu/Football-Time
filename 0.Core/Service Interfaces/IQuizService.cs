using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Service_Interfaces
{
    public interface IQuizService
    {
        IQueryable<Quiz> GetAll();

        IQueryable<Quiz> GetOnly(int number);

        PaginationDTO<Quiz> GetQuizzesForSpecificPage(int pageNumber, int pageSize);

        Quiz GetById(int id);

        void Add(Quiz quiz);

        void Delete(Quiz quiz);

        void Update(Quiz quiz);

        int Count();

        void SaveChanges();
    }
}
