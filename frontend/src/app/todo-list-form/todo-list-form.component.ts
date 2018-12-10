import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { TodoList } from '../todo-list';
import { AuthService } from '../auth.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
    selector: 'todo-list-form',
    templateUrl: 'todo-list-from.component.html',
    styleUrls: ['todo-list-form.component.css']
})

export class TodoListForm implements OnInit, OnChanges {

    status: String[] = ['NEW','INPROGRESS' , 'DONE'];
    form = this.fb.group({
        title: ['', [Validators.required]],
        //createdAT: ['', Validators.required],
        owner: ['', Validators.required],
        content: [''],
        status: ['NEW', Validators.required]
    });
    
    @Input() todoList: TodoList;
    @Input() showStatus = false;
    @Output() save = new EventEmitter<TodoList>();

    get title(){
        return this.form.get('title');
    }
    get createdAt(){
        return this.form.get('createdAt');
    }
    get owner(){
        return this.form.get('owner');
    }
    get content(){
        return this.form.get('content');
    }

    constructor(private fb: FormBuilder){

    }

    ngOnInit(){}
    ngOnChanges(){
        this.form.patchValue(this.todoList);
    }
    onSubmit(){
        this.save.emit(Object.assign(new TodoList(), this.form.value));
    }

}