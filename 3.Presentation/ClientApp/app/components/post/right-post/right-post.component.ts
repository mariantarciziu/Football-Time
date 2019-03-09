import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../models/post'
import { Router } from '@angular/router';

@Component({
    selector: 'right-post',
    templateUrl: './right-post.component.html',
    styleUrls: ['./right-post.component.css']
})
export class RightPostComponent implements OnInit {

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
