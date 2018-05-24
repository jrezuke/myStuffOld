import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControlName } from '@angular/forms';
import { Todo } from '../todo-model';
@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {
  todo = new Todo();
  todoForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      id: '',
      title: '',
      started: '',
      completed: '',
      comment: '',
      archived: ''

    });
  }

  onSubmit() {
    console.log('onSubmit')
  }

}
