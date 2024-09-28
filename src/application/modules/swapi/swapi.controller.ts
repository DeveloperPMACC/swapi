import { Controller, Get, Param } from '@nestjs/common';
import { translateToSpanish } from '../../helpers/translateToSpanish.helper';
import { People } from '../../../domain/models/people.model';
import { ApiTags } from '@nestjs/swagger';
import { SwapiService } from './swapi.service';

@ApiTags('swapi')
@Controller('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService ) {}

  @Get('people')
  async getAll() {
    return await this.swapiService.findAll();
  }

  @Get('people/:id')
  async getById(@Param('id') id: string) {
    return await this.swapiService.findById(id);
  }
}
