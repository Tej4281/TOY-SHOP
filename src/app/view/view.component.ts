import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ToysService } from '../toys.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  // [x: string]: any;
  data: any;
  // ToysService: any;

// name:any
// age:any
// price:any
  constructor(private ac:ActivatedRoute ,private ToysService:ToysService) { }
product:any=[]
id:any
  ngOnInit(): void {
    this.ac.params.subscribe((para:any)=>{
      this.product=para
    })
    this.id=parseInt(this.product['id'])
    this.data = this.ToysService.data;
  }
  quantity:number=1;
  i=1
  plus(){
    if(this.i !=5){
      this.i++;
      this.quantity=this.i;
    }
  }
  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
  }



//   data:any=
//   [
//   {
//     "id":101,
//     'img':'/assets/0-18/baby toy.jpg',
//     'name':'Musical Baby Crawling Toy.',
//      'price':'549',
//      'age':'0-18'
//   },
//   {
//     'id':102,
//     'img':'/assets/0-18/colorfull rattle.jpg',
//     'name':'Rattle for new born baby.',
//      'price':'280',
//      'age':'0-18'
//   },
//   {
//     'id':103,
//     'img':'/assets/0-18/dancing cactus.jpg',
//     'name':'dancing / talking cactus.',
//      'price':'1150',
//      'age':'0-18'
//   },

//   {
//     'id':104,
//     'img':'/assets/0-18/dancing dog.jpg',
//     'name':'Dancing Dog Toy with Music.',
//      'price':'489',
//      'age':'0-18'
//   },

//   {
//     'id':105,
//     'img':'/assets/0-18/dancing duck.jpg',
//     'name':'Dancing Duck with Music.',
//      'price':'649',
//      'age':'0-18'
//   },

//   {
//     'id':106,
//     'img':'/assets/0-18/dancing robot.jpg',
//     'name':'Dancing Robot with 3D Lights.',
//      'price':'849',
//      'age':'0-18'
//   },
//   {
//     'id':107,
//     'img':'/assets/0-18/dazy dog.jpg',
//     'name':'Walk Pull  Animal Pet Toy.',
//      'price':'749',
//      'age':'0-18'
//   },
//   {
//     'id':108,
//     'img':'/assets/0-18/fire truck.png',
//     'name':'Anam Fire Engine Truck',
//      'price':'749',
//      'age':'0-18'
//   },

//   // -----------------------
//   {
//     'id':109,
//     'img':'/assets/0-18/flash drum.jpg',
//     'name':'Flash Drums with Lights',
//      'price':'849',
//      'age':'0-18'

//   },
//   {
//     'id':110,
//     'img':'/assets/0-18/huse building.jpg',
//     'name':' Kids Puzzles.',
//      'price':'749',
//      'age':'0-18'
//   },
//   {
//     'id':111,
//     'img':'/assets/0-18/learning ball.jpg',
//     'name':'Learning Ball',
//      'price':'350',
//      'age':'0-18'
//   },
//   {
//     'id':112,
//     'img':'/assets/0-18/light bus.jpg',
//     'name':' Transparent Bus',
//      'price':'649',
//      'age':'0-18'
//   },
//   {
//     'id':113,
//     'img':'/assets/0-18/light car.jpg',
//     'name':'Musical and 3D Lights Car',
//      'price':'649',
//      'age':'0-18'
//   },
//   {
//     'id':114,
//     'img':'/assets/0-18/little lighthouse.jpg',
//     'name':'Lighthouse Stacking Drums ',
//      'price':'150',
//      'age':'0-18'
//   },
//   {
//     'id':115,
//     'img':'/assets/0-18/musical phone.jpg',
//     'name':'Musical Phone Toy for Kids',
//      'price':'369',
//      'age':'0-18'
//   },
//   {
//     'id':116,
//     'img':'/assets/0-18/musical walker.jpg',
//     'name':'Musical Walker',
//      'price':'859',
//      'age':'0-18'
//   },
//   {
//     'id':117,
//     'img':'/assets/0-18/ratels 7 set.jpg',
//     'name':'Rattle Toys',
//      'price':'449',
//      'age':'0-18'
//   },
//   {
//     'id':118,
//     'img':'/assets/0-18/ringtoss.jpg',
//     'name':'Ring Toss',
//      'price':'159',
//      'age':'0-18'
//   },
//   {'id':119,
//     'img':'/assets/0-18/roly poly.jpg',
//     'name':'Roly Poly Toy',
//      'price':'749',
//      'age':'0-18'
//   },
//   {
//     'id':120,
//     'img':'/assets/0-18/shape shorter.jpg',
//     'name':'Shape sorter Toy',
//      'price':'595',
//      'age':'0-18'
//   },
//   {
//     'id':121,
//     'img':'/assets/0-18/train light.jpg',
//     'name':'Train Engine Car',
//      'price':'799',
//      'age':'0-18'
//   },
//   {
//     'id':122,
//     'img':'/assets/0-18/unbreakable toy.jpg',
//     'name':'Unbreakable Cars Toy Set',
//      'price':'350',
//      'age':'0-18'
//   },
//   {
//     'id':123,
//     'img':'/assets/0-18/piano2.jpg',
//     'name':'Musical Xylophone & Mini Piano',
//      'price':'699',
//      'age':'0-18'
//   },
//   {
//     'id':124,
//     'img':'/assets/0-18/mini laptop.jpg',
//     'name':'Educational Kids Laptop With Sound',
//      'price':'579',
//      'age':'0-18'
//   },

// ]


}
