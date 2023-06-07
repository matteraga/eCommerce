import { Category } from "./category";

export class Product
{
    constructor(public name: string, public description: string, public typology: Category, public price: number, public image: string[]){}
}