import { NgModule } from "@angular/core";
import { Router, Routes, RouterModule } from '@angular/router';
import { TodoListListComponent } from '../todo-list-list/todo-list-list.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { LoginComponent } from '../login/login.component';
import { TodoListEditComponent } from '../todo-list-edit/todo-list-edit.component';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';
import { Role } from '../role';
import { TodoListDetailComponent } from '../todo-list-detail/todo-list-detail.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'todos',
        component: TodoListListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'todos/add',
        component: TodoListEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'todos/:id',
        component: TodoListDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'todos/:id/edit',
        component: TodoListEditComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [Role.ROLE_GUEST, Role.ROLE_USER, Role.ROLE_ADMIN]
        }
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class RoutingModule{}
