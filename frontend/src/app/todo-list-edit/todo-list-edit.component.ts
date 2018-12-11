import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../todolist.service';
import { ToDoList } from '../todolist';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoListEditComponent implements OnInit {

  id: number = null;
  todolist: ToDoList = new ToDoList();
  title = 'New Todo List';

  constructor(
    private route: ActivatedRoute,
    private TodoService: TodoService,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.todolist = await this.TodoService.getTodos(this.id);
      this.title = 'Edit Todo';
    }
  }

  async onFormSave(todolist: ToDoList) {
    if (this.id) {
      await this.TodoService.updateTodo(this.id, todolist)
      this.location.back();
    } else {
      await this.TodoService.createTodo(todolist);
      this.router.navigate(['/todolists']);
    }
  }

}
