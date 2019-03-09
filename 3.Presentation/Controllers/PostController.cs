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
    public class PostController : Controller
    {
        private readonly IPostService PostService;

        public PostController(IPostService PostService)
        {
            this.PostService = PostService;
        }

        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            var posts = PostService.GetAll();
            return Ok(posts);
        }

        [HttpGet("[action]/{pageNumber:int}/{pageSize:int}")]
        public IActionResult GetPostsPerPage(int pageNumber = 1, int pageSize = 10)
        {
            var postsPerPage = PostService.GetPostsForSpecificPage(pageNumber, pageSize);

            if (postsPerPage == null)
            {
                return NotFound();
            }

            return Ok(postsPerPage);
        }

        [HttpGet("[action]/{id}")]
        public IActionResult GetById(int id)
        {
            var post = PostService.GetById(id);
            return Ok(post);
        }

        [HttpGet("[action]")]
        public IActionResult GetAllByDate(DateTime date)
        {
            var posts = PostService.GetAllByDate(date);
            return Ok(posts);
        }

        [HttpGet("[action]/{number}")]
        public IActionResult GetLastNPosts(int number)
        {
            var posts = PostService.GetLastNPosts(number);
            return Ok(posts);
        }


        [HttpPost("[action]")]
        [AdminValidator]
        public IActionResult Add([FromBody] Post post)
        {
            PostService.Add(post);
            PostService.SaveChanges();
            return Created("Post created", post.Id);
        }

        [HttpPost("[action]")]
        public IActionResult AddPosts([FromBody] Post[] posts)
        {
            foreach (var post in posts)
            {
                PostService.Add(post);
            }
            PostService.SaveChanges();
            return Created("Events added", posts.Count());
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete([FromBody] Post post)
        {
            PostService.Delete(post);
            PostService.SaveChanges();
            return Ok();
        }

        [HttpPut("{id:int}")]
        public IActionResult Update([FromBody] Post post)
        {
            PostService.Update(post);
            PostService.SaveChanges();
            return Ok();
        }


    }
}
