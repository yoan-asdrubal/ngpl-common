import {Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Pipe({
    name: 'ngplTruncateNumber'
})
export class NgplTruncateNumberPipe implements PipeTransform {

    constructor(private decimalPipe: DecimalPipe) {
    }

    transform(value: number): string {
        if (isNaN(value)) {
            return null;
        } else {
            if (!!value) {
                const decimal = this.decimalPipe.transform(value, '1.3-3').toString().replace(',', '.');
                // console.log('decimal', +decimal);
                const numeroARestar = `0.00${decimal.toString().slice(-1)}`;
                // console.log('numeroARestar', +numeroARestar);
                // console.log('resta', +decimal - +numeroARestar);
                // console.log('result', this.decimalPipe.transform(value > 0 ? (+decimal - +numeroARestar) : (+decimal + +numeroARestar), '1.0-2'));
                // console.log('-----------');
                return this.decimalPipe.transform(value > 0 ? (+decimal - +numeroARestar) : (+decimal + +numeroARestar), '1.0-2');
            }
            return null;
        }
    }

}
