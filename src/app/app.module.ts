import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ItemsComponent } from './pages/shop/items/items.component';
import { RatingPipe } from './shared/pipes/rating/rating.pipe';
import { DiscountPipe } from './shared/pipes/discount/discount.pipe';
import { SwiperComponent } from './shared/components/swiper/swiper.component';

import ProductItem from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ShopComponent,
    ContactComponent,
    ItemsComponent,
    RatingPipe,
    DiscountPipe,
    SwiperComponent,
    ProductItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPageScrollCoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
