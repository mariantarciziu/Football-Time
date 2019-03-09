using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Entities
{
    public class Quiz
    {
        [Key]
        public int QuizId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string ImageSource { get; set; }

        public ICollection<Question> Questions { get; set; }

        public Quiz()
        {
            Questions = new HashSet<Question>();
        }
    }
}
