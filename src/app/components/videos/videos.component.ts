import { Component, OnInit } from '@angular/core';
import 'lightgallery.js';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {
  title = 'Gallery';

  filterBoats(){
    console.log("Boats!")
  }

  constructor() { }

  ngOnInit() {

    lightGallery(document.getElementById('html5-videos')); 
  }
}