import { Component, OnInit } from '@angular/core';
import { Employees, TeamDescription } from './about-us.data';
import { IntersectionObserverService } from '../shared/services/intersection-observer.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  teamDescription = TeamDescription;
  employees = Employees;
  constructor(
    private _intersectionObserveService: IntersectionObserverService
  ) {}
  ngOnInit(): void {
    this._intersectionObserveService.intersectionObserver();
  }
}
