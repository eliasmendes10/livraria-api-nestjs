import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'Listar todos os produtos!';
  }

  @Get(':id')
  getProduct(@Param() params): string {
    return `get one product ${params.id}`;
  }

  @Post()
  createProduct(@Body() product): string {
    console.log(product);
    return 'Produto Criado';
  }

  @Put()
  ChangeProduct(@Body() product): string {
    console.log(product);
    return 'Produto Criado';
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `Delete product code : ${params.id}`;
  }
}
