import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { ToDo } from '../todo';


@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.css']
})
export class TodosDetailsComponent implements OnInit {

  id: number;
  todo: ToDo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.id = +id;
      this.todo = await this.todoService.getToDo(this.id);
    }
  }

}
