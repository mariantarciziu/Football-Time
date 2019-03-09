import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../models/post'
import { PostsService } from '../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'post-profile',
  templateUrl: './post-profile.component.html',
  styleUrls: ['./post-profile.component.css']
})
export class PostProfileComponent implements OnInit {

    private postsService: PostsService;
    public post: Post;
    private routeSubscription: Subscription;
    public postId: any;
    subscription: Subscription;

    constructor(postsService: PostsService,private route: ActivatedRoute ) {
        this.postsService = postsService;

        this.routeSubscription = route.params
            .subscribe((params: any) => {
                this.postId = params['id'] ? params['id'] : '';
                if (this.postId) {
                    this.getPostById(this.postId);
                }
            });
    }

    public getPostById(id: any): void {
        this.postsService.getPostById(id)
            .map((response: Post) => {
                this.post = response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    ngOnInit(): void {
        this.getPostById(this.postId);
        document.title = 'Football Time - News';
    }
}