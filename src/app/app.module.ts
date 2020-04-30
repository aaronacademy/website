import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AcademyRouting } from './app-routing.module';
import { AcademyComponent } from './app.component';
import { FireboltVideoComponent } from './firebolt-video/firebolt-video.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AcademyCourses } from './courses/courses.component';
import { Instructor_AM } from './instructors/aaron-ma/aaron-ma.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AcademyComponent,
    FireboltVideoComponent,
    HomepageComponent,
    AcademyCourses,
    Instructor_AM,
    SignupComponent,
    SigninComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AcademyRouting
  ],
  providers: [],
  bootstrap: [ AcademyComponent ]
  // schemas: []
})
export class AppModule { }
