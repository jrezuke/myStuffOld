import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  
  constructor(private fb: FormBuilder, private todoService: TodoService) { 
    this.createForm();
  }

  ngOnInit() {
    this.todoService.getAllTodos().subscribe((data:any)=>{
      console.log('data', data);
      this.todoForm.setValue({
        id: data[0].id,
        title: data[0].title,
        started: data[0].started,
        completed: data[0].completed,
        comment: data[0].comment

      })
    })
  }

  createForm(): any {
    this.todoForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      started: ['', Validators.required],
      completed: ['', Validators.required],
      comment: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log("onSubmit", this.todoForm);
  }

}
