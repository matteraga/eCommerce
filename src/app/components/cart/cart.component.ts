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
  totalCost: number = 0;

  constructor(private cartService: CartService) { 
    this.update();
  }

  update() {
    this.products = this.cartService.getProducts();
    this.totalCost = this.cartService.getTotalCost();
  }
}
