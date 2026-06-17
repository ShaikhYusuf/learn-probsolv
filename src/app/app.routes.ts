import { Routes } from '@angular/router';
import { Lesson1Component } from './features/lessons/lesson1/lesson1.component';
import { Lesson2Component } from './features/lessons/lesson2/lesson2.component';
import { Lesson3Component } from './features/lessons/lesson3/lesson3.component';
import { Lesson4Component } from './features/lessons/lesson4/lesson4.component';
import { Lesson5Component } from './features/lessons/lesson5/lesson5.component';
import { Lesson6Component } from './features/lessons/lesson6/lesson6.component';
import { Lesson7Component } from './features/lessons/lesson7/lesson7.component';
import { Lesson8Component } from './features/lessons/lesson8/lesson8.component';
import { Lesson9Component } from './features/lessons/lesson9/lesson9.component';
import { Lesson10Component } from './features/lessons/lesson10/lesson10.component';
import { Lesson11Component } from './features/lessons/lesson11/lesson11.component';
import { Lesson12Component } from './features/lessons/lesson12/lesson12.component';
import { Lesson13Component } from './features/lessons/lesson13/lesson13.component';
import { Lesson14Component } from './features/lessons/lesson14/lesson14.component';
import { Lesson15Component } from './features/lessons/lesson15/lesson15.component';
import { Lesson16Component } from './features/lessons/lesson16/lesson16.component';
import { Lesson17Component } from './features/lessons/lesson17/lesson17.component';
import { Lesson18Component } from './features/lessons/lesson18/lesson18.component';
import { Lesson19Component } from './features/lessons/lesson19/lesson19.component';
import { Lesson20Component } from './features/lessons/lesson20/lesson20.component';
import { QuizComponent } from './features/quiz/quiz.component';
import { RegisterComponent } from './features/register/register.component';
import { AuthGuard } from './features/auth/auth.guard';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'les1', pathMatch: 'full' },
            { path: 'les1', component: Lesson1Component },
            { path: 'les2', component: Lesson2Component },
            { path: 'les3', component: Lesson3Component },
            { path: 'les4', component: Lesson4Component },
            { path: 'les5', component: Lesson5Component },
            { path: 'les6', component: Lesson6Component },
            { path: 'les7', component: Lesson7Component },
            { path: 'les8', component: Lesson8Component },
            { path: 'les9', component: Lesson9Component },
            { path: 'les10', component: Lesson10Component },
            { path: 'les11', component: Lesson11Component },
            { path: 'les12', component: Lesson12Component },
            { path: 'les13', component: Lesson13Component },
            { path: 'les14', component: Lesson14Component },
            { path: 'les15', component: Lesson15Component },
            { path: 'les16', component: Lesson16Component },
            { path: 'les17', component: Lesson17Component },
            { path: 'les18', component: Lesson18Component },
            { path: 'les19', component: Lesson19Component },
            { path: 'les20', component: Lesson20Component },
            { path: 'quiz/:lessonId', component: QuizComponent }
        ]
    }
];
