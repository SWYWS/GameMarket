import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterString'
})
export class FilterStringPipe implements PipeTransform {

  transform(value: number | string): string {
    return (typeof value == "number") ? "" : value;
  }

}
