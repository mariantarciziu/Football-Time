import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../models/post'
import { Router } from '@angular/router';

@Component({
    selector: 'front-post',
    templateUrl: './front-post.component.html',
    styleUrls: ['./front-post.component.css']
})
export class FrontPostComponent implements OnInit {

    @Input() post: Post;

    constructor(private router: Router) { }
    
    public openPostProfile(): void {
        this.router.navigate(['../news', this.post.id]);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    ngOnInit() {}
}
