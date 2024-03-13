import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  @Input() logo: string = '';
  navMenuItems: navMenuItem[] = [
    { title: 'Downloads', link: 'downloads', className: '' },
    { title: 'Pricing', link: 'pricing', className: '' },
    { title: 'Features', link: 'features', className: '' },
    { title: 'About Us', link: 'about-us', className: '' },
    { title: 'Contact', link: 'contact-us', className: '' },
  ];
  constructor() {}

  toggleMenu() {
    let item = document.querySelector('.navbar__items')?.classList;
    console.log(item, item?.contains('hide'));
    item?.toggle('hide');
  }
}
interface navMenuItem {
  title: string;
  link?: string;
  className?: string;
}
