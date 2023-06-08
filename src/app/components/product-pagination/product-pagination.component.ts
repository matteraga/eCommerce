import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";

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

  @Input()
  page: number = 1;

  @Input()
  maxPage: number = 1;

  @Output()
  changePageEvent: EventEmitter<any> = new EventEmitter();

  constructor(private productService: ProductService) {}

  goToPage(page: number) {
    this.page = page;
    this.changePageEvent.emit(page);
  }

  prevPage() {
    this.page--;
    this.goToPage(this.page);
  }

  nextPage() {
    this.page++;
    this.goToPage(this.page);
  }
}
