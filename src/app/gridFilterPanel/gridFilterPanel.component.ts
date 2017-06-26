import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'grid-filter',
  templateUrl: './gridFilterPanel.component.html',
  styleUrls: ['./gridFilterPanel.component.scss']
})
export class GridFilterPanelComponent {
  private broadbandLabel: string;
  private tvLabel: string;
  private mobileLabel: string;
  private isBroadbandChecked: any;
  private isTvChecked: any;
  private isMobileChecked: any;
  
  @Output() filterClicked: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();  

  // todo unit test
  constructor() {
    this.broadbandLabel = "Broadband";
    this.tvLabel = "TV";
    this.mobileLabel = "Mobile";
    this.isBroadbandChecked = false;
    this.isTvChecked = false;
    this.isMobileChecked = false;
  }

    // todo unit test
    public onClick() {
      var filterArray = new Array<string>();

      if(this.isBroadbandChecked){
        filterArray.push(this.broadbandLabel);
      }
      if(this.isTvChecked){
        filterArray.push("Entertainment");
      }
      if(this.isMobileChecked){
        filterArray.push(this.mobileLabel);
      }

      this.filterClicked.emit(filterArray);
  }
}