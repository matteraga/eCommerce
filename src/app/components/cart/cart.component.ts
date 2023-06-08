import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: (Product | undefined)[] = [];
  subTotal: number = 0;
  totalCost: number = 0;

  constructor(private cartService: CartService) { 
    this.update();
  }

  update() {
    this.products = this.cartService.getProducts();
    this.subTotal = this.cartService.getTotalCost();
    this.totalCost = this.subTotal + 5.99;
  }
  
  clear() {
    this.cartService.clear();
    this.update();
  }
}
