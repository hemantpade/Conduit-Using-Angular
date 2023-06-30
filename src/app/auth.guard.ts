import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginService } from './services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    console.log("In Authguard",this.loginService.isLoggedInfunc)
    if (this.loginService.isLoggedInfunc) {
      // this.router.navigate(['homepage']);
      console.log("In Authguard")
      return true;
    } else {
      this.router.navigate(['login']); // Redirect to login page if not authenticated
      return false;
    }
  }
}


