import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value) {
    	return "$ ".concat(value).concat(".00")
    }
    return "$ 0.00";
  }

}
