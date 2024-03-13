import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    document.querySelectorAll('.reveal').forEach((section) => {
      this.observer.observe(section);
    });
  }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  });
}
