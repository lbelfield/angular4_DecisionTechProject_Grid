import { Component } from '@angular/core';

@Component({
  selector: 'grid-filter',
  templateUrl: './gridFilterPanel.component.html',
  styleUrls: ['./gridFilterPanel.component.scss']
})
export class GridFilterPanelComponent {
  private broadbandLabel: string;
  private tvLabel: string;
  private mobileLabel: string;  

  constructor() {
    this.broadbandLabel = "Broadband";
    this.tvLabel = "TV";
    this.mobileLabel = "Mobile";
  }
}