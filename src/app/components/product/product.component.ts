import {Component, Input} from '@angular/core';
import {Product} from "../../models/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product?: Product;

  constructor(private router: Router) {}

  goToProductDetail() {
    if (!this.product)
      return;

    this.router.navigate(['/products', this.product.id]);
  }
}
