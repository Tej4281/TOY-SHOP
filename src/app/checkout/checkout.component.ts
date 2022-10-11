import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToysService } from '../toys.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private ac:ActivatedRoute ,private ToysService:ToysService) { }
  // valid=true

  product:any=[]
  data:any
  id: any;

  ngOnInit(): void {
    this.ac.params.subscribe((para:any)=>{
      this.product=para
    })
     this.id=parseInt(this.product['id'])
    this.data = this.ToysService.data;
    console.log(this.data)


  }
  // checkout(){
  //   window.alert('Your product has been added to the cart!')
  // }






}


