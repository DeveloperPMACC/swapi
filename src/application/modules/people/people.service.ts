import { Inject, Injectable, Logger } from '@nestjs/common';
import { PeopleRepository } from '../../../domain/repositories/people.repository';
import { People } from '../../../domain/models/people.model';
import { SwapiService } from '../swapi/swapi.service';

@Injectable()
export class PeopleService {
  private readonly logger = new Logger(SwapiService.name);

  constructor(
    @Inject('PeopleRepository')
    private readonly peopleRepository: PeopleRepository,
    private readonly swapiService: SwapiService,
  ) {}

  async findAll(): Promise<People[]> {
    return await this.peopleRepository.findAll();
  }

  async findById(id: string): Promise<People> {
    return await this.peopleRepository.findById(id);
  }

  async create(people: People): Promise<void> {
    await this.peopleRepository.save(people);
  }
}
