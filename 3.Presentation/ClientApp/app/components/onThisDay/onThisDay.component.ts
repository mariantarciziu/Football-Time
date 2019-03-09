import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OnThisDay } from '../../models/onThisDay'
@Component({
  selector: 'onThisDay',
  templateUrl: './onThisDay.component.html',
  styleUrls: ['./onThisDay.component.css']
})
export class OnThisDayComponent implements OnInit {

    constructor(private router: Router) { }
    @Input() onThisDay: OnThisDay;

    public openOnThisDayProfile(): void {
        this.router.navigate(['../onThisDay', this.onThisDay.id]);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    ngOnInit() {
        document.title = 'On This Day - Football Time';
    }

}
