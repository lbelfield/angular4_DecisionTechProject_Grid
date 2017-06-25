import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridFilterPanelComponent } from './gridFilterPanel.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [GridFilterPanelComponent],
  exports: [GridFilterPanelComponent]
})

export default class GridFilterPanelModule { };