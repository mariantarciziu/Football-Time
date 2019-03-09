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
    public class PostRepository : IPostRepository
    {
        private readonly FootballContext context;

        public PostRepository(FootballContext context)
        {
            this.context = context;
        }

        public IQueryable<Post> GetAll()
        {
            return context.Post;
        }

        public void Add(Post post)
        {
            context.Post.Add(post);
        }

        public void Delete(Post post)
        {
            context.Post.Remove(post);

        }

        public void Update(Post post)
        {
            context.Post.Attach(post);
            context.Entry(post).State = EntityState.Modified;
        }

        public void SaveChanges()
        {
            context.SaveChanges();
        }

        public List<Post> GetTodayPosts()
        {
            var query = context.Post.Where(Event => Event.Date.DayOfYear == DateTime.Now.DayOfYear).ToList();
            return query;
        }

        public PagedList<Post> GetPostsForSpecificPage(int pageNumber, int pageSize)
        {
            var postsBeforePagination = context.Post.OrderByDescending(post => post.Date);
            return PagedList<Post>.Create(postsBeforePagination, pageNumber, pageSize, postsBeforePagination.Count());
        }
    }
}
