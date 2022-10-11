import { Component, OnInit } from '@angular/core';
import { ToysService } from '../toys.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {
  // [x: string]: any;
  data:any;
  constructor(private ToysService:ToysService) { }

  ngOnInit(): void {
   this.data = this.ToysService.data
  }

}
