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
/*     document.getElementById('dynamic').addEventListener('click', () => {
      lightGallery(document.getElementById('dynamic'), {
        dynamic: true,
        download: true,
        dynamicEl: [{
          src: "https://dummyimage.com/16:9x1080/"
        }, {
          src: "https://dummyimage.com/16:9x800/"
        }, {
          src: "https://dummyimage.com/16:9x1080/"
        }, {
          src: "https://www.youtube.com/watch?v=Pq9yPrLWMyU"
        }]
      });
    }) */
    lightGallery(document.getElementById('lightgallery'), {
      actualSize: false
    });
  }
}