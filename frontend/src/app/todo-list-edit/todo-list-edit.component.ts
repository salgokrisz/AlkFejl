import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { TodoList } from '../todo-list';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoListEditComponent implements OnInit {

  id: number = null;
  todoList: TodoList = new TodoList();
  title = 'New Todo List';

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.todoList = await this.todoService.getTodo(this.id);
      this.title = 'Edit Todo';
    }
  }

  async onFormSave(todolist: TodoList) {
    if (this.id) {
      await this.todoService.updateTodo(todolist)
      this.location.back();
    } else {
      await this.todoService.createTodo(todolist);
      this.router.navigate(['/todolists']);
    }
  }

}