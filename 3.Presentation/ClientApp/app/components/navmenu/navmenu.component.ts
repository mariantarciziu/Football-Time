import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit{
    public backToTop() {
        window.scroll({
            top:  0,
            left: 0,
            behavior: 'smooth'
        });
    }
    ngOnInit(): void {}
}
