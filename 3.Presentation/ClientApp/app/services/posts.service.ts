import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PostComponent } from '../components/post/post.component';
import { Post } from '../models/post';
import { Pagination } from '../models/pagination';
import { PostDTO } from '../models/postDTO';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsService {

    public baseUrl: string;
    public http: HttpClient;
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl + '/api/Post/';
        this.http = http;
    }

    public getAllPosts(): Observable<Array<Post>> {
        return this.http.get(this.baseUrl + 'GetAll')
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getPostById(id : any): Observable<Post> {
        return this.http.get(this.baseUrl + 'GetById/' + id)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getPostsPerPage(pageNumber: number, pageSize: number): Observable<Pagination<Post>> {
        return this.http.get(this.baseUrl + 'GetPostsPerPage/' + pageNumber + '/' + pageSize)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public getLastNPosts(numberOf : number): Observable<Array<Post>> {
        return this.http.get(this.baseUrl + 'GetLastNPosts/' + numberOf)
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }

    public addPosts(posts: PostDTO[]): Observable<any> {
        let adminPass: any = localStorage.getItem('key');
        const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }).append('key', adminPass);
        return this.http.post(this.baseUrl + 'AddPosts', posts, { headers: myHeaders })
            .map((response: any) => {
                return response;
            })
            .catch((e: any) => {
                return Observable.throw(e.json().error || 'Server error');
            });
    }
}
