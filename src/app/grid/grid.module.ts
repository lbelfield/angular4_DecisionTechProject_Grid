import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { GridComponent } from './grid.component';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [GridComponent],
  exports: [GridComponent]
})

export default class GridModule { };
