import { Product } from './model/product.model';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { ProductService } from './service/product.service';
import { ProductsController } from './controller/products.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'apinestjs',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Product])
  ],
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
