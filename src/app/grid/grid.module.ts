import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { GridFilterPanelModule } from '../gridFilterPanel/gridFilterPanel.module';

import { GridComponent } from './grid.component';
import { ContractLengthPipe } from './pipes/contractLength.pipe';
import { DealFilterPipe } from './pipes/dealFilter.pipe';

@NgModule({
  imports: [BrowserModule, HttpModule, GridFilterPanelModule],
  declarations: [GridComponent, ContractLengthPipe, DealFilterPipe],
  exports: [GridComponent, ContractLengthPipe, DealFilterPipe]
})

export class GridModule { };
