import { Component, OnInit } from '@angular/core';
import { fadeInFromBottom, fadeInFromLeft, fadeInFromRight } from '../shared-files/animations';
import { WorkedCompanies } from './experience.enum';
import { CompanyCardState } from './experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    fadeInFromRight,
    fadeInFromLeft,
    fadeInFromBottom
  ]
})
export class ExperienceComponent implements OnInit {

  public isCareStackDetailView: boolean = false;
  public readonly workedCompanies = WorkedCompanies;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleDetailView(company: WorkedCompanies): void {
    this.isCareStackDetailView = !this.isCareStackDetailView;
  }

}
