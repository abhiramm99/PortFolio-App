import { Component, OnDestroy, OnInit } from '@angular/core';
import { fadeInFromBottom, fadeInFromTop } from '../shared-files/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fadeInFromTop,
    fadeInFromBottom
  ]
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
