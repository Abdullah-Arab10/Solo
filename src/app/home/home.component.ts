import { Component, OnInit } from '@angular/core';
import { IntersectionObserverService } from '../shared/services/intersection-observer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _intersectionObserveService: IntersectionObserverService
  ) {}
  ngOnInit(): void {
    this._intersectionObserveService.intersectionObserver();
  }
}
