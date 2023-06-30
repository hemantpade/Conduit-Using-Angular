import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  isLoggedIn=false
  constructor(private http: HttpClient) {}
  url = 'https://api.realworld.io/api/users';

  signUp(username: string, email: string, password: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Requested-With', 'XMLHttpRequest');

    const body = JSON.stringify({
      user: {
        email: email,
        password: password,
        username: username
      }
    });
    return this.http.post(this.url, body, { headers });
  }

  get isLoggedInfunc(){
    if(localStorage.getItem('user')){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
    return this.isLoggedIn
  }
}
