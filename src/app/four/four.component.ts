import { Component, OnInit } from '@angular/core';
import { ToysService } from '../toys.service';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  // ToysService: any;
  data: any;

  constructor(private ToysService:ToysService) { }

  ngOnInit(): void {
    this.data = this.ToysService.data;
  }
// data:any=[
//   {

//       'id':179,
//      'img':'/assets/5-7/cube.webp',
//      'name':'3x3 SpeedCube ',
//       'price':'169',
//       'age':'5-7'

//   },
//   {

//     'id':180,
//    'img':'/assets/5-7/machanics.webp',
//    'name':'Automobile  Kit',
//     'price':'320',
//     'age':'5-7'

// },
// {

//   'id':181,
//  'img':'/assets/5-7/spring.webp',
//  'name':'Spring Toy',
//   'price':'170',
//   'age':'5-7'

// },
// {

//   'id':182,
//  'img':'/assets/5-7/tent.webp',
//  'name':'Tent House',
//   'price':'1200',
//   'age':'5-7'

// },
// {

//   'id':183,
//  'img':'/assets/5-7/uno.webp',
//  'name':'Uno cards',
//   'price':'99',
//   'age':'5-7'

// },
// {

//   'id':184,
//  'img':'/assets/5-7/boxing kit.webp',
//  'name':'Boxing Kit',
//   'price':'499',
//   'age':'5-7'

// },
// {

//   'id':185,
//  'img':'/assets/5-7/cricket set.webp',
//  'name':'Bat Ball ',
//   'price':'300',
//   'age':'5-7'

// },{

//   'id':186,
//  'img':'/assets/5-7/pep pe pig.webp',
//  'name':'Pig Family ',
//   'price':'285',
//   'age':'5-7'

// },
// {

//   'id':187,
//  'img':'/assets/5-7/cycle.webp',
//  'name':'tricycle',
//   'price':'2300',
//   'age':'5-7'

// },
// {

//   'id':188,
//  'img':'/assets/5-7/book.webp',
//  'name':' First Board Book',
//   'price':'280',
//   'age':'5-7'

// },
// {

//   'id':189,
//  'img':'/assets/5-7/beyblade.webp',
//  'name':'Bayblad ',
//   'price':'400',
//   'age':'5-7'

// },
// {

//   'id':190,
//  'img':'/assets/5-7/off road.webp',
//  'name':'Monster car',
//   'price':'1100',
//   'age':'5-7'

// },
// {

//   'id':191,
//  'img':'/assets/5-7/remote.webp',
//  'name':' Stunt Car',
//   'price':'800',
//   'age':'5-7'

// },
// {

//   'id':192,
//  'img':'/assets/5-7/yello gun.webp',
//  'name':'Strike Tiger ',
//   'price':'600',
//   'age':'5-7'

// },
// {

//   'id':193,
//  'img':'/assets/5-7/3d car.webp',
//  'name':'Modern Car ',
//   'price':'320',
//   'age':'5-7'

// },
// {

//   'id':194,
//  'img':'/assets/5-7/avengers1.jpg',
//  'name':'Avengers ',
//   'price':'499',
//   'age':'5-7'

// },
// {

//   'id':195,
//  'img':'/assets/5-7/kitchen set.webp',
//  'name':'KITCHEN SET ',
//   'price':'450',
//   'age':'5-7'

// },
// {

//   'id':196,
//  'img':'/assets/5-7/basketball.webp',
//  'name':'Basketball ',
//   'price':'320',
//   'age':'5-7'

// },
// {

//   'id':197,
//  'img':'/assets/5-7/slime.webp',
//  'name':'Crystal Slime ',
//   'price':'170',
//   'age':'5-7'

// },
// {

//   'id':198,
//  'img':'/assets/5-7/4in1.webp',
//  'name':'Board Game 4 in 1',
//   'price':'240',
//   'age':'5-7'

// },
// {

//   'id':199,
//  'img':'/assets/5-7/blocks.webp',
//  'name':'Building Blocks ',
//   'price':'320',
//   'age':'5-7'

// },
// {

//   'id':200,
//  'img':'/assets/5-7/jenga.webp',
//  'name':'Tumbling Tower',
//   'price':'399',
//   'age':'5-7'

// },
// {

//   'id':201,
//  'img':'/assets/5-7/gloves.webp',
//  'name':'Spiderman Gloves',
//   'price':'399',
//   'age':'5-7'

// },
// {

//   'id':202,
//  'img':'/assets/5-7/mat.webp',
//  'name':'Jumbo Play Mat',
//   'price':'399',
//   'age':'5-7'

// },
// ]

}
