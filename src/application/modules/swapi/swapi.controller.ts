import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SwapiService } from './swapi.service';

@ApiTags('swapi')
@Controller('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService ) {}

  @Get('people')
  getAll() {
    return this.swapiService.findAll();
  }

  @Get('people/:id')
  getById(@Param('id') id: string) {
    return this.swapiService.findById(id);
  }
}
