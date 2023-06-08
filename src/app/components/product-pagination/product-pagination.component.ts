import {Component, Input} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-pagination',
  templateUrl: './product-pagination.component.html',
  styleUrls: ['./product-pagination.component.css']
})
export class ProductPaginationComponent {
  @Input()
  products?: Product[];

  @Input()
  searchString: string = '';
}
