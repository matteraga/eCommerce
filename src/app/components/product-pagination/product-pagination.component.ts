import { Component } from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-pagination',
  templateUrl: './product-pagination.component.html',
  styleUrls: ['./product-pagination.component.css']
})
export class ProductPaginationComponent {
  products: Product[];

  constructor(private productService: ProductService, private routeService: ActivatedRoute) {
    const search: string = this.routeService.snapshot.params['search'];
    const page: number = this.routeService.snapshot.params['page'];
    this.products = this.productService.getProductsByName(search, page);
  }
}
