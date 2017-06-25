import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contractLengthPipe'
})

export class ContractLengthPipe implements PipeTransform {
    transform(value: number, args: string[]): string {
        return value.toString() + "months";
    }
}