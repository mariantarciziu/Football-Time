using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Entities
{
    public class Team_Player
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string TeamName { get; set; }

        [Required]
        public string PlayerName { get; set; }

        [Required]
        public string League { get; set; }


        public Team_Player(string TeamName, string PlayerName)
        {
            this.TeamName = TeamName;
            this.PlayerName = PlayerName;

        }

        public Team_Player(string TeamName, string PlayerName, string League)
        {
            this.TeamName = TeamName;
            this.PlayerName = PlayerName;
            this.League = League;

        }

        public Team_Player()
        {
            TeamName = "";
            PlayerName = "";
        }

    }
}
