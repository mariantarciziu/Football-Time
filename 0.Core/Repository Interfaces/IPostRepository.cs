using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Repository_Interfaces
{
    public interface IPostRepository
    {
        IQueryable<Post> GetAll();

        void Add(Post post);

        void Delete(Post post);

        void Update(Post post);

        PagedList<Post> GetPostsForSpecificPage(int pageNumber, int pageSize);

        void SaveChanges();
    }
}
