import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import {map} from "rxjs/operators";
import { Todo } from './todo-model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getAllTodos():Observable<Todo[]>{
    return this.http.get('api/todos')
      .pipe(
        map(res => res['data'])
        );
  }
}
