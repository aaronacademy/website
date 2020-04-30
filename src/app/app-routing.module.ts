import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademyComponent } from './app.component';
import { AcademyCourses } from './courses/courses.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/'
  },
  {
    path: '/',
    component: AcademyComponent
  },
  {
    path: 'courses',
    component: AcademyCourses
  },
  // {
  //  path: '**',
  //  component: Pagenotfound
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AcademyRouting { }
