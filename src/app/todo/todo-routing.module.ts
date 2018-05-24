import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoNewComponent } from './todo-new/todo-new.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent,
    children:[
      {path: 'list', component: TodoListComponent,
      children[
        {path: 'new', component: TodoNewComponent}
      ]},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
