import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { ProductsService } from './products.service'
import { Product } from './product.model';

@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductsService){

    };

    @Post()
    add(
        @Body('title') title: string, 
        @Body('description') description: string, 
        @Body('price') price: number): any {

        return {
            'id': this.productsService.add(title, description, price)
        }
    };

    @Get()
    getAll(): Product[]{
        return this.productsService.getAll();
    }

    @Get(':id')
    get(@Param('id') id: string): Product{
        return this.productsService.get(id);
    }
}