import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Deal } from './dataContracts/deal';

// todo create a shared folder and extract this out into a shared module?

@Injectable()
export class DealService {

    private http: Http;

    constructor(http: Http) {
        this.http = http;
     }

    getProducts(): Observable<Deal[]> {
        return this.http.get('assets/deals.json')
            .map((response: Response) => <Deal[]>response.json());
  }
}
