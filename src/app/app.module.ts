import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import LogoBannerModule from './logoBanner/logoBanner.module';
import GridFilterPanelModule from './gridFilterPanel/gridFilterPanel.module';
import GridModule from './grid/grid.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LogoBannerModule,
    GridFilterPanelModule,
    GridModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
