using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Core.Entities;

namespace Infrastructure
{
    public class FootballContext : DbContext
    {
        public DbSet<Player> Players { get; set; }

        public DbSet<Team> Teams { get; set; }

        public DbSet<OnThisDay> OnThisDay { get; set; }

        public DbSet<Post> Post { get; set; }

        public DbSet<Team_Player> Team_Player { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<Question> Questions { get; set; }

        public FootballContext(DbContextOptions dbContextOptions) : base(dbContextOptions) { }

    }
}
