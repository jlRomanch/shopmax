import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit, AfterViewInit {
  swiper: Swiper

  @Input() slides;
  @Input() config;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.config) {
      this.swiper = new Swiper('.swiper-container', {
        ...this.config,
        navigation: {
          prevEl: '.swiper-btn-prev',
          nextEl: '.swiper-btn-next'
        }
      });
    } else {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        navigation: {
          prevEl: '.swiper-btn-prev',
          nextEl: '.swiper-btn-next'
        },
        spaceBetween: 30
      });
    }
  }

}
