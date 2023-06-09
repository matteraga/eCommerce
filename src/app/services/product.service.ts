import {Injectable} from "@angular/core";
import {Product} from "../models/product";
import {Category} from "../models/category";

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product(1, 'PS5', 'Una tra le migliori console di sempre', Category.Console, 499.99, ['ps5.png']),
    new Product(2, 'iPhone 12', 'Il nuovo iPhone 12', Category.Smartphone, 599.99, ['iphone12_1.png', 'iphone12_2.png', 'iphone12_3.png'], 472.98),
    new Product(3, 'iPhone 13', 'Il nuovo iPhone 13', Category.Smartphone, 761.99, ['iphone13_2.png', 'iphone13_3.png']),
    new Product(4, 'iPhone 13 Pro', 'Il nuovo iPhone 13 Pro', Category.Smartphone, 810.89, ['iphone13Pro_1_.png', 'iphone13Pro_1.png','iphone13Pro_2.png','iphone13Pro_3.png',]),
    new Product(5, 'iPhone 14 Pro', 'Il nuovo iPhone 14 Pro', Category.Smartphone, 1109.99, ['iphone14Pro_1.png', 'iphone14Pro_2.png', 'iphone14pro_4.png']),
    new Product(6, 'Samsung Galaxy A14', 'Il nuovo Samsung Galaxy A14', Category.Smartphone, 175.18, ['sam14_1.png', 'sam14_2.png']),
    new Product(7, 'Samsung Galaxy s23 Ultra', 'Il nuovo Samsung Galaxy s23 Ultra', Category.Smartphone, 1898.99, ['sam23ult_1.png', 'sam23ult_2.png']),
    new Product(8, 'Xiaomi Redmi Note 12', 'Xiaomi Redmi Note 12', Category.Smartphone, 147.90, ['red12_1.png', 'red12_2.png']),
    new Product(9, 'Xbox Series X', 'La nuova console Xbox Series X', Category.Console, 999.99, ['xboxSX_1.png', 'xboxSX_2.png']),
    new Product(10, 'PS4', 'La nuova console PS4', Category.Console, 999.99, ['ps4_1.png', 'ps4_2.png', 'ps4_3.png']),
    new Product(11, 'Nintendo Switch', 'La nuova console Nintendo Switch', Category.Console, 999.99, ['ns_1.png']),
    new Product(12, 'Xbox One', 'La nuova console Xbox One', Category.Console, 999.99, ['xboxOne_3.png', 'xboxOne_2.png']),
    new Product(13, 'FHD SMART 32" T5372 TV 2020', 'FHD SMART 32" T5372 TV 2020', Category.Tv, 299.99, ['FHDSmart32.png']),
    new Product(14, 'Xiaomi TV Q1E 55', 'Xiaomi TV Q1E 55', Category.Tv, 799.90, ['txXiaomi.png']),
    new Product(15, 'Samsung Neo QLED 8k', 'Samsung Neo QLED 8k', Category.Tv, 1799.99, ['NeoTv.png']),
    new Product(16, 'Mi TV P1 43"', 'Mi TV P1 43"', Category.Tv, 449.89, ['MiTv.png']),
    new Product(17, 'TCL P615 4K Android TV With TCL AI IN', 'TCL P615 4K Android TV With TCL AI IN', Category.Tv, 299.49, ['TclTv.png']),
    new Product(18, 'Samsung Smart TV 65" 4K Full HD', 'Samsung Smart TV 65" 4K Full HD', Category.Tv, 1299.49, ['samSmartTv.png']),
    new Product(19, 'TCL TV P635 | 4K HDR Google TV', 'Buy TCL TV P635 | 4K HDR Google TV', Category.Tv, 292.77, ['TclTv_2.png']),
    new Product(20, 'AMD Ryzen 9 PC Gaming', 'PC GAMING AMD Ryzen 9 5900X 12 Core 3,7/4,8GHz 32GB DDR4 1TB SSD Radeon 6700XT 8GB D6 WI FI Windows 11 PRO', Category.Pc, 2430.00, ['pcGaming_1.png']),
    new Product(21, 'XTREME GAMER PC DIABLO V33', 'AMD Ryzen 7 7700X @ 5,6 GHz; Water Cooling 280 RGB; 32GB DDR 5 RAM with RGB; 1TB SSD M.2 + 1TB HDD; Bluetooth & WLAN; NVIDIA GeForce RTX 4070 TI OC', Category.Pc, 3108.11, ['pcGaming_2.png']),
    new Product(22, 'PC Gaming SUPER | Gorillab', 'Il nuovo iPhone 12', Category.Pc, 3375.14, ['pcGaming_3.png']),
    new Product(23, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(24, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(25, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(26, 'iPhone 12 c', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(27, 'iPhone 12 d', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(28, 'iPhone 12 e', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(29, 'iPhone 12 f', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(4, 'iPhone 12 c', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(5, 'iPhone 12 d', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(6, 'iPhone 12 e', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(7, 'iPhone 12 f', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(4, 'iPhone 12 c', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(5, 'iPhone 12 d', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(6, 'iPhone 12 e', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(7, 'iPhone 12 f', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 eeeee', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(9, 'NVIDIA RTX 3080', 'La nuova scheda video di NVIDIA', Category.Pc, 699.99, ['3080.jpg']),
  ];

  private filterCategory = (p: Product, category: Category): boolean => {
    return p.category == category;
  }

  private filterName = (p: Product, name: string): boolean => {
    return p.name.toLowerCase().includes(name.toLowerCase());
  }

  getById(id: number): Product | undefined {
    return this.products.find(p => p.id == id);
  }

  getCategories(): Category[] {
    return Object.values(Category);
  }

  getProductsByCategory(category: Category, page: number = 1, pageSize: number = 20): Product[] {
    return this.getProducts(p => p.category == category, page, pageSize);
  }

  getProductsInCategory(category: Category, search: string, page: number = 1, pageSize: number = 20): Product[] {
    return this.getProducts(p => p.category == category && p.name.toLowerCase().includes(search.toLowerCase()), page, pageSize);
  }

  getProductsByName(search: string, page: number = 1, pageSize: number = 20): Product[] {
    return this.getProducts(p => p.name.toLowerCase().includes(search.toLowerCase()), page, pageSize);
  }

  private getProducts(predicate: (p: Product) => boolean, page: number = 1, pageSize: number = 20): Product[] {
    return this.products
      .filter(predicate)
      .slice((page - 1) * pageSize, page * pageSize);
  }

  getRandomCategory(): Category {
    const randomIndex = Math.floor(Math.random() * this.getCategories().length);
    return this.getCategories()[randomIndex];
  }

  getRandomProduct(category: Category = this.getRandomCategory()): Product {
    const products = this.getProductsByCategory(category);  // Get random only from the first page
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  }

  productPageCount(search: string, pageSize: number = 20): number {
    return Math.ceil(this.products.filter(p => this.filterName(p, search)).length / pageSize);
  }

  categoryPageCount(category: Category, pageSize: number = 20): number {
    return Math.ceil(this.products.filter(p => this.filterCategory(p, category)).length / pageSize);
  }

  productsInCategoryPageCount(category: Category, searchString: string, pageSize: number = 20): number {
    return Math.ceil(this.products.filter(p => this.filterCategory(p, category) && this.filterName(p, searchString)).length / pageSize);
  }
}
