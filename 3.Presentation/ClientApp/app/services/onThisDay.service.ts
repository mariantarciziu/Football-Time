import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OnThisDayComponent } from '../components/onThisDay/onThisDay.component';
import { OnThisDay } from '../models/onThisDay';
import { OnThisDayDTO } from '../models/onThisDayDTO';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class OnThisDayService {

    public baseUrl: string;
    public http: HttpClient;
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl + '/api/OnThisDay/';
        this.http = http;
    }

    public getAllOnThisDay(): Observable<Array<OnThisDay>> {
        return this.http.get(this.baseUrl + 'GetAllForToday')
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public addOnThisDays(onThisDays: OnThisDayDTO[]): Observable<any> {
        let adminPass: any = localStorage.getItem('key');
        const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }).append('key', adminPass);
        return this.http.post(this.baseUrl + 'AddOnThisDays', onThisDays, { headers: myHeaders })
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getTodayEvent(): Observable<OnThisDay> {
        return this.http.get(this.baseUrl + 'GetToday')
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getOnThisDayById(id : any): Observable<OnThisDay> {
        return this.http.get(this.baseUrl + 'GetById/' + id)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }
}