import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async getAll(): Promise<Livro[]> {
    return this.livrosService.getAll();
  }

  @Get(':id')
  async getLivro(@Param() params): Promise<Livro> {
    return this.livrosService.getOne(params.id);
  }

  @Post()
  async createLivro(@Body() livro: Livro) {
    this.livrosService.create(livro);
  }

  @Put()
  async ChangeLivro(@Body() livro: Livro): Promise<[number, Livro[]]> {
    return this.livrosService.change(livro);
  }

  @Delete(':id')
  async delete(@Param() params) {
    this.livrosService.delete(params.id);
  }
}
