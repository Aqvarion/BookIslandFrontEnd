import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public create(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
