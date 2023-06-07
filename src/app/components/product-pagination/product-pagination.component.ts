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
  page: number;
  searchString: string;

  constructor(private productService: ProductService, private routeService: ActivatedRoute) {
    this.searchString = this.routeService.snapshot.params['search'];
    this.page = +this.routeService.snapshot.params['page'];

    this.products = this.productService.getProductsByName(this.searchString, this.page);
  }

  goToPage(page: number) {
    this.page = page;
    this.products = this.productService.getProductsByName(this.searchString, this.page);
  }

  prevPage() {
    if (this.page <= 1)
      return;

    this.page--;
    this.goToPage(this.page);
  }

  nextPage() {
    this.page++;
    this.goToPage(this.page);
  }


}
