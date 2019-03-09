import { Component, OnInit, Inject } from '@angular/core';
import { OnThisDay } from '../../models/onThisDay'
import { Player } from '../../models/player'
import { Quiz } from '../../models/quiz'
import { Post } from '../../models/post'
import { Http } from '@angular/http';
import { OnThisDayComponent } from '../onThisDay/onThisDay.component';
import { OnThisDayService } from '../../services/onThisDay.service';
import { FrontQuizComponent } from '../quiz/front-quiz/front-quiz.component';
import { QuizService } from '../../services/quiz.service';
import { FrontPostComponent } from '../post/front-post/front-post.component';
import { PostsService } from '../../services/posts.service';
import { PlayerComponent } from '../player/player.component';
import { PlayersService } from '../../services/players.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit{
    
    public quizService: QuizService;
    public postsService: PostsService;
    public playersService: PlayersService;
    public onThisDayService: OnThisDayService;
    public loading: boolean = true;

    constructor(quizService: QuizService,
                postsService: PostsService,
                playersService: PlayersService,
                onThisDayService: OnThisDayService) {
        this.quizService = quizService;
        this.postsService = postsService;
        this.playersService = playersService;
        this.onThisDayService = onThisDayService
    }

    public onThisDays: OnThisDay[];
    public quizzes: Quiz[];
    public randomQuiz : Quiz;
    public lastPost:Post;
    public todayEvent: OnThisDay;
    public posts: Post[];
    public players: Player[];

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

    public getRandomQuiz(numberOf: number): void{
        this.quizService.getNQuizzes(numberOf)
    .map((response: Array<Quiz>) => {
        this.randomQuiz = response[0];
        this.loading = false;
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
        this.lastPost = response[0];
    })
    .catch((error: any) => {
      return error;
    })
    .subscribe();
    }

    public getNPlayers(numberOf: number): void{
        this.playersService.getNPlayers(numberOf)
    .map((response: Array<Player>) => {
        this.players = response;
    })
    .catch((error: any) => {
      return error;
    })
    .subscribe();
    }

    ngOnInit(): void {
        this.getNQuizzes(6);
        this.getTodayEvent();
        this.getLastNPosts(6);
        this.getNPlayers(6);
        this.getRandomQuiz(1);
    }

}
