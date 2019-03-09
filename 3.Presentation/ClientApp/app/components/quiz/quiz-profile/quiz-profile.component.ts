import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from '../../../models/quiz'
import { QuizService } from '../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'quiz-profile',
  templateUrl: './quiz-profile.component.html',
  styleUrls: ['./quiz-profile.component.css']
})
export class QuizProfileComponent implements OnInit {

    private quizService: QuizService;
    public quiz: Quiz;
    private routeSubscription: Subscription;
    public quizId: any;
    public start: boolean = false;
    public numberOfCorectAnswers: number = 0;
    public index: number = 0;

    constructor(quizService: QuizService, route: ActivatedRoute, ) {
        this.quizService = quizService;

        this.routeSubscription = route.params
            .subscribe((params: any) => {
                this.quizId = params['id'] ? params['id'] : '';
                if (this.quizId) {
                    this.prepareQuiz();
                    this.getQuizById(this.quizId);
                }
            });
    }

    public startQuiz(): void {
        this.start = true;
    }

    public prepareQuiz(): void {
        this.start = false;
        this.index = 0;
        this.numberOfCorectAnswers = 0;
    }

    public corectAnswer(answer: boolean) {
        if (answer) {
            this.numberOfCorectAnswers++;         
        }
        this.index++;
    }

    public getQuizById(id: any): void {
        this.quizService.getQuizById(id)
            .map((response: Quiz) => {
                this.quiz = response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    ngOnInit(): void {
        this.getQuizById(this.quizId);
        document.title = 'Football Time - Quizzes';
    }
}
