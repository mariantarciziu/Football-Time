import { Component, OnInit,Inject } from '@angular/core';
import { Post } from '../../models/post'
import { Pagination } from '../../models/pagination'
import { Http } from '@angular/http';
import { PostComponent } from '../post/post.component';
import { PostsService } from '../../services/posts.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-posts',
  templateUrl: './posts-list.component.html',
  styleUrls : ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{

    public postsService: PostsService;
    public posts: Post[];
    public totalItems: number;
    public currentPage: number;
    public itemsPerPage: number;
    public maxItemsPerPage: number;
    public loading: boolean = true;

    constructor(postsService: PostsService) {
        this.postsService = postsService;
    }

    public getAllPosts() : void{
        this.postsService.getAllPosts()
        .map((response: Array<Post>) => {
          this.posts = response;
        })
        .catch((error: any) => {
          return error;
        })
        .subscribe();
    }

    public getLastNPosts(numberOf: number): void {
        this.postsService.getLastNPosts(numberOf)
            .map((response: Array<Post>) => {
                this.posts = response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public getPostsPerPage(pageNumber: number, pageSize: number): void {
        this.postsService.getPostsPerPage(pageNumber, pageSize)
            .map((response: Pagination<Post>) => {
                this.posts = response.items;
                this.currentPage = response.currentPage;
                this.totalItems = response.totalNumber;
                this.itemsPerPage = response.pageSize;
                this.loading = false;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }
    
    public pageChanged(event: any): void {
        this.postsService.getPostsPerPage(event.page, event.itemsPerPage)
            .map((response: Pagination<Post>) => {
                this.posts = response.items;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    ngOnInit(): void {
        this.getPostsPerPage(1, 10);
        document.title = 'Football Time - News';
    }
}
