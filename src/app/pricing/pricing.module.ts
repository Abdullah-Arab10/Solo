import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { SharedModule } from '../shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule,
    PricingRoutingModule,
    SharedModule,
    AngularSvgIconModule,
  ],
})
export class PricingModule {}
