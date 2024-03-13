import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRoutingModule } from './download-routing.module';
import { DownloadsComponent } from './downloads.component';
import { SharedModule } from '../shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [DownloadsComponent],
  imports: [
    CommonModule,
    DownloadRoutingModule,
    SharedModule,
    AngularSvgIconModule,
  ],
})
export class DownloadModule {}
