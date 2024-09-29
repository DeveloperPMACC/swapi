import { validate } from 'class-validator';
import { CreatePeopleDto } from '../../../../../src/application/modules/people/dtos/create-people.dto';

describe('CreatePeopleDto', () => {
  let dto: CreatePeopleDto;

  beforeEach(() => {
    dto = new CreatePeopleDto();
  });

  it('should fail if name is empty', async () => {
    dto.name = '';
    dto.birth_year = '19BBY';
    dto.eye_color = 'azul';
    dto.hair_color = 'rubio';
    dto.height = '172';
    dto.mass = '77';
    dto.skin_color = 'clara';
    dto.homeworld = 'Tatooine';
    dto.films = ['https://swapi.py4e.com/api/films/1/'];
    dto.species = [];
    dto.starships = [];
    dto.vehicles = [];
    dto.url = 'https://swapi.py4e.com/api/people/1/';
    dto.created = '2014-12-09T13:50:51.644000Z';
    dto.edited = '2014-12-20T21:17:56.891000Z';

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('name');
  });

  it('should pass validation with correct values', async () => {
    dto.name = 'Luke Skywalker';
    dto.birth_year = '19BBY';
    dto.eye_color = 'azul';
    dto.hair_color = 'rubio';
    dto.height = '172';
    dto.mass = '77';
    dto.skin_color = 'clara';
    dto.homeworld = 'Tatooine';
    dto.films = ['https://swapi.py4e.com/api/films/1/'];
    dto.species = [];
    dto.starships = [];
    dto.vehicles = [];
    dto.url = 'https://swapi.py4e.com/api/people/1/';
    dto.created = '2014-12-09T13:50:51.644000Z';
    dto.edited = '2014-12-20T21:17:56.891000Z';

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should fail if the URL is invalid', async () => {
    dto.name = 'Luke Skywalker';
    dto.birth_year = '19BBY';
    dto.eye_color = 'azul';
    dto.hair_color = 'rubio';
    dto.height = '172';
    dto.mass = '77';
    dto.skin_color = 'clara';
    dto.homeworld = 'Tatooine';
    dto.films = ['https://swapi.py4e.com/api/films/1/'];
    dto.species = [];
    dto.starships = [];
    dto.vehicles = [];
    dto.url = 'invalid-url';
    dto.created = '2014-12-09T13:50:51.644000Z';
    dto.edited = '2014-12-20T21:17:56.891000Z';

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('url');
  });
});
