import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../models/player'

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

    @Input() player: Player;

    constructor(private router: Router) { }

    public openPlayerProfile(): void {
        this.router.navigate(['../player', this.player.playerId]);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    ngOnInit() {}
}
