import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PlayerComponent } from '../components/player/player.component';
import { Player } from '../models/player';
import { PlayerDTO } from '../models/playerDTO';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class PlayersService {

    public baseUrl:string;
    public http: HttpClient;
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl + '/api/Player/';
        this.http = http;
    }

    public getAllPlayers(): Observable<Array<Player>> {
        return this.http.get(this.baseUrl + 'GetAll')
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public addPlayer(player: PlayerDTO): Observable<any> {
        let adminPass: any = localStorage.getItem('key');
        const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }).append('key', adminPass);
        return this.http.post(this.baseUrl + 'Add', player, { headers: myHeaders })
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public addPlayers(players: PlayerDTO[]): Observable<any> {
        let adminPass: any = localStorage.getItem('key');
        const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json'}).append('key', adminPass);
        return this.http.post(this.baseUrl + 'AddPlayers', players, { headers: myHeaders })
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getAllByTeam(team: string): Observable<Array<Player>> {
        return this.http.get(this.baseUrl + 'GetAllByTeam/' + team)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getPlayerById(id : any): Observable<Player> {
        return this.http.get(this.baseUrl + 'GetById/' + id)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getNPlayers(numberOf : number): Observable<Array<Player>> {
        return this.http.get(this.baseUrl + 'GetOnly/' + numberOf)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }
}

