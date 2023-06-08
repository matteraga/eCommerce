import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CartService } from 'src/app/services/cart.service';
import { Router } from "@angular/router";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchString: string = '';
  title = 'QuickDeals';
  categories = this.getCategories();

  constructor(private productService: ProductService, public cartService: CartService, private router: Router) { }

  search(): void {
    this.router.navigate(['/search', this.searchString]);
  }

  getCategories(): Category[] {
    return this.productService.getCategories();
  }
}
