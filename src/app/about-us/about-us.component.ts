import { Component } from '@angular/core';
import { Employees, TeamDescription } from './about-us.data';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  teamDescription = TeamDescription;
  employees = Employees;
}
