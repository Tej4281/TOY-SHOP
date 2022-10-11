import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  find: any;
  auth: any;

  constructor(public fb:FormBuilder, public router:Router,public ls:LoginService) { }

  ngOnInit(): void {

  }
  // @Input() hide:any


  submit(value:any){
    console.log(value)
  }


  users:any=[]
  loginForm:any=this.fb.group({
    'uname':this.fb.control("",Validators.required),
    'pwd':this.fb.control("",Validators.required)

  })

  login(){
   this.ls.loginauth(this.loginForm.controls.uname.value,this.loginForm.controls.pwd.value)



  }










}
