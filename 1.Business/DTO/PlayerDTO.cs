using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Business.DTO
{
    class PlayerDTO
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string League { get; set; }

        [Required]
        public string CurrentTeam { get; set; }

        public string Nationality { get; set; }

        public string Position { get; set; }

        public DateTime BirthDay { get; set; }

        public int Height { get; set; }

        public int Weight { get; set; }

        public string Strengths { get; set; }

        public string Weaknesses { get; set; }

        public string Description { get; set; }

        public string ImageName { get; set; }
    }
}
