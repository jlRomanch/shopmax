import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(product: any): number {
    return product.price - product.price / 100 * product.discount;
  }

}
