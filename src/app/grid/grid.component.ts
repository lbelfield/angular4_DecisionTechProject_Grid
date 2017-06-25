import { Component } from '@angular/core';

import { Deal } from './dataContracts/deal';
import { DealService } from './dealService';

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

    onFilterClicked(filterArray: Array<string>): void {
      
      //todo find a better way as pushed for time
      if(filterArray.length === 1){
        this.dealsResponse = this.initialDealsResponse.filter(d => d.title.indexOf(filterArray[0]) !== -1);
      }

      if(filterArray.length === 2){
        this.dealsResponse = this.initialDealsResponse.filter(d => d.title.indexOf(filterArray[0]) !== -1 && d.title.indexOf(filterArray[1]) !== -1);
      }

      if(filterArray.length === 3){
        this.dealsResponse = this.initialDealsResponse.filter(d => d.title.indexOf(filterArray[0]) !== -1 && d.title.indexOf(filterArray[1]) !== -1 && d.title.indexOf(filterArray[2]) !== -1);
      }
      
      if(filterArray.length === 0){
        this.dealsResponse = this.initialDealsResponse;
      }
  }
}
