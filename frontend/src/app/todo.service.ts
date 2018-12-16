import { Injectable } from '@angular/core';
import { TodoList } from './todo-list';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { httpOptions } from './auth.service';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private baseUrl = 'http://localhost:8080/todos';

    constructor(private http: HttpClient){}

    getTodos(): Promise<TodoList[]>{
        return this.http.get<TodoList[]>(this.baseUrl, httpOptions).toPromise();
    }

    getTodo(id: Number): Promise<TodoList> {
        return this.http.get<TodoList>(`${this.baseUrl}/${id}`, httpOptions).toPromise();
    }

    createTodo(todoList: TodoList): Promise<TodoList>{
        return this.http.post<TodoList>(`${this.baseUrl}`, todoList, httpOptions).toPromise();
    } 

    updateTodo(todoList: TodoList): Promise<TodoList>{
        return this.http.put<TodoList>(`${this.baseUrl}`, todoList, httpOptions).toPromise();
    }

    deleteTodo(id: number): Promise<TodoList>{
        return this.http.post<TodoList>(`${this.baseUrl}`, httpOptions).toPromise();
    }
}