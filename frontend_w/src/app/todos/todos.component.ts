import { Component, OnInit } from '@angular/core';
import { ToDo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ToDo[] = []
  newTodos = [];
  inProgressTodos = [];
  testingTodos = [];
  doneTodos = [];
  selectedTodo = null;

  constructor(
    private todoService: TodoService
  ) { }

  async ngOnInit() {
    this.todos = await this.todoService.getToDos();
    this.categorizeTodos();
  }
  categorizeTodos(): void {
    this.newTodos = this.todos.filter(todo => todo.progress === 'NEW');
    this.inProgressTodos = this.todos.filter(todo => todo.progress === 'IN_PROGRESS');
    this.testingTodos = this.todos.filter(todo => todo.progress === 'TESTING');
    this.doneTodos = this.todos.filter(todo => todo.progress === 'DONE');
  }
}