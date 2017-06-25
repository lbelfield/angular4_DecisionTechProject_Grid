import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LogoBannerComponent } from './logoBanner.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [LogoBannerComponent],
  exports: [LogoBannerComponent]
})

export default class LogoBannerModule { };
