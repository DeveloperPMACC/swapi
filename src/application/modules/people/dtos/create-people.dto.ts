import { ApiProperty } from '@nestjs/swagger';

export class CreatePeopleDto {
  @ApiProperty({ example: 'Luke Skywalker', description: 'Nombre del personaje' })
  name: string;

  @ApiProperty({ example: '19BBY', description: 'Año de nacimiento' })
  birth_year: string;

  @ApiProperty({ example: 'blue', description: 'Color de ojos' })
  eye_color: string;

  @ApiProperty({ example: 'blond', description: 'Color de cabello' })
  hair_color: string;

  @ApiProperty({ example: '172', description: 'Altura en centímetros' })
  height: string;

  @ApiProperty({ example: '77', description: 'Peso en kilogramos' })
  mass: string;

  @ApiProperty({ example: 'fair', description: 'Color de piel' })
  skin_color: string;

  @ApiProperty({ example: 'Tatooine', description: 'Planeta de origen' })
  homeworld: string;

  @ApiProperty({ example: ['A New Hope', 'The Empire Strikes Back'], description: 'Películas en las que aparece el personaje' })
  films: string[];

  @ApiProperty({ example: ['Human'], description: 'Especies a las que pertenece el personaje' })
  species: string[];

  @ApiProperty({ example: ['X-wing'], description: 'Naves que el personaje ha pilotado' })
  starships: string[];

  @ApiProperty({ example: ['Snowspeeder'], description: 'Vehículos que el personaje ha conducido' })
  vehicles: string[];

  @ApiProperty({ example: 'https://swapi.dev/api/people/1/', description: 'URL del personaje en la API de SWAPI' })
  url: string;

  @ApiProperty({ example: '2014-12-10T16:49:00.000Z', description: 'Fecha de creación' })
  created: string;

  @ApiProperty({ example: '2014-12-20T21:17:56.891000Z', description: 'Fecha de última edición' })
  edited: string;
}
