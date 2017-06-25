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
    private dealsResponse: Array<Deal>;
    private dealService: DealService;

  constructor(dealService: DealService) {
    this.dealService = dealService;

    this.dealService.getProducts()
      .subscribe(deals => {
        this.dealObject = deals;
        this.dealsResponse = this.dealObject.deals;
      });
  }
}
