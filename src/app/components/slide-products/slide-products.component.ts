import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-slide-products',
  templateUrl: './slide-products.component.html',
  styleUrls: ['./slide-products.component.css']
})
export class SlideProductsComponent
{
  @Input()
  products? : Product[];

  @Input()
  category? : Category;
}
