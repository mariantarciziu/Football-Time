import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TeamComponent } from '../components/team/team.component';
import { Team } from '../models/team';
import { TeamDTO } from '../models/teamDTO';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class TeamsService {

    public baseUrl: string;
    public http: HttpClient;
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl + '/api/Team/';
        this.http = http;
    }

    public getAllTeams(): Observable<Array<Team>> {
        return this.http.get(this.baseUrl + 'GetAll')
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getAllTeamsForLeague(league:string): Observable<Array<Team>> {
        return this.http.get(this.baseUrl + 'GetAllByLeague/' + league)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getTeamById(id : any): Observable<Team> {
        return this.http.get(this.baseUrl + 'GetById/' + id)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public addTeams(teams: TeamDTO[]): Observable<any> {
        let adminPass: any = localStorage.getItem('key');
        const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }).append('key', adminPass);
        return this.http.post(this.baseUrl + 'AddTeams', teams, { headers: myHeaders })
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }
}

