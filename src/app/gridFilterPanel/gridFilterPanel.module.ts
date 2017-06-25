import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GridFilterPanelComponent } from './gridFilterPanel.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [GridFilterPanelComponent],
  exports: [GridFilterPanelComponent]
})

export default class GridFilterPanelModule { };