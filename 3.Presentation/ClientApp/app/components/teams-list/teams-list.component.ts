import { Component, OnInit, Inject } from '@angular/core';
import { Team } from '../../models/team'
import { Http } from '@angular/http';
import { TeamComponent } from '../team/team.component';
import { TeamsService } from '../../services/teams.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-teams',
  templateUrl: './teams-list.component.html',
  styleUrls : ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit{

    public teamsService: TeamsService;
    listFilter: string;
    public teams: Team[];
    public loading: boolean = true;

    constructor(teamsService: TeamsService) {
        this.teamsService = teamsService;
    }

    public getAllTeams(): void {
        this.teamsService.getAllTeams()
            .map((response: Array<Team>) => {
                this.teams = response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public getAllTeamsForLeague(league: string): void {
        this.teamsService.getAllTeamsForLeague(league)
            .map((response: Array<Team>) => {
                this.teams = response;
                this.listFilter = '';
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    ngOnInit(): void {
        this.getAllTeamsForLeague("Premier League");
        this.loading = false;
        document.title = 'Football Time - Teams';
    }
}
