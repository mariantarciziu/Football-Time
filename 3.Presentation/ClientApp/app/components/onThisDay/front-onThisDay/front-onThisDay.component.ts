import { Component, OnInit, Input} from '@angular/core';
import { OnThisDay } from '../../../models/onThisDay'
import { Router } from '@angular/router';
@Component({
  selector: 'front-onThisDay',
  templateUrl: './front-onThisDay.component.html',
  styleUrls: ['./front-onThisDay.component.css']
})
export class FrontOnThisDayComponent implements OnInit {

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
  }

}
