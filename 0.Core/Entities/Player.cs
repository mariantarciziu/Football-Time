using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Entities
{
    public class Player
    {
        [Key]
        public int PlayerId { get; set; }

        [Required]
        public string Name { get; set; }

        public string League { get; set; }

        public string CurrentTeam { get; set; }

        public string Nationality { get; set; }

        public string Position { get; set; }

        public DateTime BirthDay { get; set; }

        public int Height { get; set; }

        public int Weight { get; set; }

        public string Strengths { get; set; }

        public string Weaknesses { get; set; }

        public string Description { get; set; }

        public string ImageSource { get; set; }

        public Player(string Name, string League , string CurrentTeam, string Nationality, string Position, DateTime BirthDay,string Strengths,string Weaknesses, string Description, string ImageSource)
        {
            this.Name = Name;
            this.League = League;
            this.CurrentTeam = CurrentTeam;
            this.Nationality = Nationality;
            this.Position = Position;
            this.BirthDay = BirthDay;
            this.Description = Description;
            this.ImageSource = ImageSource;
            this.Strengths = Strengths;
            this.Weaknesses = Weaknesses;
        }

        public Player()
        {
            Name = "";
            League = "";
            CurrentTeam = "";
            Nationality = "";
            Position = "";
            BirthDay = DateTime.Now;
            Description = "";
        }

        public Player(string Name, string CurrentTeam,string Description)
        {
            this.Name = Name;
            this.CurrentTeam = CurrentTeam;
            this.Description = Description;
        }

        public Player(string Name, string League , string CurrentTeam, string Description)
        {
            this.Name = Name;
            this.League = League;
            this.CurrentTeam = CurrentTeam;
            this.Description = Description;
        }

    }
}
