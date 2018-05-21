import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { TodoNewComponent } from './todo/todo-new/todo-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',    pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'todoNew', component: TodoNewComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
