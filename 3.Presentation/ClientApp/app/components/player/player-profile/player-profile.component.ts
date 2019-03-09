import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../models/player'
import { PlayersService } from '../../../services/players.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

    private playersService: PlayersService;
    public player: Player;
    private routeSubscription: Subscription;
    public playerId: any;
    public age: number;
    public strengths: string[];
    public weaknesses: string[];
    
    constructor(playersService: PlayersService, route: ActivatedRoute ) {
        this.playersService = playersService;

        this.routeSubscription = route.params
            .subscribe((params: any) => {
                this.playerId = params['id'];
            });
    }
    
    public getPlayerById(id: any): void {
        this.playersService.getPlayerById(id)
            .map((response: Player) => {
                this.player = response;
                this.getAge(this.player.birthDay);
                this.getCharacteristics(this.player.strengths, this.player.weaknesses);
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public getAge(birthday: string) {
        let newDate = new Date(birthday);
        let today = new Date();
        this.age = today.getFullYear() - newDate.getFullYear();

        if (today.getMonth() < newDate.getMonth() || (today.getMonth() == newDate.getMonth() && today.getDate() < newDate.getDate()))
            this.age--;
    }

    public getCharacteristics(strengths: string, weaknesses: string) {
        this.strengths = strengths.split(',');
        this.weaknesses = weaknesses.split(',');
    }

    ngOnInit(): void {
        this.getPlayerById(this.playerId);
        document.title = 'Players - Football Time';
    }
}
