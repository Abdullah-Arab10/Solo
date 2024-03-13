import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '../shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    AngularSvgIconModule,
  ],
})
export class FeaturesModule {}
