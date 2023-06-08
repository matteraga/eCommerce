import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {ProductService} from "./services/product.service";
import { CartService } from './services/cart.service';
import { CartComponent } from './components/cart/cart.component';
import {ProductComponent} from "./components/product/product.component";
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductPaginationComponent } from './components/product-pagination/product-pagination.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { SlideProductsComponent } from './components/slide-products/slide-products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    FooterComponent,
    HomeComponent,
    ProductPaginationComponent,
    CartProductComponent,
    QuantityComponent,
    SlideProductsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
