using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entities
{
    class QuestionModel
    {
        public Question Question { get; set; }
        public string Answer { get; set; }
        public int Number { get; set; }
        public int Total { get; set; }
    }
}
