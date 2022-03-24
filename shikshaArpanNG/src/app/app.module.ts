import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { ApplyComponent } from './tutor/apply/apply.component';
import { ProfileComponent } from './tutor/profile/profile.component';
import { QuizComponent } from './tutor/quiz/quiz.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './login/login-service.service';
import { ClassesComponent } from './dashboard/classes/classes.component';
import { DoubtComponent } from './dashboard/doubt/doubt.component';
import { ApplySelectedComponent } from './tutor/apply-selected/apply-selected.component';
import { AnswerComponent } from './dashboard/doubt/answer/answer.component';
import { CongoComponent } from './tutor/congo/congo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SidenavComponent,
    StudentComponent,
    ApplyComponent,
    QuizComponent,
    ProfileComponent,
    ClassesComponent,
    DoubtComponent,
    ApplySelectedComponent,
    AnswerComponent,
    CongoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
