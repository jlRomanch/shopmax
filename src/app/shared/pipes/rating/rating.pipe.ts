import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number): Array<number> {
    const floor = Math.floor(value);
    const round = Math.round(value);

    let rating = [];

    rating = rating.concat(Array(floor).fill(1));
    rating = rating.concat(Array(5 - floor).fill(0));

    if (floor < round) {
      rating[floor] = 2
    }

    return rating;
  }

}
