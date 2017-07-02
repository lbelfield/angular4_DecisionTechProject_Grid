import { Component } from '@angular/core';

import { Deal } from './dataContracts/deal';
import { DealService } from '../shared/services/deal.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  providers: [DealService]
})
export class GridComponent {
    private dealObject: any;
    private initialDealsResponse: Array<Deal>;
    private dealsResponse: Array<Deal>;
    private dealService: DealService;

    private gridFilterPanelCheckbox: Array<string>;

    private about: string;
    private contractLength: string;
    private speedUsage: string;
    private offer: string;
    private tv: string;
    private mobile: string;
    private cost: string;

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
  }

    public onGridFilterPanelBoxClicked(filterArray: Array<string>): void {

      this.gridFilterPanelCheckbox = filterArray;

  }
}
