import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/product";
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-result',
  templateUrl: './category-result.component.html',
  styleUrls: ['./category-result.component.css']
})
export class CategoryResultComponent {
  products: Product[];
  category: Category;
  page: number;
  productPageCount: number;

  constructor(private productService: ProductService, private routeService: ActivatedRoute) {
    this.category = this.routeService.snapshot.params['category'] as Category
    this.page = 1;

    this.products = this.productService.getProductsByCategory(this.category, this.page);
    this.productPageCount = this.productService.categoryPageCount(this.category);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.productPageCount)
      return;

    this.page = page;
    this.products = this.productService.getProductsByCategory(this.category, this.page);
  }

  prevPage() {
    if (this.page <= 1)
      return;

    this.page--;
    this.goToPage(this.page);
  }

  nextPage() {
    if (this.page >= this.productPageCount)
      return;

    this.page++;
    this.goToPage(this.page);
  }
}
