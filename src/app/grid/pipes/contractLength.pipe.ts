import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contractLengthPipe'
})

export class ContractLengthPipe implements PipeTransform {
    transform(value: number): string {
        return value.toString() + " months";
    }
}