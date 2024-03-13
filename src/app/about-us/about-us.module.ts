import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule,
    AngularSvgIconModule,
  ],
})
export class AboutUsModule {}
