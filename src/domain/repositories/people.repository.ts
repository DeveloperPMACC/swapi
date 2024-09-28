import { People } from '../models/people.model';

export interface PeopleRepository {
  save(people: People): Promise<void>;
  findById(id: string): Promise<People>;
  findAll(): Promise<People[]>;
}
