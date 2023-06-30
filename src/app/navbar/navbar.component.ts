import { Component,OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  username=localStorage.getItem('username')
  img=localStorage.getItem('img')
username1=''
img1=''
ngOnInit(){
this.convert();
this.convertImg()
}
convertImg(){
  if(this.img!=null){
    this.img1=this.img.replace(/"/g,'')
  }
}
convert(){
  if(this.username!=null)
  this.username1=this.username.replace(/"/g, '');
}
  constructor(
    public loginService: LoginService,
    public loginService1:SignupService
    ) {}
}
