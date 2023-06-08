import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: Category[] = [Category.Console, Category.Smartphone];

  products : Product[][] = [];

  constructor(private productService : ProductService)
  {
    for(let c of this.categories)
    {
      this.products.push(this.productService.getProductsByCategory(c,1,4));
    }
  }
}
