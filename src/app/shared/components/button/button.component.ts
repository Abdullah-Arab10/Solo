import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  ICONS_PATH = 'assets/icons/';
  @Input() className: string = '';
  @Input() title: string = '';
  @Input() icon: string = '';
}
