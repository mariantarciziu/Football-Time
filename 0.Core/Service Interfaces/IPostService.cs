using Core.Entities;
using System;
using System.Linq;

namespace Core.Service_Interfaces
{
    public interface IPostService
    {
        IQueryable<Post> GetAll();

        Post GetById(int id);

        IQueryable<Post> GetAllByDate(DateTime date);

        IQueryable<Post> GetLastNPosts(int number);

        PaginationDTO<Post> GetPostsForSpecificPage(int pageNumber, int pageSize);

        void Add(Post post);

        void Delete(Post post);

        void Update(Post post);

        int Count();

        void SaveChanges();
    }
}
