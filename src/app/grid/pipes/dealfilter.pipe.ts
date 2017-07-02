import { Pipe, PipeTransform } from '@angular/core';
import { Deal } from '../dataContracts/deal';

@Pipe({
    name: 'dealFilterPipe'
})

export class DealFilterPipe implements PipeTransform {
    transform(deals: Array<Deal>, filterBy: Array<string>): Array<Deal> {
        
        if(!filterBy) {
            return deals;
        }

        if(filterBy.length === 0) {
            return deals;
        }
        
        if(filterBy.length === 1)
        {
            return deals.filter((deal : Deal) => deal.title.indexOf(filterBy[0]) !== -1);
        }

        if(filterBy.length === 2)
        {
            return deals.filter((deal : Deal) => deal.title.indexOf(filterBy[0]) !== -1 && deal.title.indexOf(filterBy[1]) !== -1);
        }

        if(filterBy.length === 3)
        {
            return deals.filter((deal : Deal) => deal.title.indexOf(filterBy[0]) !== -1 && deal.title.indexOf(filterBy[1]) !== -1 && deal.title.indexOf(filterBy[2]) !== -1);
        }
    }
}