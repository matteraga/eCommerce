import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product?: Product;
  id: number = 0;
  quantity : number = 1;
  constructor(private productService: ProductService, private routerService: ActivatedRoute, private cartService: CartService)
  {
    this.id = routerService.snapshot.params['id'];
    this.product = this.productService.getById(this.id);
  }

  addProduct()
  {
    if(this.product) this.cartService.add(this.product.id, this.quantity);
  }

  changeQuantity(quantity : number)
  {
    this.quantity = quantity;
  }
}