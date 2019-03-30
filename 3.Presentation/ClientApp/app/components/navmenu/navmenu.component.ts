import { Component, OnInit } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../models/quiz';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit{
    public quizService: QuizService;
    public quizzes: Quiz[];

    public backToTop() {
        window.scroll({
            top:  0,
            left: 0,
            behavior: 'smooth'
        });
    }
    ngOnInit(): void { }

    constructor(quizService: QuizService, private router: Router) {
        this.quizService = quizService;
    }

    public openQuizProfile(): void {
        this.quizService.getNQuizzes(1)
            .map((response: Array<Quiz>) => {
                this.quizzes = response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
        this.router.navigate(['../quiz', this.quizzes[0].quizId]);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
