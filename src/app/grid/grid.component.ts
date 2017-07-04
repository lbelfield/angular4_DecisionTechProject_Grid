import { Component } from '@angular/core';

import { Deal } from './dataContracts/deal';
import { DealService } from '../shared/services/deal.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [DealService]
})
export class GridComponent {
    private dealObject: any;
    private initialDealsResponse: Array<Deal>;
    private dealsResponse: Array<Deal>;
    private dealService: DealService;

    private gridFilterPanelCheckbox: Array<string>;

    // titles
    private about: string;
    private contractLength: string;
    private speedUsage: string;
    private offer: string;
    private tv: string;
    private mobile: string;
    private cost: string;

    // labels
    private mobileData: string;
    private mobileMinutes: string;
    private mobileTexts: string;
    private mobileConnection: string; 

  constructor(dealService: DealService) {
    this.dealService = dealService;
    this.dealService.getProducts()
      .subscribe(deals => {
        this.dealObject = deals;
        this.initialDealsResponse = this.dealObject.deals;
        this.dealsResponse = this.initialDealsResponse;
      });
      
      this.about = "About";
      this.contractLength = "contract length";
      this.speedUsage = "speed/usage";
      this.offer = "Offer";
      this.tv = "TV";
      this.mobile = "Mobile";
      this.cost = "Cost";

      this.mobileData = "Data:";
      this.mobileMinutes = "Minutes:";
      this.mobileTexts = "Texts:";
      this.mobileConnection = "Connection:";
  }

    public onGridFilterPanelBoxClicked(filterArray: Array<string>): void {

      this.gridFilterPanelCheckbox = filterArray;

  }
}
