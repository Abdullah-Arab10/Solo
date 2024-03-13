import { Component } from '@angular/core';
import { Devices } from './download.data';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
})
export class DownloadsComponent {
  devices = Devices;
}
