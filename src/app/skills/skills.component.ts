import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fadeIn, fadeInFromBottom, fadeInFromLeft, fadeInFromRight, fadeInFromTop } from '../shared-files/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    fadeIn,
    fadeInFromBottom,
    fadeInFromTop
  ]
})
export class SkillsComponent {

  constructor() { }

}
