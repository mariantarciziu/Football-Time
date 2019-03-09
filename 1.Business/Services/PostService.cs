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
    public class PostService : IPostService
    {
        private readonly IPostRepository PostRepository;
        public PostService(IPostRepository PostRepository)
        {
            this.PostRepository = PostRepository;
        }

        public IQueryable<Post> GetAll()
        {
            return PostRepository.GetAll();
        }

        public Post GetById(int id)
        {
            return PostRepository.GetAll().FirstOrDefault(post=>post.Id.Equals(id));
        }

        public IQueryable<Post> GetAllByDate(DateTime date)
        {
            return PostRepository.GetAll().Where(post => post.Date.DayOfYear.Equals(date.DayOfYear));
        }

        public IQueryable<Post> GetLastNPosts(int number)
        {
            return PostRepository.GetAll().OrderByDescending(e => e.Date).Take(number);
        }

        public void Add(Post post)
        {
            PostRepository.Add(post);
        }

        public void Delete(Post post)
        {
            PostRepository.Delete(post);
        }

        public void Update(Post post)
        {
            PostRepository.Update(post);
        }

        public int Count()
        {
            return PostRepository.GetAll().Count();
        }

        public void SaveChanges()
        {
            PostRepository.SaveChanges();
        }

        public PaginationDTO<Post> GetPostsForSpecificPage(int pageNumber, int pageSize)
        {
            var postsPerPage = PostRepository.GetPostsForSpecificPage(pageNumber, pageSize);
            var paginatedPostsDTO = new PaginationDTO<Post>
            {
                TotalNumber = postsPerPage.TotalCount,
                TotalPages = postsPerPage.TotalPages,
                CurrentPage = postsPerPage.CurrentPage,
                PageSize = postsPerPage.PageSize,
                Items = postsPerPage
            };
            return paginatedPostsDTO;
        }
    }
}
