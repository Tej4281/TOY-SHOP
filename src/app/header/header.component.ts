import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth.guard';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: any;
  // auth: boolean;

  constructor(private login:LoginService) { }
  ngOnInit(): void {

  }

}
