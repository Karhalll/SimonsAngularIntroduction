import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMoney'
})
export class FormatMoneyPipe implements PipeTransform {

  transform(value: number): string {
		console.log(value);
    return value + " $";
  }
}
