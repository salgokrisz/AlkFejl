import { Component, OnInit } from '@angular/core';
import { TodoList } from '../todo-list';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-list-list',
    templateUrl: './todo-list-list.component.html',
    styleUrls: ['./todo-list-lsit.component.css']
})

export class TodoListListComponent implements OnInit {
    todos: TodoList[] = [];
    selectedStatus = 'NEW';
    selectedTodo = null;

    constructor( private todoService: TodoService){}

    async ngOnInit(){
        this.todos = await this.todoService.getTodos();
    }
}