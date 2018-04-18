import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extendData'
})
export class ExtendDataPipe implements PipeTransform {

  transform(value: any, args?: 't' | 'd'): any {
    console.log(value);

    if (!value) {
      return null;
    }

    let date = new Date(value);
    let moded;

    if (!args) { return date }

    switch (args) {
      case 't':
        moded = date.toTimeString();
        console.log('time ', date);
        break;
      case 'd' :
        moded = date.toDateString();
        console.log('date ', date);
        break;

    }

    return moded;
  }

}
