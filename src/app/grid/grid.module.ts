import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { GridComponent } from './grid.component';
import { ContractLengthPipe } from './pipes/contractLength.pipe';

import { DealService } from './dealService';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [GridComponent, ContractLengthPipe],
  exports: [GridComponent, ContractLengthPipe]
})

export default class GridModule { };
