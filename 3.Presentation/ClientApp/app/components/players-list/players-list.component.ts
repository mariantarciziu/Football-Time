import { Component, OnInit,Inject } from '@angular/core';
import { Player } from '../../models/player'
import { PlayerDTO } from '../../models/playerDTO'
import { Team } from '../../models/team'
import { Http } from '@angular/http';
import { PlayerComponent } from '../player/player.component';
import { PlayersService } from '../../services/players.service';
import { TeamsService } from '../../services/teams.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-players',
  templateUrl: './players-list.component.html',
  styleUrls : ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit{

    public playersService: PlayersService;
    public teamsService: TeamsService;
    listFilter: string;
    public players: Player[];
    public teams: Team[];
    public loading: boolean = true;

    constructor(playersService: PlayersService,
                teamsService: TeamsService) {
        this.playersService = playersService;
        this.teamsService = teamsService;
    }

    public getAllPlayers() : void{
      this.playersService.getAllPlayers()
        .map((response: Array<Player>) => {
          this.players = response;
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
            this.getAllByTeam(this.teams[0].name);
            this.listFilter = '';
        })
        .catch((error: any) => {
            return error;
        })
        .subscribe();
}

    public getAllByTeam(team:string): void {
        this.playersService.getAllByTeam(team)
            .map((response: Array<Player>) => {
                this.players = response;
                this.listFilter = '';
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public addPlayer(player: PlayerDTO): void {
        this.playersService.addPlayer(player)
            .map((response: Response) => {
                return response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    ngOnInit() : void {
        this.getAllTeamsForLeague("Premier League");
        this.loading = false;
        document.title = 'Players - Football Time';
    }
}
