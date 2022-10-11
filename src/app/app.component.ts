import { Component } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { LoginService } from './login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // [x: string]: any;
  // title = 'shop';
//  hide=this.login.hide
  Router: any;
  //  login:any
  // loginauth: boolean = false;
  constructor(private login:LoginService,router:Router){

// this.Router.events.subscribe((event:any) =>{
//   if(event instanceof NavigationEnd){
//     if(event.url === '/login'){
//       this.loginauth=true
//     }
//     else{
//       this.loginauth=false
//     }
//   }
// })
  }






}
