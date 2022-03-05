import { ProductService } from './../service/product.service';
import { Product } from './../model/product.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductService) {

    }

    @Get()
    findAll(): Product[] {
        return this.productService.findAll();
    }

    @Get(':id')
    findById(@Param() params): Product {
        return this.productService.findById(params.id);
    }

    @Post()
    create(@Body() product: Product) {
        this.productService.create(product);
    }

    @Put()
    update(@Body() product:Product): Product {
        return this.productService.update(product);
    }

    @Delete(':id')
    delete(@Param() params) {
        this.productService.delete(params.id);
    }
}