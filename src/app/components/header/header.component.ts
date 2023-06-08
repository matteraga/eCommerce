import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CartService } from 'src/app/services/cart.service';
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
  numberOfItems = this.getItemsInCart();

  constructor(private productService : ProductService, private cartService: CartService){}

  search() : void
  {
    this.productService.getProductsByName(this.searchString);
  }

  getCategories() : Category[]
  {
    return this.productService.getCategories();
  }

  getItemsInCart(): number {
    return this.cartService.getTotalQuantity();
  }
}
