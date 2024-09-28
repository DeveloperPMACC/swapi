import { Module } from '@nestjs/common';
import { DynamoDbPeopleRepository } from '../../../infrastructure/dynamodb/dynamodb-people.repository';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { SwapiService } from '../swapi/swapi.service';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [HttpModule],
  controllers: [PeopleController],
  providers: [
    PeopleService,
    SwapiService,
    {
      provide: 'PeopleRepository',
      useClass: DynamoDbPeopleRepository,
    },
  ],
  exports: ['PeopleRepository'],
})
export class PeopleModule {}
