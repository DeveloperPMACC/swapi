import { Module } from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { HttpModule } from '@nestjs/axios';
import { SwapiController } from './swapi.controller';


@Module({
  imports: [HttpModule],
  controllers: [SwapiController],
  providers: [
    SwapiService,
  ],
  exports: [],
})
export class SwapiModule {}
