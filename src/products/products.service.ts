import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from './product.model';

@Injectable()
export class ProductsService{
    private products: Product[] = [];

    add(title: string, description: string, price: number):string{
        const productId = '1';
        const newProduct = new Product(productId, title, description, price);
        this.products.push(newProduct);

        return productId;
    }

    getAll(): Product[]{
        return this.products;
    }

    get(id: string): Product{
        const product = this.products.find((prod) => prod.id === id);

        if(!product){
            throw new NotFoundException('Could not find product')
        }

        return product;
    }
}