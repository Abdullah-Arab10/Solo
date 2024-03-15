import { Component, HostListener, OnInit } from '@angular/core';
import { Faqs, Plans } from './pricing.data';
import { IntersectionObserverService } from '../shared/services/intersection-observer.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  plans = Plans;
  faqs = Faqs;
  constructor(
    private _intersectionObserveService: IntersectionObserverService
  ) {}
  ngOnInit(): void {
    this._intersectionObserveService.intersectionObserver();
    if (window.innerWidth >= 768) {
      this.plans.forEach((plan) => {
        plan.active = true;
      });
    }
  }
  toggle(i: number) {
    console.log(this.plans[i].active);
    this.plans[i].active = !this.plans[i].active;
  }
  @HostListener('window:resize', ['$event']) onResize(event: any) {
    document?.querySelectorAll('.plans__features')?.forEach((item) => {
      if (event.target.innerWidth >= 768) {
        this.plans.forEach((plan) => {
          plan.active = true;
        });
        item.classList.remove('hide');
        item.classList.add('show');
      } else {
        this.plans.forEach((plan) => {
          plan.active = false;
        });
        item.classList.remove('show');
        item.classList.add('hide');
      }
    });
  }
  toggleFAQ(id: string) {
    const element = document?.getElementById(id)?.classList;
    if (element?.contains('active')) {
      element.remove('active');
    } else {
      element?.add('active');
    }
  }
}
