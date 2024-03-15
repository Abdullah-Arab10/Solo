import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerService } from './shared/services/spinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppComponent implements OnInit {
  title = 'Solo-Landing';
  theme = '';
  Logo = 'assets/images/logo-dark.png';
  constructor(
    private spinner: NgxSpinnerService,
    private loadingService: SpinnerService
  ) {}
  ngOnInit(): void {
    this.getStoredTheme();
    this.loadingService.loading$.subscribe((load) => {
      this.spinnerStatus(load);
    });
  }
  spinnerStatus(load: boolean) {
    console.log(load);
    load ? this.spinner.show() : this.spinner.hide();
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
  }
}
