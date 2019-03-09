import { Component, OnInit, Inject } from '@angular/core';
import { OnThisDay } from '../../models/onThisDay'
import { Player } from '../../models/player'
import { Quiz } from '../../models/quiz'
import { Post } from '../../models/post'
import { Http } from '@angular/http';
import { OnThisDayComponent } from '../OnThisDay/onThisDay.component';
import { OnThisDayService } from '../../services/onThisDay.service';
import { RightQuizComponent } from '../quiz/right-quiz/right-quiz.component';
import { QuizService } from '../../services/quiz.service';
import { RightPostComponent } from '../post/right-post/right-post.component';
import { PostsService } from '../../services/posts.service';
import { PlayerComponent } from '../player/player.component';
import { PlayersService } from '../../services/players.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css']
})
export class RightSideBarComponent implements OnInit {


    public quizService: QuizService;
    public postsService: PostsService;
    public playersService: PlayersService;
    public onThisDayService: OnThisDayService;
    public onThisDays: OnThisDay[];
    public quizzes: Quiz[];
    public todayEvent: OnThisDay;
    public posts: Post[];

    constructor(quizService: QuizService,
                postsService: PostsService,
                playersService: PlayersService,
                onThisDayService: OnThisDayService) {
        this.quizService = quizService;
        this.postsService = postsService;
        this.playersService = playersService;
        this.onThisDayService = onThisDayService
    }

    public getAllOnThisDay(): void {
        this.onThisDayService.getAllOnThisDay()
            .map((response: Array<OnThisDay>) => {
                this.onThisDays = response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public getTodayEvent(): void {
        this.onThisDayService.getTodayEvent()
            .map((response: OnThisDay) => {
                this.todayEvent = response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public getNQuizzes(numberOf: number): void{
        this.quizService.getNQuizzes(numberOf)
    .map((response: Array<Quiz>) => {
        this.quizzes = response;
    })
    .catch((error: any) => {
      return error;
    })
    .subscribe();
    }

    public getLastNPosts(numberOf: number): void{
        this.postsService.getLastNPosts(numberOf)
    .map((response: Array<Post>) => {
        this.posts = response;
    })
    .catch((error: any) => {
      return error;
    })
    .subscribe();
    }

    ngOnInit(): void {
        this.getNQuizzes(3);
        this.getTodayEvent();
        this.getLastNPosts(3);
    }
}
