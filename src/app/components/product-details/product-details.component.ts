import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product?: Product;
  id: number = 0;
  constructor(private productService: ProductService, private routerService: ActivatedRoute)
  {
    this.id = routerService.snapshot.params['id'];
    this.product = this.productService.getById(this.id);
  }

  addProduct()
  {
    
  }
}
