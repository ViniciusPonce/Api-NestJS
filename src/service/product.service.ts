import { Injectable } from '@nestjs/common';
import { Product } from './../model/product.model';

@Injectable()
export class ProductService {
    products: Product[] = [
        // new Product("LIV01", "Livro TDD e BDD na prática", 29.90),
        // new Product("LIV02", "Iniciando com Flutter", 39.90),
        // new Product("LIV03", "Inteligência artificial como serviço", 29.90),
    ];

    findAll(): Product[] {
        return this.products;
    }

    findById(id:number): Product {
        return this.products[0];
    }

    create(product: Product) {
        this.products.push(product);
    }

    update(product: Product): Product {
        return product;
    }

    delete(id: number) {
        this.products.pop();
    }
}