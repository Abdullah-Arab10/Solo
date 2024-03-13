import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactModule } from './contact/contact.module';
import { DownloadModule } from './download/download.module';
import { PricingModule } from './pricing/pricing.module';
import { FeaturesModule } from './features/features.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AboutUsModule,
    ContactModule,
    DownloadModule,
    PricingModule,
    FeaturesModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
