import { Component, Input, OnInit } from '@angular/core';
import {TodoService } from '../todo.service';
import { TodoList } from '../todo-list';
import { NgForm, FormBuilder } from '@angular/forms';
import { User } from '../user';

@Component({selector: 'todo-list', templateUrl: './todo-list.component.html', styleUrls: ['.todo-list.component.css']})

export class TodoListComponent implements OnInit {
    todos: TodoList[] = [];
    isCompleted: boolean = false;
    newTodo: TodoList = new TodoList();
    owner: User;

    constructor(private todoService: TodoService){}



    ngOnInit(): void {
        this.getTodos();
    }

    getTodos(): void {
        this.todoService.getTodos().then(todos => this.todos = todos);
    }


    createTodo(todoForm: NgForm): void {
        this.todoService.createTodo(this.newTodo).then(createTodo => {
            todoForm.reset(),
            this.newTodo = new TodoList(),
            this.newTodo.id += 1;
            //this.newTodo.owner = this.owner;
            this.todos.unshift(createTodo)
        });
    }

    deleteTodo(id: number): void {
        this.todoService.deleteTodo(id).then(() => {
            this.todos = this.todos.filter(todoList => todoList.id != id);
        });
    }

    updateTodo(todoData: TodoList): void {
        console.log(todoData);
        this.todoService.updateTodo(todoData).then(editingTodo => {
            let existingTodo = this.todos.find(todo => todo.id === editingTodo.id);
            Object.assign(existingTodo, editingTodo);
        });
    }

    toggleCompeted(todoData: TodoList): void {
        if(todoData.isCompleted == false){
            todoData.isCompleted = true;
        }
    }
}
