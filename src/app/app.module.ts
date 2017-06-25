import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import LogoBannerModule from './logoBanner/logoBanner.module';
import GridFilterPanelModule from './gridFilterPanel/gridFilterPanel.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LogoBannerModule,
    GridFilterPanelModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
