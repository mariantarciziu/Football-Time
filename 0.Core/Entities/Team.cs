using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Entities
{
    public class Team
    {
        [Key]
        public int TeamId { get; set; }

        [Required]
        public string Name { get; set; }

        public string Country { get; set; }

        public string League { get; set; }

        public string Description { get; set; }

        public string ImageSource { get; set; }

        public Team(string Name, string Country, string League, string Description,string ImageSource)
        {
            this.Name = Name;
            this.Country = Country;
            this.League = League;
            this.Description = Description;
            this.ImageSource = ImageSource;
        }

        public Team(string Name,string Desciption,string ImageName)
        {
            this.Name = Name;
            this.Description = Description;
            this.ImageSource = ImageSource;
        }

        public Team()
        {
            this.Name = "";
            this.Country = "";
            this.League = "";
            this.Description = "";
            this.ImageSource = "";
        }

    }
}
