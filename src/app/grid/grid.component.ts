import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html'
})
export class GridComponent {
    private dealObject: any;
    private dealsResponse: Array<any>;

    private http: Http;

    constructor(http: Http) {
        this.http = http;

    this.http.get('assets/deals.json')
        .map((response: Response) => <any[]>response.json())
        .subscribe(deals => {       
            this.dealObject = deals;
            this.dealsResponse = this.dealObject.deals;
      });
  }
}
