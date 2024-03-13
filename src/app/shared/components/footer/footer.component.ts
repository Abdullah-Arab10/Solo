import { Component, EventEmitter, Input, Output } from '@angular/core';
import { navMenuItems } from '../../models/global.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerNavItems = navMenuItems;
  @Output() themeEvent = new EventEmitter<any>();
  @Input() logo = '';
  themeToggle() {
    var currentTheme = document.documentElement.getAttribute('data-theme');
    var targetTheme = 'light';
    if (currentTheme === 'light') {
      targetTheme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('data-theme', targetTheme);
    this.themeEvent.emit(targetTheme);
  }
}
