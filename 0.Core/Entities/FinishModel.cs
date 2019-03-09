using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entities
{
    class FinishModel
    {
        public Quiz Quiz { get; set; }
        public Dictionary<int, string> Answers { get; set; }
        public int CorrectAnswers { get; set; }
    }
}
