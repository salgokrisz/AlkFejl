import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './auth.service';

import { ToDo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl = 'http://localhost:8080/todo'

  constructor(
    private http: HttpClient
  ) { }

  getToDos(): Promise<ToDo[]> {
    return this.http.get<ToDo[]>(
      this.todoUrl,
      httpOptions
    ).toPromise();
  }

  getToDo(id: number): Promise<ToDo> {
    return this.http.get<ToDo>(
      `${this.todoUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  modifyToDo(id: number, ToDo: ToDo): Promise<ToDo> {
    return this.http.put<ToDo>(
      `${this.todoUrl}/${id}`,
      ToDo,
      httpOptions
    ).toPromise();
  }

  addToDo(ToDo: ToDo): Promise<ToDo> {
    return this.http.post<ToDo>(
      this.todoUrl,
      ToDo,
      httpOptions
    ).toPromise();
  }
}
