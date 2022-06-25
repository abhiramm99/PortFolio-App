import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationTabs } from '../app.enum';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  public selectedTab: NavigationTabs = NavigationTabs.Home;
  public readonly navigationTabs = NavigationTabs;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public changeTab(targetTab: NavigationTabs): void {
    
    switch (targetTab) {
      case NavigationTabs.Home:
        this.router.navigate(['./home']);
        break;
      case NavigationTabs.Skills:
        this.router.navigate(['./skills']);
        break;
      case NavigationTabs.Projects:
        this.router.navigate(['./projects']);
        break;
      case NavigationTabs.Experience:
        this.router.navigate(['./experience']);
        break;
      case NavigationTabs.Contact:
        this.router.navigate(['./contact']);
        break;
      default:
        this.router.navigate(['./home']);
        break;
    }
    this.selectedTab = targetTab;
  }

}
