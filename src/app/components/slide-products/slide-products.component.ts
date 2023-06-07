import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-slide-products',
  templateUrl: './slide-products.component.html',
  styleUrls: ['./slide-products.component.css']
})
export class SlideProductsComponent 
{
  sildeProducts = this.products();

  constructor(private productService: ProductService){}

  products() : Product[] 
  {
    return this.productService.getProductsByCategory(Category.Smartphone);
  }
}
