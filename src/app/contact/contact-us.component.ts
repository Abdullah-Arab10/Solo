import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IntersectionObserverService } from '../shared/services/intersection-observer.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsComponent implements OnInit {
  constructor(
    private _intersectionObserveService: IntersectionObserverService
  ) {}
  ngOnInit(): void {
    this._intersectionObserveService.intersectionObserver();
  }
}
