import { Injectable, Logger } from '@nestjs/common';
import { SwapiService } from '../../swapi/swapi.service';

@Injectable()
export class GetPeopleUseCase {
  private readonly logger = new Logger(GetPeopleUseCase.name);

  constructor(private readonly swapiService: SwapiService) {}

  async getPeopleById(id: string): Promise<any> {
    try {
      const person = await this.swapiService.findById(id);
      return this.translateAttributes(person);
    } catch (error) {
      this.logger.error(
        `Error getting character with ID ${id}:`,
        error.message,
      );
      throw error;
    }
  }

  async getAllPeople(): Promise<any[]> {
    try {
      const people = await this.swapiService.findAll();
      return people.map((person) => this.translateAttributes(person));
    } catch (error) {
      this.logger.error('Error getting character list:', error.message);
      throw error;
    }
  }

  private translateAttributes(person: any): any {
    return {
      nombre: person.name,
      anio_nacimiento: person.birth_year,
      color_ojos: person.eye_color,
      color_cabello: person.hair_color,
      altura: person.height,
      masa: person.mass,
      color_piel: person.skin_color,
      planeta_natal: person.homeworld,
      peliculas: person.films,
      especies: person.species,
      naves_estelares: person.starships,
      vehiculos: person.vehicles,
      url: person.url,
      creado: person.created,
      editado: person.edited,
    };
  }
}
