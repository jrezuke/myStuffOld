import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) { }
  todos: Todo[];

  ngOnInit() {
    this.todoService.getAllTodos().subscribe((data:any) => {
      console.log('data', data);
      this.todos = data;
    });
  }

}
