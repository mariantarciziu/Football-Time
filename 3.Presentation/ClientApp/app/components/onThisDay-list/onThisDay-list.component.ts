import { Component, OnInit, Inject } from '@angular/core';
import { OnThisDay } from '../../models/onThisDay'
import { Http } from '@angular/http';
import { OnThisDayComponent } from '../OnThisDay/onThisDay.component';
import { OnThisDayService } from '../../services/onThisDay.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-onThisDay',
    templateUrl: './onThisDay-list.component.html',
    styleUrls: ['./onThisDay-list.component.css']
})
export class OnThisDayListComponent implements OnInit {

    public onThisDayService: OnThisDayService;
    public onThisDays: OnThisDay[];
    public loading: boolean = true;

    constructor(onThisDayService: OnThisDayService) {
        this.onThisDayService = onThisDayService;
    }

    public getAllOnThisDay(): void {
        this.onThisDayService.getAllOnThisDay()
            .map((response: Array<OnThisDay>) => {
                this.onThisDays = response;
                this.loading = false;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    ngOnInit(): void {
        document.title = 'On This Day - Football Time';
        this.getAllOnThisDay();
    }
}
