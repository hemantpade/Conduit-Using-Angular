import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn = false;
  apiUrl = 'https://api.realworld.io/api/users/login';

  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Requested-with', 'XMLHttpRequest');

    const body = {
      user: {
        email: email,
        password: password,
      },
    };
    return this.http.post(this.apiUrl, body, { headers });
  }

  reloadUser(){
    if(localStorage.getItem('user')){
    }
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
