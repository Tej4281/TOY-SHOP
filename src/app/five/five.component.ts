import { ToysService } from './../toys.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  data: any;

  constructor(private ToysService:ToysService) { }

  ngOnInit(): void {
    this.data = this.ToysService.data;
  }
  // data:any=[
  //   {
  //     'id':203,
  //     'img':'/assets/7-9/mat.webp',
  //     'name':'Jumbo Play Mat',
  //     'price':'399',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':204,
  //     'img':'/assets/7-9/pipe block.jpg',
  //     'name':'Building Blocks',
  //     'price':'329',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':205,
  //     'img':'/assets/7-9/plane.jpg',
  //     'name':'Hydraulic Plane ',
  //     'price':'599',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':206,
  //     'img':'/assets/7-9/archary.jpg',
  //     'name':'Archery',
  //     'price':'279',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':207,
  //     'img':'/assets/7-9/map.webp',
  //     'name':'India Toy Map',
  //     'price':'180',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':208,
  //     'img':'/assets/7-9/machanics.webp',
  //     'name':'Mechanix Monster',
  //     'price':'499',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':209,
  //     'img':'/assets/7-9/weapon.webp',
  //     'name':'Bahubali Weapon',
  //     'price':'180',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':210,
  //     'img':'/assets/7-9/kids camera.jpg',
  //     'name':'Kids Camera',
  //     'price':'999',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':211,
  //     'img':'/assets/7-9/3 in  1.webp',
  //     'name':'Doctor Kit',
  //     'price':'1200',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':212,
  //     'img':'/assets/7-9/ben 10.jpg',
  //     'name':'Ben10 Safari',
  //     'price':'700',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':213,
  //     'img':'/assets/7-9/soft gun.webp',
  //     'name':'Superman Softgun',
  //     'price':'320',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':214,
  //     'img':'/assets/7-9/football.webp',
  //     'name':'Football ',
  //     'price':'539',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':215,
  //     'img':'/assets/7-9/bat.jpg',
  //     'name':'Batmobile car',
  //     'price':'720',
  //     'age':'5-7'
  //   },

  //   {
  //     'id':216,
  //     'img':'/assets/7-9/unicorn.webp',
  //     'name':'Unicorn Gift',
  //     'price':'945',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':217,
  //     'img':'/assets/7-9/little kitchen.jpg',
  //     'name':'My Little Kitchen',
  //     'price':'349',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':218,
  //     'img':'/assets/7-9/bowling game.webp',
  //     'name':'Bowling Game',
  //     'price':'450',
  //     'age':'5-7'
  //   },
  //   {
  //     'id':219,
  //     'img':'/assets/7-9/dianosore.jpg',
  //     'name':'Dynosaur Toy',
  //     'price':'349',
  //     'age':'5-7'
  //   },
  // {
    //     'id':220,
    //     'img':'/assets/7-9/dianosore.jpg',
    //     'name':'Dynosaur Toy',
    //     'price':'349',
    //     'age':'5-7'
    //   },

  // ]

}
