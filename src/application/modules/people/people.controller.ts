import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PeopleService } from './people.service';
import { People } from '../../../domain/models/people.model';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreatePeopleDto } from './dtos/create-people.dto';

@ApiTags('people')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('')
  @ApiOperation({ summary: 'Obtener todos los personajes' })
  async findAll(): Promise<People[]> {
    return this.peopleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un personaje por ID' })
  @ApiParam({ name: 'id', description: 'ID del personaje' })
  async findById(@Param('id') id: string): Promise<People> {
    return this.peopleService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo personaje' })
  @ApiBody({ type: CreatePeopleDto })
  async create(@Body() people: People): Promise<void> {
    await this.peopleService.create(people);
  }

}
