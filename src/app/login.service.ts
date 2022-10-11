import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // LoginComponent: any;

  constructor(public router:Router) { }
  auth=false


hide=true
  loginauth(uname:any,pwd:any){
    if((uname == 'tejas')&&(pwd == '1234')){
      this.router.navigate(['/home'])
      this.auth=true
      this.hide=false
      console.log("loggedin")

    }
    else{
      this.router.navigate(['/login'])
      this.auth=false

    }
  }




}
