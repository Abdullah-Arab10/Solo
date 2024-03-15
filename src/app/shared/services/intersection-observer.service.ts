import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverService {
  constructor() {}

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      if (entry.isIntersecting) {
        entry.target.classList.add('active-animation');
      } else {
        entry.target.classList.remove('active-animation');
      }
    });
  });
  intersectionObserver() {
    document.querySelectorAll('.reveal').forEach((section) => {
      this.observer.observe(section);
    });
  }
}
