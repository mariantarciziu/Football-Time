import { Component, OnInit, Inject } from '@angular/core';
import { Quiz } from '../../models/quiz'
import { Http } from '@angular/http';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizService } from '../../services/quiz.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor() {
    }
}
