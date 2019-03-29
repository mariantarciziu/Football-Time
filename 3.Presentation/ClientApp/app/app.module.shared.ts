import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { QuestionComponent } from './components/quiz/question/question.component'
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizzesListComponent } from './components/quizzes-list/quizzes-list.component';
import { MobileQuizzesListComponent } from './components/mobilequizzes-list/mobilequizzes-list.component';
import { QuizProfileComponent } from './components/quiz/quiz-profile/quiz-profile.component';
import { QuizService } from './services/quiz.service';

@NgModule({
    declarations: [
        AppComponent,
        LoadingComponent,
        MobileQuizzesListComponent,
        QuestionComponent,
        QuizComponent,
        QuizzesListComponent,
        QuizProfileComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        PaginationModule.forRoot(),
        HttpClientModule,
        RouterModule.forRoot([

            {
                path: '', component: MobileQuizzesListComponent,
                children: [
                    { path: 'quizzes', component: QuizzesListComponent },
                ]
            },
            { path: 'quiz/:id', component: QuizProfileComponent },
            { path: 'mobilequizzes', component: MobileQuizzesListComponent },

            { path: '**', redirectTo: '' }
        ])
    ],
    providers: [
        QuizService,
    ]
})
export class AppModuleShared {
}
