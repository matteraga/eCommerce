import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { ProductService } from "./product.service";

@Injectable()
export class CartService {
    private cart: [id: number, quantity: number][] = [
        [1, 2], [2, 2]
    ];

    constructor(private productService: ProductService) { }

    private find(id: number): number {
        return this.cart.findIndex(product => product[0] == id);
    }

    add(id: number, quantity: number) {
        let index = this.find(id);
        if (index == -1) {
            this.cart.push([id, quantity])
        } else {
            this.changeQuantity(id, this.cart.at(index)![1] + quantity)
        }
    }

    remove(id: number) {
        let index = this.find(id)
        if (index != -1) {
            this.cart.splice(index, 1)
            //this.changeQuantity(id, 0);
        }
    }

    changeQuantity(id: number, quantity: number) {
        let index = this.find(id)
        if (index != -1) {
            let product = this.cart.at(index)

            if (product != undefined) {
                product[1] = quantity
            }
        }
    }

    getProducts(): (Product | undefined)[] {
        return this.cart.map(
            prod => this.productService.getById(prod[0])
        )
    }

    getQuantity(id: number): number {
        let index = this.find(id);
        return this.cart.at(index)![1];
    }

    getTotalQuantity(): number {
        return this.cart.reduce((sum, current) => sum + current[1], 0);
    }

    getTotalCost(): number {
        return this.cart.reduce((sum, current) => sum + (this.productService.getById(current[0])!.price * current[1]), 0);
    }
}