import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
    selector: 'product-item',
    templateUrl: 'product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
})

export default class ProductItem {
    @Input() product: Product;
}