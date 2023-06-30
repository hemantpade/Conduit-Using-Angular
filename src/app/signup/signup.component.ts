import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignupService } from "../services/signup.service";
import { Router } from "@angular/router";
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username:string=''
  email:string=''
  password:string=''
  errorMessage:String=''
  constructor(private http: HttpClient,
    private signUpdata :SignupService,
    private router :Router) { }

  onSubmit() {
    this.signUpdata.signUp(this.username, this.email, this.password).subscribe(
      (response:any) => {
        // const username=response.user.username
        // const img =response.user.image
        console.log(response);
        localStorage.setItem('signup',JSON.stringify(response))
        // localStorage.setItem('username',JSON.stringify(username))
        // localStorage.setItem('img',JSON.stringify(img))
        this.router.navigate(['homepage']);
      },
      (error:any) => {
        console.error(error);
        this.errorMessage = 'This email is already registered.';
      }
    );
  }
}

