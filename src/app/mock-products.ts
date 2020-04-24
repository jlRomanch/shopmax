import { Product } from './types/product';
import { Category } from './types/category';

export const PRODUCTS: Product[] = [
    {
        id: "shoes-1",
        categories: [Category.Shoes, Category.Men],
        name: "Grey Shoe",
        price: 20,
        image: "assets/images/prod_2.png",
    },
    {
        id: "shoes-2",
        categories: [Category.Shoes, Category.Women],
        name: "Blue Shoe High Heels",
        price: 28,
        oldPrice: 46,
        image: "assets/images/prod_3.png"
    },
    {
        id: "model-5",
        categories: [Category.Men, Category.Jackets],
        name: "Denim Jacket",
        image: "assets/images/model_5.png",
        price: 28,
        oldPrice: 46,
        rating: 5
    }
];