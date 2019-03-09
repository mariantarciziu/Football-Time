import { Component, OnInit, Input } from '@angular/core';
import { OnThisDay } from '../../../models/onThisDay'
import { OnThisDayService } from '../../../services/onThisDay.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'onThisDay-profile',
  templateUrl: './onThisDay-profile.component.html',
  styleUrls: ['./onThisDay-profile.component.css']
})
export class OnThisDayProfileComponent implements OnInit {

    private onThisDayService: OnThisDayService;
    public onThisDay: OnThisDay;
    private routeSubscription: Subscription;
    public onThisDayId: any;

    constructor(onThisDayService: OnThisDayService, route: ActivatedRoute, ) {
        this.onThisDayService = onThisDayService;

        this.routeSubscription = route.params
            .subscribe((params: any) => {
                this.onThisDayId = params['id'];
            });
    }

    public getOnThisDayById(id: any): void {
        this.onThisDayService.getOnThisDayById(id)
            .map((response: OnThisDay) => {
                this.onThisDay = response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    ngOnInit(): void {
        this.getOnThisDayById(this.onThisDayId);
        document.title = 'On This Day - Football Time';
    }

}
