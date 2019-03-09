import { Component, OnInit, Inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { Player } from '../../models/player'
import { PlayerDTO } from '../../models/playerDTO'
import { TeamDTO } from '../../models/teamDTO'
import { PostDTO } from '../../models/postDTO'
import { QuizDTO } from '../../models/quizDTO'
import { OnThisDayDTO } from '../../models/onThisDayDTO'
import { Http } from '@angular/http';
import { PlayersService } from '../../services/players.service';
import { TeamsService } from '../../services/teams.service';
import { PostsService } from '../../services/posts.service';
import { OnThisDayService } from '../../services/onThisDay.service';
import { QuizService } from '../../services/quiz.service';
import { QuizComponent } from '../quiz/quiz.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    public playersService: PlayersService;
    public teamsService: TeamsService;
    public postsService: PostsService;
    public onThisDayService: OnThisDayService;
    public quizService: QuizService;

    public players: PlayerDTO[];
    public teams: TeamDTO[];
    public posts: PostDTO[];
    public onThisDays: OnThisDayDTO[];
    public quizzes: QuizDTO[];

    public showPlayerForm: boolean = false;
    public showTeamForm: boolean = false;
    public showPostForm: boolean = false;
    public showOnThisDayForm: boolean = false;
    public showQuizForm: boolean = false;



    constructor(playersService: PlayersService,
                teamsService: TeamsService,
                quizService: QuizService,
                onThisDayService: OnThisDayService,
                postsService: PostsService) {
        this.playersService = playersService;
        this.teamsService = teamsService;
        this.postsService = postsService;
        this.quizService = quizService;
        this.onThisDayService = onThisDayService;

    }

    public addPlayers(players: any): void {
        this.showPlayerForm = false;
        this.playersService.addPlayers(players)
            .map((response: Response) => {
                return response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public addTeams(teams: any): void {
        this.showTeamForm = false;
        this.teamsService.addTeams(teams)
            .map((response: Response) => {
                return response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public addPosts(posts: any): void {
        this.showPostForm = false;
        this.postsService.addPosts(posts)
            .map((response: Response) => {
                return response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public addQuizzes(quizzes: any): void {
        this.showQuizForm = false;
        this.quizService.addQuizzes(quizzes)
            .map((response: Response) => {
                return response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public addOnThisDays(onThisDays: any): void {
        this.showOnThisDayForm = false;
        this.onThisDayService.addOnThisDays(onThisDays)
            .map((response: Response) => {
                return response;
            })
            .catch((error: any) => {
                return error;
            })
            .subscribe();
    }

    public removeForms() {
        this.showPlayerForm = false;
        this.showTeamForm = false;
        this.showPostForm = false;
        this.showQuizForm = false;
        this.showOnThisDayForm = false;
    }

    ngOnInit(): void {


    }
}
