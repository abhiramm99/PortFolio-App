import { Component, OnDestroy, OnInit } from '@angular/core';
import { fadeInFromBottom, fadeInFromTop } from '../shared-files/animations';
import { GREETING_LINES } from './home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fadeInFromTop,
    fadeInFromBottom
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  public currentGreetingLine: string;
  public greetingInterval: any;

  private index: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.currentGreetingLine = GREETING_LINES[this.index];
    this.greetingInterval = setInterval(() => {
      this.index++;
      if (this.index === GREETING_LINES.length) {
        this.index = 0;
      }
      this.currentGreetingLine = GREETING_LINES[this.index];
    }, 3500);
  }

  ngOnDestroy(): void {
    clearInterval(this.greetingInterval);
  }

}
