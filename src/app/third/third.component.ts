import { Component, OnInit } from '@angular/core';
import { ToysService } from '../toys.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  data: any;

  constructor(private ToysService:ToysService) { }

  ngOnInit(): void {
    this.data = this.ToysService.data;
  }
  // data:any=[
  //   {
  //      'id':158,
  //     'img':'/assets/3-5/einstine box.webp',
  //     'name':'Einstein Box',
  //      'price':'599',
  //      'age':'3-5'
  //   },
  //   {
  //     'id':159,
  //    'img':'/assets/3-5/magical color.jpg',
  //    'name':'Colours Kit',
  //     'price':'749',
  //     'age':'3-5'
  //  },
  //  {
  //   'id':160,
  //  'img':'/assets/3-5/musical book.jpg',
  //  'name':'Phonetic Learning',
  //   'price':'649',
  //   'age':'3-5'
  // },
  // {
  //   'id':161,
  //  'img':'/assets/3-5/bowling set.jpg',
  //  'name':'Bowling Set',
  //   'price':'210',
  //   'age':'3-5'
  // },
  // {
  //   'id':162,
  //  'img':'/assets/3-5/puzzles.webp',
  //  'name':'Fun With Words',
  //   'price':'250',
  //   'age':'3-5'
  // },
  // {
  //   'id':163,
  //  'img':'/assets/3-5/piano.jpg',
  //  'name':'Keyboard Piano',
  //   'price':'999',
  //   'age':'3-5'
  // },{
  //   'id':164,
  //  'img':'/assets/3-5/kitchen set.jpg',
  //  'name':'Kitchen Set ',
  //   'price':'400',
  //   'age':'3-5'
  // },
  // {
  //   'id':165,
  //  'img':'/assets/3-5/magnet set.jpg',
  //  'name':'3 in 1 Magnet Set',
  //   'price':'399',
  //   'age':'3-5'
  // },
  // {
  //   'id':166,
  //  'img':'/assets/3-5/horse.jpg',
  //  'name':'Horse Rider ',
  //   'price':'799',
  //   'age':'3-5'
  // },
  // {
  //   'id':167,
  //  'img':'/assets/3-5/board.webp',
  //  'name':'Learning Board',
  //   'price':'900',
  //   'age':'3-5'
  // },
  // {
  //   'id':168,
  //  'img':'/assets/3-5/mat.jpg',
  //  'name':'Mini Puzzle Mat ',
  //   'price':'250',
  //   'age':'3-5'
  // },
  // {
  //   'id':169,
  //  'img':'/assets/3-5/catch.jpg',
  //  'name':'Pop & Catch',
  //   'price':'190',
  //   'age':'3-5'
  // },
  // {
  //   'id':170,
  //  'img':'/assets/3-5/hockey.jpg',
  //  'name':'Hockey Sticks ',
  //   'price':'261',
  //   'age':'3-5'
  // },
  // {
  //   'id':171,
  //  'img':'/assets/3-5/fun doll.jpg',
  //  'name':'doll house ',
  //   'price':'270',
  //   'age':'3-5'
  // },
  // {
  //   'id':172,
  //  'img':'/assets/3-5/football.jpg',
  //  'name':'Hover Football ',
  //   'price':'561',
  //   'age':'3-5'
  // },
  // {
  //   'id':173,
  //  'img':'/assets/3-5/drum set.jpg',
  //  'name':'Drum Set ',
  //   'price':'600',
  //   'age':'3-5'
  // },
  // {
  //   'id':174,
  //  'img':'/assets/3-5/mini guiter.jpg',
  //  'name':' Mini Guitar',
  //   'price':'350',
  //   'age':'3-5'
  // },
  // {
  //   'id':175,
  //  'img':'/assets/3-5/soft gun.jpg',
  //  'name':'Soft Bullet Gun',
  //   'price':'400',
  //   'age':'3-5'
  // },
  // {
  //   'id':176,
  //  'img':'/assets/3-5/mini helicopter.jpg',
  //  'name':'Remote Helicopter',
  //   'price':'499',
  //   'age':'3-5'
  // },
  // {
  //   'id':177,
  //  'img':'/assets/3-5/light plane.jpg',
  //  'name':'3D Aeroplane ',
  //   'price':'430',
  //   'age':'3-5'
  // },
  // {
  //   'id':178,
  //  'img':'/assets/3-5/tricycle.jpg',
  //  'name':'Skate Scooter ',
  //   'price':'1600 ',
  //   'age':'3-5'
  // },


// ]

}
