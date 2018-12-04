import {User} from './user';

export class TodoList{
    id: number = 0;
    title = '';
    content = '';
    createdAt: Date;
    updatedAt: Date;
    isCompleted: Boolean = false;
    owner: User;
}