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
import { AviablityComponent } from './tutor/aviablity/aviablity.component';
import { AskQuesComponent } from './student/ask-ques/ask-ques.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './login/login-service.service';

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
    AviablityComponent,
    ProfileComponent,
    AskQuesComponent,
  
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
