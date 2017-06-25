import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { GridComponent } from './grid.component';

import { DealService } from './dealService';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [GridComponent],
  exports: [GridComponent]
})

export default class GridModule { };
