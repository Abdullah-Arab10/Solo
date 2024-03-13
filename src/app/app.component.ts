import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Solo-Landing';
  theme = '';
  Logo = 'assets/images/logo-dark.png';

  ngOnInit(): void {
    this.getStoredTheme();
  }
  changeThemeEvent(event: any) {
    this.getStoredTheme();
  }
  getStoredTheme() {
    let storedTheme =
      localStorage?.getItem('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    document.documentElement.setAttribute('data-theme', storedTheme);
    localStorage.setItem('data-theme', storedTheme);
    if (storedTheme == 'dark') this.Logo = 'assets/images/logo-light.png';
    if (storedTheme == 'light') this.Logo = 'assets/images/logo-dark.png';
    console.log(this.Logo);
  }
}
