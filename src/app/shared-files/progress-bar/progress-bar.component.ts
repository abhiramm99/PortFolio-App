import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements AfterViewInit {

  @Input() percentage: number = 0;

  @ViewChild('bar', { static: false }) bar: ElementRef<HTMLDivElement>;

  constructor() { }

  ngAfterViewInit(): void {
    if (!this.bar?.nativeElement) {
      return;
    }
    
    this.bar.nativeElement.style.width = `${this.percentage}%`;
  }

}
