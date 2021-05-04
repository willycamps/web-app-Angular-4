import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  title = 'Gallery';

  filterBoats(){
    console.log("Boats!")
  }

  constructor() { }

  ngOnInit() {
  }

}