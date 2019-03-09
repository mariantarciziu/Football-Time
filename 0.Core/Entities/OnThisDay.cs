using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Entities
{
    public class OnThisDay
    {   
        public int Id {get; set;}

        public string Subject { get; set; }

        public DateTime Date { get; set; }

        public string ImageSource { get; set; }

        public OnThisDay(string Subject, DateTime Date)
        {
            this.Subject = Subject;
            this.Date = Date;
        }

        public OnThisDay()
        {
            Subject = "";
            Date = DateTime.Now;
        }
    }
}
