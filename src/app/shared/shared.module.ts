import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent,
    FooterComponent,
    NavbarComponent,
    ReviewsComponent,
    AdvantagesComponent,
  ],
  imports: [CommonModule, AngularSvgIconModule, RouterModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    ReviewsComponent,
    AdvantagesComponent,
  ],
})
export class SharedModule {}
