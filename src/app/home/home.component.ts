import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  features:any=
[
  {

    'image':'/assets/images/ANAM.png',
    'name':'Quality Products '
  },
  {
    'image':'/assets/images/easy payment.png',
    'name':'Easy Payments '
  },
  {
    'image':'/assets/images/delivery.png',
    'name':'Free Delivery'
  },

]
products:any=
[
  {
    'image':'/assets/images/micky.jpeg',
    'name':'Micky '
  },
  {
    'image':'/assets/images/doctor set2.jpg',
    'name':'Doctor Set '
  },
  {
    'image':'/assets/images/Avenger3.jpg',
    'name':'Avengers '
  },
  {
    'image':'/assets/images/doll.png',
    'name':'Doll '
  },
  {
    'image':'/assets/images/new teady.jpg',
    'name':'Teady '
  },
  {
    'image':'/assets/images/stunt car.jpg',
    'name':'stunt Car'
  },
  {
    'image':'/assets/images/miniuns.webp',
    'name':'Miniun'
  },
  {
    'image':'/assets/images/talking tom.jpg',
    'name':'Talking Cactus'
  },
  {
    'image':'/assets/images/carrom1.jpg',
    'name':'Carrom'
  },
  {
    'image':'/assets/images/popet33.jpg',
    'name':'Popet'
  },
  {
    'image':'/assets/images/ganpati33.png',
    'name':'Lord Bappa'
  },
  {
    'image':'/assets/images/barbie.jpg',
    'name':'Lord Bappa'
  },
]


cat:any=
[
  {
  'image':'/assets/images/topins.jpg',
  'name':'Toppins'
},
{
  'image':'/assets/images/bdy1.jpg',
  'name':'Decoration Set'
},
{
  'image':'/assets/images/wall frame.jpg',
  'name':'Wall Frames'
},
{
  'image':'/assets/images/shivji.jpg',
  'name':'Lord Murti'
},
{
  'image':'/assets/images/wall clock.webp',
  'name':'Wall Clock'
},
{
  'image':'/assets/images/bdy return gifts.jpg',
  'name':'Birthday Gifts'
},
{
  'image':'/assets/images/doms 500.jpg',
  'name':'Doms Kit'
},
{
  'image':'/assets/images/flower pot2.png',
  'name':'Flower Pot'
},
{
  'image':'/assets/images/ring toss.jpg',
  'name':'Ring Toss Set'
},

]

age:any=[

{
  'image':'/assets/images/0-18-new.jpg',
  'name':'0-18 MONTHS'
},
{
  'image':'/assets/images/18-36.jpg',
  'name':'18-36 MONTHS'
},
{
  'image':'/assets/images/3-5.jpg',
  'name':'3-5 YEARS'
},
{
  'image':'/assets/images/5-7.jpg',
  'name':'5-7 YEARS'
},
{
  'image':'/assets/images/7-9.webp',
  'name':'7-9 YEARS'
},
{
  'image':'/assets/images/9-12.webp',
  'name':'9-12 YEARS'
},
// {
//   'image':'/assets/images/12+.webp',
//   'name':'12+ YEARS'
// },


]


}
