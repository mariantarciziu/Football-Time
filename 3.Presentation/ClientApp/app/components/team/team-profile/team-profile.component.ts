import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../../models/team'
import { Player } from '../../../models/player'
import { TeamsService } from '../../../services/teams.service';
import { PlayersService } from '../../../services/players.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {

    private teamsService: TeamsService;
    private playersService: PlayersService;
    public team: Team;
    private routeSubscription: Subscription;
    public teamId: any;
    public players: Player[];

    constructor(teamsService: TeamsService, playersService: PlayersService , route: ActivatedRoute, ) {
        this.teamsService = teamsService;
        this.playersService = playersService;

        this.routeSubscription = route.params
            .subscribe((params: any) => {
                this.teamId = params['id'];
            });
    }

    public getTeamById(id: any): void {
        this.teamsService.getTeamById(id)
            .map((response: Team) => {
                this.team = response;
                this.getAllPlayers(this.team.name);
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public getAllPlayers(team: string): void {
        this.playersService.getAllByTeam(team)
            .map((response: Array<Player>) => {
                this.players = response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    ngOnInit(): void {
        this.getTeamById(this.teamId);
        document.title = 'Football Time - Teams';
    }

}
