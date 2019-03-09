import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../../models/question'

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

    @Input() question: Question;
    @Output() corectAnswer = new EventEmitter<boolean>();

    constructor(private router: Router) { }
    
    public checkAnswer(answer: string, answerDiv : any) {

        if (this.question.correctAnswer.charAt(0) == answer.charAt(0)) {
            
            answerDiv.classList.add('corectAnswer');
            setTimeout(() => {
                answerDiv.classList.remove('corectAnswer');
                this.corectAnswer.emit(true);
            }, 1000);          
        }
        else {
            answerDiv.classList.add('wrongAnswer');
            setTimeout(() => {
                answerDiv.classList.remove('wrongAnswer');
                this.corectAnswer.emit(false);
            }, 1000);
        }
    }

    ngOnInit() {}
}
