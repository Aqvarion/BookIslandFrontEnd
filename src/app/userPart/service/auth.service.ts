import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
const AUTH_API = 'http://localhost:8080/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + '/signIn', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return  this.http.post(AUTH_API + '/signUp', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
