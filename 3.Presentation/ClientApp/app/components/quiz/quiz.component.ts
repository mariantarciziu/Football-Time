import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../../models/quiz'

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    @Input() quiz: Quiz;

    constructor(private router: Router) { }
    
    public openQuizProfile(): void {
        this.router.navigate(['../quiz', this.quiz.quizId]);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    ngOnInit() {
        document.title = 'Football Time - Quizzes';
    }
}
