import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AskQuesComponent } from './student/ask-ques/ask-ques.component';
import { ApplyComponent } from './tutor/apply/apply.component';
import { ProfileComponent } from './tutor/profile/profile.component';
import { QuizComponent } from './tutor/quiz/quiz.component';
import { ScheduleComponent } from './tutor/schedule/schedule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'login', component:LoginComponent},
  {path: 'tutor/apply', component:ApplyComponent},
  {path: 'tutor/shedule', component:ScheduleComponent},
  {path: 'tutor/profile', component:ProfileComponent},
  {path: 'tutor/quiz', component:QuizComponent},
  {path: 'student/profile', component:ProfileComponent},/// change name .............
  {path: 'student/ask-ques', component:AskQuesComponent},



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
