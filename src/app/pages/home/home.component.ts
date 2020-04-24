import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  populars = [
    {
      name: 'Gray Shoe',
      img: 'assets/images/prod_2.png',
      price: 28
    },
    {
      name: 'Blue Shoe High Heels',
      img: 'assets/images/prod_3.png',
      price: 28,
      discount: 20
    },
    {
      name: 'Denim Jacket',
      img: 'assets/images/model_5.png',
      price: 28,
      rating: 3,
      discount: 10
    },
    {
      name: 'Leather Green Bag',
      img: 'assets/images/prod_1.png',
      price: 28,
      rating: 3.5,
      discount: 50
    },
    {
      name: 'Smooth Cloth',
      img: 'assets/images/model_1.png',
      price: 28
    },
    {
      name: 'Yellow Jacket',
      img: 'assets/images/model_7.png',
      price: 28
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
