import { Pipe, PipeTransform } from '@angular/core';
import { Deal } from '../dataContracts/deal';

@Pipe({
    name: 'dealFilterPipe'
})

export class DealFilterPipe implements PipeTransform {
    transform(value: Array<Deal>, args: string[]): Array<Deal> {
        return value;
    }
}