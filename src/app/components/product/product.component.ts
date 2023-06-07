import {Component} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Product | undefined = undefined;

  // todo remove this
  constructor(private productService: ProductService) {
    this.product = this.productService.getRandomProduct(Category.Console);
  }

  protected readonly undefined = undefined;
}
