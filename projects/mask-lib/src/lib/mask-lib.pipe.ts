import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskLib'
})
export class MaskLibPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
