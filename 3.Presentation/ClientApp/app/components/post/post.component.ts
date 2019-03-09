import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/post'

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    @Input() post: Post;

    constructor(private router: Router) {}
    
    public openPostProfile(): void {
        this.router.navigate(['../news', this.post.id]);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    ngOnInit() {
        document.title = 'Football Time - News';
    }
}
