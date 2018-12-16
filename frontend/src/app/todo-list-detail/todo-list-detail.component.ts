import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { TodoList } from '../todo-list';
import { AuthService } from '../auth.service';
import { __await } from 'tslib';

@Component({
    selector: 'todo-list-detail',
    templateUrl: 'todo-list-detail.component.html',
    styleUrls: ['todo-list-detail.component.css']
})

export class TodoListDetailComponent implements OnInit{

    id: number;
    todoList: TodoList;

    constructor(private route: ActivatedRoute, private todoService: TodoService){}

    async ngOnInit(){
        const id = this.route.snapshot.paramMap.get('id');
        if (id){
            this.id = +id;
            this.todoList = await this.todoService.getTodo(this.id);
        }
    }
}