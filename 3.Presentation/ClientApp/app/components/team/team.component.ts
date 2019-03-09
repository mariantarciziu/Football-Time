import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../models/team'

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    @Input() team: Team;

    constructor(private router: Router) { }
    
    public openTeamProfile(): void {
        this.router.navigate(['../team', this.team.teamId]);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

  ngOnInit() {}
}
