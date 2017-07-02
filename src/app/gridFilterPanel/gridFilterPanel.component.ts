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
  private isBroadbandChecked: boolean;
  private isTvChecked: boolean;
  private isMobileChecked: boolean;
  private filterArray: Array<string>;
  
  @Output() checkBoxFilterClicked: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();  

  constructor() {
    this.broadbandLabel = "Broadband";
    this.tvLabel = "TV";
    this.mobileLabel = "Mobile";
    this.isBroadbandChecked = false;
    this.isTvChecked = false;
    this.isMobileChecked = false;
    this.filterArray = new Array<string>();
  }

    public onCheckBoxClick() {
      this.filterArray = []       

      if(this.isBroadbandChecked){
        this.filterArray.push(this.broadbandLabel);
      }
      if(this.isTvChecked){
        this.filterArray.push("Entertainment");
      }
      if(this.isMobileChecked){
        this.filterArray.push(this.mobileLabel);
      }

      this.checkBoxFilterClicked.emit(this.filterArray);
  }
}