import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { QuizComponent } from '../components/quiz/quiz.component';
import { Quiz } from '../models/quiz';
import { QuizDTO } from '../models/quizDTO';
import { Pagination } from '../models/pagination';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class QuizService {

    public baseUrl: string;
    public http: HttpClient;
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl + '/api/Quiz/';
        this.http = http;
    }

    public getAllQuizzes(): Observable<Array<Quiz>> {
        return this.http.get(this.baseUrl + 'GetAll')
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getQuizById(id: number): Observable<Quiz> {
        return this.http.get(this.baseUrl + 'GetById/' + id)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getQuizzesPerPage(pageNumber: number, pageSize: number): Observable<Pagination<Quiz>> {
        return this.http.get(this.baseUrl + 'GetQuizzesPerPage/' + pageNumber + '/' + pageSize)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getNQuizzes(numberOf : number): Observable<Array<Quiz>> {
        return this.http.get(this.baseUrl + 'GetOnly/' + numberOf)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public addQuizzes(quizzes: QuizDTO[]): Observable<any> {
        let adminPass: any = localStorage.getItem('key');
        const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }).append('key', adminPass);
        return this.http.post(this.baseUrl + 'AddQuizzes', quizzes, { headers: myHeaders })
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }
}