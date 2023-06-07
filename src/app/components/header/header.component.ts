import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{
  searchString : string = '';
  title = 'eCommerce';
  cat = this.getCategories();

  constructor(private productService : ProductService){}

  search() : void
  {
    this.productService.getProductsByName(this.searchString);
  }

  getCategories() : Category[]
  {
    return this.productService.getCategories();
  }
  
}
