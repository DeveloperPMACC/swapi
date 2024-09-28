import { Module } from '@nestjs/common';
import { PeopleModule } from './application/modules/people/people.module';
import { SwapiModule } from './application/modules/swapi/swapi.module';

@Module({
  imports: [PeopleModule, SwapiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
