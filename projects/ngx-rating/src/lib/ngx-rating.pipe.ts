import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxRating'
})
export class NgxRatingPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
