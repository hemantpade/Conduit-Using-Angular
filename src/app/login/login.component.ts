import { Component,OnInit} from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";
import {  BehaviorSubject } from "rxjs";
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // isLoggedIn=new BehaviorSubject<boolean>(false);
  user = { email: '', password: '' };
  email=''
  errorMessage:String=''
  loggedIn=false;
  constructor(
    private actRoute: ActivatedRoute,
    private loginData: LoginService,
    private router :Router,
    ) {}

    isAuthenticated(): boolean {
      return this.loggedIn;
    }
    ngOnInit()
    {
      console.log('this.actRoute', this.actRoute)
      this.onSubmit()
    }
    get emailAuth(){
      this.email=this.user.email
      return this.email
    }
    onSubmit(){
      this.loginData.login(this.user.email, this.user.password).subscribe(
        (response:any) => {
          console.log(response);
          this.errorMessage = '';
          if (response.hasOwnProperty('user')) {
            this.errorMessage = 'Logged in successfully';
            // this.isLoggedIn.next(true);
             const username=response.user.username
             const img =response.user.image
             const email=response.user.email
             const token=response.user.token
            localStorage.setItem('user',JSON.stringify(response))
            localStorage.setItem('username',JSON.stringify(username))
            localStorage.setItem('img',JSON.stringify(img))
            localStorage.setItem('email',JSON.stringify(email))
            localStorage.setItem('token',JSON.stringify(token))
            this.router.navigate(['homepage']);

          } else if (response.hasOwnProperty('errors')) {
            this.errorMessage = 'Invalid email or password';
            // this.loggedIn = false;
            // this.navbar.isLoggedIn=false
          } else {
            this.errorMessage = 'An error occurred. Please try again.';
            this.loggedIn = false;
          }
        },
        (error:any) => {
          console.error('Error:', error);
          this.errorMessage = 'An error occurred. Please try again.';
        }
      );
    }
}
