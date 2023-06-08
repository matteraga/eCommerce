import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  products: Product[];
  searchString: string;
  page: number;
  maxPage: number;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.searchString = this.route.snapshot.params['search'] || "";

    this.products = this.productService.getProductsByName(this.searchString);
    this.page = 1;
    this.maxPage = this.productService.productPageCount(this.searchString);
  }

  changePage(page: number) {
    this.page = page;
    this.products = this.productService.getProductsByName(this.searchString, this.page);
  }
}
