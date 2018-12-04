import {Role} from './role';

export class User{
    id: number;
    username: string;
    password: String;
    role: Role;

    constructor(username, password){}
}