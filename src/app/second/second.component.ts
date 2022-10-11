import { Component, OnInit } from '@angular/core';
import { ToysService } from '../toys.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  data: any;

  constructor(private ToysService:ToysService) { }

  ngOnInit(): void {
    // this.data = this.ToysService.data;
    // console.log(this.data)
    this.data = this.ToysService.data;

  }
// pro:any=[
//   {
//     'id':125,
//     'img':'/assets/18-36/car.webp',
//     'name':'Stunt Car',
//     'price':'100',
//     'age':'18-36'
//   },
//   {
//     'id':126,
//     'img':'/assets/18-36/cat.webp',
//     'name':'Talking Tom Cat',
//      'price':'499',
//      'age':'18-36'
//   },
//   {
//     'id':127,
//     'img':'/assets/18-36/fishing.webp',
//     'name':'Fishing Game Set',
//      'price':'699',
//      'age':'18-36'
//   },
//   {
//     'id':128,
//     'img':'/assets/18-36/lightcar1.webp',
//     'name':'Musical Stunt Car',
//      'price':'450',
//      'age':'18-36'
//   },
//   {
//     'id':129,
//     'img':'/assets/18-36/doll.webp',
//     'name':'Musical Doll',
//      'price':'520',
//      'age':'18-36'
//   },
//   {
//     'id':130,
//     'img':'/assets/18-36/popet.webp',
//     'name':'Pop up ',
//      'price':'80',
//      'age':'18-36'
//   },
//   {
//     'id':140,
//     'img':'/assets/18-36/LCD1.webp',
//     'name':'LCD Writing pad',
//      'price':'143',
//      'age':'18-36'
//   },
//   {
//     'id':141,
//     'img':'/assets/18-36/xylophone.webp',
//     'name':'Wooden Xylophone',
//      'price':'190',
//      'age':'18-36'
//   },
//   {
//     'id':142,
//     'img':'/assets/18-36/jumping dog.webp',
//     'name':'Jumping Dog',
//      'price':'699',
//      'age':'18-36'
//   },
//   {
//     'id':143,
//     'img':'/assets/18-36/hand.webp',
//     'name':' Ring Toss',
//      'price':'240',
//      'age':'18-36'
//   },
//   {
//     'id':144,
//     'img':'/assets/18-36/tractor.webp',
//     'name':' Farmer Tractor',
//      'price':'349',
//      'age':'18-36'
//   },
//   {
//     'id':145,
//     'img':'/assets/18-36/militry car.webp',
//     'name':'Militry Car',
//      'price':'191',
//      'age':'18-36'
//   },
//   {
//     'id':146,
//     'img':'/assets/18-36/construction1.webp',
//     'name':' Construction Set',
//      'price':'654',
//      'age':'18-36'
//   },
//   {
//     'id':147,
//     'img':'/assets/18-36/poem doll.webp',
//     'name':'Baby Poem Doll',
//      'price':'654',
//      'age':'18-36'
//   },
//   {
//     'id':148,
//     'img':'/assets/18-36/stunt bike.webp',
//     'name':'Stunt Tricycle',
//      'price':'550',
//      'age':'18-36'
//   },
//   {
//     'id':149,
//     'img':'/assets/18-36/lamborgini.webp',
//     'name':'Lamborghini Metal Car',
//      'price':'998',
//      'age':'18-36'
//   },{
//     'id':150,
//     'img':'/assets/18-36/police cars.webp',
//     'name':'Innova & Crysta Police Car',
//      'price':'850',
//      'age':'18-36'
//   },
//   {
//     'id':151,
//     'img':'/assets/18-36/combat tank1.webp',
//     'name':'Transform Robot Toy ',
//      'price':'699',
//      'age':'18-36'
//   },
//   {
//     'id':152,
//     'img':'/assets/18-36/two seater.jpg',
//     'name':'Baby car',
//      'price':'1295',
//      'age':'18-36'
//   },
//   {
//     'id':153,
//     'img':'/assets/18-36/honey pool.jpg',
//     'name':'Jam & Honey Pool ',
//      'price':'950',
//      'age':'18-36'
//   },
//   {
//     'id':154,
//     'img':'/assets/18-36/unicorn.jpg',
//     'name':'Unicorn Soft Toy',
//      'price':'450',
//      'age':'18-36'
//   },
//   {
//     'id':155,
//     'img':'/assets/18-36/motu patlu.jpg',
//     'name':'Motu Soft Toy',
//      'price':'220',
//      'age':'18-36'
//   },
//   {
//     'id':156,
//     'img':'/assets/18-36/bath tub.webp',
//     'name':'Bath Tub, 3 Ft',
//      'price':'450',
//      'age':'18-36'
//   },
//   {
//     'id':157,
//     'img':'/assets/18-36/fruit cutting.jpg',
//     'name':'Fruits Cutting Toy',
//      'price':'259',
//      'age':'18-36'
//   },
// ]
}
