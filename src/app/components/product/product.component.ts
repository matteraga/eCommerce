import { Component } from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Product | undefined;

  constructor(private productService: ProductService) {
    this.product = this.productService.getById(1);
  }
}
