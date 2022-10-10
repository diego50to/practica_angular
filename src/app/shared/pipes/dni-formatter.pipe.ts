import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dniFormatter'
})
export class DniFormatterPipe implements PipeTransform {

  transform(value: number){
    return value.toLocaleString();
  }

}
