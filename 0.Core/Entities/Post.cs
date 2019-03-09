using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Entities
{
    public class Post
    {   
        public int Id {get; set;}

        public string Title { get; set; }

        public DateTime Date { get; set; }

        public string Body { get; set; }

        // public string Category { get; set; }
        // public string Tags { get; set; }

        public string ImageSource { get; set; }

        public Post(string title, DateTime date, string body)
        {
            this.Title = title;
            this.Date = date;
            this.Body = body;
        }

        public Post()
        {
            Title = "";
            Date = DateTime.Now;
            Body = "";
        }
    }
}
