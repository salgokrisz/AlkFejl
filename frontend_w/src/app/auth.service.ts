import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './user';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  user: User;
  redirectUrl: string;

  private usersUrl = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient
  ) {
    console.log(window.localStorage.getItem('toke'));
    const headers = { 'Content-Type': 'application/json' };
    if (window.localStorage.getItem('token')) {
      headers['Authorization'] = window.localStorage.getItem('token');
    }
    httpOptions.headers = new HttpHeaders(headers);
  }

  async login(username: string, password: string): Promise<boolean> {
    const token = btoa(`${username}:${password}`);
    window.localStorage.setItem('token', token);
    httpOptions.headers =
      httpOptions.headers.set(
        'Authorization',
        `Basic ${token}`
      );
    try {
      const user = await this.http.post<User>(
        `${this.usersUrl}/login`,
        {},
        httpOptions
      ).toPromise();

      this.isLoggedIn = true;
      this.user = user;
      return Promise.resolve(true);
    } catch (e) {
      console.log('hiba', e);
      return Promise.resolve(false);
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
    this.redirectUrl = null;
  }
}
