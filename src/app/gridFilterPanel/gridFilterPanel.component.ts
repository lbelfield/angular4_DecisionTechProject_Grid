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
  public isBroadbandChecked: boolean;
  public isTvChecked: boolean;
  public isMobileChecked: boolean;
  public filterArray: Array<string>;
  
  @Output() filterClicked: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();  

  constructor() {
    this.broadbandLabel = "Broadband";
    this.tvLabel = "TV";
    this.mobileLabel = "Mobile";
    this.isBroadbandChecked = false;
    this.isTvChecked = false;
    this.isMobileChecked = false;
    this.filterArray = new Array<string>();
  }

    public onClick() {
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

      this.filterClicked.emit(this.filterArray);
  }
}