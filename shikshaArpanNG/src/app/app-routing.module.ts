import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './dashboard/classes/classes.component';
import { AnswerComponent } from './dashboard/doubt/answer/answer.component';
import { DoubtComponent } from './dashboard/doubt/doubt.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { ApplySelectedComponent } from './tutor/apply-selected/apply-selected.component';
import { ApplyComponent } from './tutor/apply/apply.component';
import { CongoComponent } from './tutor/congo/congo.component';
import { ProfileComponent } from './tutor/profile/profile.component';
import { QuizComponent } from './tutor/quiz/quiz.component';
import { ScheduleComponent } from './tutor/schedule/schedule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'login', component:LoginComponent},
  {path: 'tutor/apply', component:ApplyComponent},
  {path: 'tutor/apply/selected', component:ApplySelectedComponent},
  {path: 'tutor/schedule', component:ScheduleComponent},
  {path: 'tutor/profile', component:ProfileComponent},
  {path: 'tutor/quiz', component:QuizComponent},
  {path: 'tutor/congo', component:CongoComponent},

  {path: 'student', component:StudentComponent},
  {path: 'dashboard/classes', component:ClassesComponent},
  {path: 'dashboard/doubt', component:DoubtComponent},
  {path: 'dashboard/doubt/answer', component:AnswerComponent},






  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
