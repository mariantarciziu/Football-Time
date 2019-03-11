import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './components/admin/admin.component';
import { AppComponent } from './components/app/app.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { FrontOnThisDayComponent } from './components/onThisDay/front-onThisDay/front-onThisDay.component';
import { FrontPostComponent } from './components/post/front-post/front-post.component';
import { FrontQuizComponent } from './components/quiz/front-quiz/front-quiz.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { OnThisDayComponent } from './components/onThisDay/onThisDay.component';
import { OnThisDayListComponent } from './components/onThisDay-list/onThisDay-list.component';
import { OnThisDayProfileComponent } from './components/onThisDay/onThisDay-profile/onThisDay-profile.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PlayerFilterPipe } from './pipes/player-filter.pipe';
import { PlayerComponent } from './components/player/player.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayerProfileComponent } from './components/player/player-profile/player-profile.component'
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostProfileComponent } from './components/post/post-profile/post-profile.component'
import { QuestionComponent } from './components/quiz/question/question.component'
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizzesListComponent } from './components/quizzes-list/quizzes-list.component';
import { MobileQuizzesListComponent } from './components/mobilequizzes-list/mobilequizzes-list.component';
import { QuizProfileComponent } from './components/quiz/quiz-profile/quiz-profile.component';
import { RemoveTagsFilterPipe } from './pipes/remove-tags-filter.pipe';
import { RightOnThisDayComponent } from './components/onThisDay/right-onThisDay/right-onThisDay.component';
import { RightPostComponent } from './components/post/right-post/right-post.component';
import { RightQuizComponent } from './components/quiz/right-quiz/right-quiz.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { TeamFilterPipe } from './pipes/team-filter.pipe';
import { TeamComponent } from './components/team/team.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamProfileComponent } from './components/team/team-profile/team-profile.component'

import { OnThisDayService } from './services/onThisDay.service';
import { PlayersService } from './services/players.service';
import { PostsService } from './services/posts.service';
import { QuizService } from './services/quiz.service';
import { TeamsService } from './services/teams.service';

@NgModule({
    declarations: [
        AdminComponent,
        AppComponent,
        FirstPageComponent,
        FrontOnThisDayComponent,
        FrontPostComponent,
        FrontQuizComponent,
        HomeComponent,
        LoadingComponent,
        NavMenuComponent,
        MobileQuizzesListComponent,
        OnThisDayComponent,
        OnThisDayListComponent,
        OnThisDayProfileComponent,
        PlayerFilterPipe,
        PlayerComponent,
        PlayersListComponent,
        PlayerProfileComponent,
        PostComponent,
        PostsListComponent,
        PostProfileComponent,
        QuestionComponent,
        QuizComponent,
        QuizzesListComponent,
        QuizProfileComponent,
        RemoveTagsFilterPipe,
        RightOnThisDayComponent,
        RightPostComponent,
        RightQuizComponent,
        RightSideBarComponent,
        TeamFilterPipe,
        TeamComponent,
        TeamsListComponent,
        TeamProfileComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        PaginationModule.forRoot(),
        HttpClientModule,
        RouterModule.forRoot([

            {
                path: '', component: HomeComponent,
                children: [
                    { path: 'players', component: PlayersListComponent },
                    { path: 'teams', component: TeamsListComponent },
                    { path: 'onThisDay', component: OnThisDayListComponent },
                    { path: 'news', component: PostsListComponent },
                    { path: 'quizzes', component: QuizzesListComponent },
                    { path: 'team/:id', component: TeamProfileComponent },
                    { path: 'player/:id', component: PlayerProfileComponent },
                    
                    { path: 'news/:id', component: PostProfileComponent },
                    { path: 'onThisDay/:id', component: OnThisDayProfileComponent },
                    { path: '', component: FirstPageComponent }
                ]
            },
            { path: 'quiz/:id', component: QuizProfileComponent },
            { path: 'admin', component: AdminComponent },
            { path: 'mobilequizzes', component: MobileQuizzesListComponent },

            { path: '**', redirectTo: '' }
        ])
    ],
    providers: [
        OnThisDayService,
        PlayersService,
        PostsService,
        QuizService,
        TeamsService
    ]
})
export class AppModuleShared {
}
