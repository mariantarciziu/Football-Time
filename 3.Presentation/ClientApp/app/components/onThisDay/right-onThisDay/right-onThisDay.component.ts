import { Component, OnInit, Input} from '@angular/core';
import { OnThisDay } from '../../../models/onThisDay'
import { Router } from '@angular/router';
@Component({
  selector: 'right-onThisDay',
  templateUrl: './right-onThisDay.component.html',
  styleUrls: ['./right-onThisDay.component.css']
})
export class RightOnThisDayComponent implements OnInit {

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
    
    ngOnInit() {}
}
