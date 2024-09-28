import { Test, TestingModule } from '@nestjs/testing';
import { GetPeopleUseCase } from '../../../../../src/application/modules/people/use-cases/get-people.usecase';
import { SwapiService } from '../../../../../src/application/modules/swapi/swapi.service';

describe('GetPeopleUseCase', () => {
  let useCase: GetPeopleUseCase;
  let swapiService: SwapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetPeopleUseCase,
        {
          provide: SwapiService,
          useValue: {
            getPeopleById: jest.fn(),
            getAllPeople: jest.fn(),
          },
        },
      ],
    }).compile();

    useCase = module.get<GetPeopleUseCase>(GetPeopleUseCase);
    swapiService = module.get<SwapiService>(SwapiService);
  });

  describe('getPeopleById', () => {
    it('should get and translate a character by its ID', async () => {
      const id = '1';
      const mockPeople = {
        name: 'Luke Skywalker',
        birth_year: '19BBY',
        eye_color: 'blue',
        hair_color: 'blond',
        height: '172',
        mass: '77',
        skin_color: 'fair',
        homeworld: 'Tatooine',
        films: ['https://swapi.py4e.com/api/films/1/'],
        species: [],
        starships: [],
        vehicles: [],
        url: 'https://swapi.py4e.com/api/people/1/',
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
      };

      jest.spyOn(swapiService, 'getPeopleById').mockResolvedValue(mockPeople);

      const result = await useCase.getPeopleById(id);

      expect(result).toEqual({
        nombre: 'Luke Skywalker',
        anio_nacimiento: '19BBY',
        color_ojos: 'blue',
        color_cabello: 'blond',
        altura: '172',
        masa: '77',
        color_piel: 'fair',
        planeta_natal: 'Tatooine',
        peliculas: ['https://swapi.py4e.com/api/films/1/'],
        especies: [],
        naves_estelares: [],
        vehiculos: [],
        url: 'https://swapi.py4e.com/api/people/1/',
        creado: '2014-12-09T13:50:51.644000Z',
        editado: '2014-12-20T21:17:56.891000Z',
      });
    });

    it('should throw an error if character acquisition fails', async () => {
      const id = '999';
      jest
        .spyOn(swapiService, 'getPeopleById')
        .mockRejectedValue(new Error('Error in SWAPI'));

      await expect(useCase.getPeopleById(id)).rejects.toThrow('Error in SWAPI');
    });
  });

  describe('getAllPeople', () => {
    it('should get and translate the list of characters', async () => {
      const mockPeople = [
        {
          name: 'Luke Skywalker',
          birth_year: '19BBY',
          eye_color: 'blue',
          hair_color: 'blond',
          height: '172',
          mass: '77',
          skin_color: 'fair',
          homeworld: 'Tatooine',
          films: ['https://swapi.py4e.com/api/films/1/'],
          species: [],
          starships: [],
          vehicles: [],
          url: 'https://swapi.py4e.com/api/people/1/',
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
        },
      ];

      jest.spyOn(swapiService, 'getAllPeople').mockResolvedValue(mockPeople);

      const result = await useCase.getAllPeople();

      expect(result).toEqual([
        {
          nombre: 'Luke Skywalker',
          anio_nacimiento: '19BBY',
          color_ojos: 'blue',
          color_cabello: 'blond',
          altura: '172',
          masa: '77',
          color_piel: 'fair',
          planeta_natal: 'Tatooine',
          peliculas: ['https://swapi.py4e.com/api/films/1/'],
          especies: [],
          naves_estelares: [],
          vehiculos: [],
          url: 'https://swapi.py4e.com/api/people/1/',
          creado: '2014-12-09T13:50:51.644000Z',
          editado: '2014-12-20T21:17:56.891000Z',
        },
      ]);
    });

    it('should throw an error if getting the character list fails', async () => {
      jest
        .spyOn(swapiService, 'getAllPeople')
        .mockRejectedValue(new Error('Error in SWAPI'));

      await expect(useCase.getAllPeople()).rejects.toThrow('Error in SWAPI');
    });
  });
});
