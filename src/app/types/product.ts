import {Size} from './size';
import {Category} from './category';

export interface Product {
    id: string;
    categories: Category[];
    name: string;
    image: string;
    price: number;
    oldPrice?: number;
    rating?: number;
    size?: Size;
}