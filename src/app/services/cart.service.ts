import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { ProductService } from "./product.service";

@Injectable()
export class CartService {
    readonly cart: [id: number, quntity: number][] = []

    constructor(private productService: ProductService) { }

    private find(id: number): number {
        return this.cart.findIndex(product => product[0] === id)
    }

    add(id: number, quantity: number) {
        let index = this.find(id);
        if (index != -1) {
            this.cart.push([id, quantity])
        } else {
            this.changeQuantity(id, this.cart.at(index)![1] + quantity)
        }
    }

    remove(id: number) {
        let index = this.find(id)
        if (index != -1) {
            this.cart.splice(index, 1)
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

    total(): number {
        let totale = 0;
        this.cart.forEach(id => totale += (this.productService.getById(id[0])?.price == undefined) ? 0 : this.productService.getById(id[0])!.price)
        return totale;
    }

    proced() {

    }
}