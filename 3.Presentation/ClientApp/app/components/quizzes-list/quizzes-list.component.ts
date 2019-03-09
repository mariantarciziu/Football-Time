import { Component, OnInit,Inject } from '@angular/core';
import { Quiz } from '../../models/quiz'
import { Pagination } from '../../models/pagination'
import { Http } from '@angular/http';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizService } from '../../services/quiz.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-quiz',
  templateUrl: './quizzes-list.component.html',
  styleUrls : ['./quizzes-list.component.css']
})
export class QuizzesListComponent implements OnInit{

    public quizService: QuizService;
    public quizzes: Quiz[];
    public totalItems: number;
    public currentPage: number;
    public itemsPerPage: number;
    public maxItemsPerPage: number;
    public loading: boolean = true;

    constructor(quizService: QuizService) {
        this.quizService = quizService;
    }
  
    public getAllQuizzes(): void{
        this.quizService.getAllQuizzes()
    .map((response: Array<Quiz>) => {
        this.quizzes = response;
    })
    .catch((error: any) => {
      return error;
    })
    .subscribe();
    }

    public getQuizzesPerPage(pageNumber: number, pageSize: number): void {
        this.quizService.getQuizzesPerPage(pageNumber, pageSize)
            .map((response: Pagination<Quiz>) => {
                this.quizzes = response.items;
                this.currentPage = response.currentPage;
                this.totalItems = response.totalNumber;
                this.itemsPerPage = response.pageSize;
                this.loading = false;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    
    public pageChanged(event: any): void {
        this.quizService.getQuizzesPerPage(event.page, event.itemsPerPage)
            .map((response: Pagination<Quiz>) => {
                this.quizzes = response.items;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    ngOnInit(): void {
        this.getQuizzesPerPage(1, 10);
        document.title = 'Football Time - Quizzes';
    }
}
