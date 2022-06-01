import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './products.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(): Product[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  getProduct(@Param() params): Product {
    return this.productsService.getOne(params.id);
  }

  @Post()
  createProduct(@Body() product: Product) {
    this.productsService.create(product);
  }

  @Put()
  ChangeProduct(@Body() product: Product): Product {
    return this.productsService.change(product);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.productsService.delete(params.id);
  }
}
