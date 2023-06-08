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
  
  @Input() product?: Product;
  
  quantity : number = 1;

  constructor(private cartService : CartService){}

  addProduct()
  {
    if(this.product) this.cartService.add(this.product.id, this.quantity);
  }

  changeQuantity(quantity : number)
  {
    this.quantity = quantity;
  }
}