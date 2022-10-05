import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationTabs } from '../app.enum';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, AfterViewInit {

  @ViewChild('hamburger') hamburgerMenu: ElementRef<HTMLDivElement>;
  @ViewChild('navMenu') navMenu: ElementRef<HTMLUListElement>;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.hamburgerMenu.nativeElement.addEventListener('click', () => {
      this.toggleActiveClass();
    });

    this.navMenu.nativeElement.childNodes.forEach((li) => li.addEventListener('click', () => {
      this.toggleActiveClass();
    }));
  }

  private toggleActiveClass(): void {
    this.hamburgerMenu.nativeElement.classList.toggle('active');
    this.navMenu.nativeElement.classList.toggle('active');
  }

}
