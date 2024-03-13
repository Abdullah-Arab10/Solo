import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, ContactRoutingModule, SharedModule],
})
export class ContactModule {}
