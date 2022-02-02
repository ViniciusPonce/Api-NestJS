import { ProductService } from './service/product.service';
import { ProductsController } from './controller/products.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController
  ],
  providers: [
    AppService,
    ProductService
  ],
})
export class AppModule {}
