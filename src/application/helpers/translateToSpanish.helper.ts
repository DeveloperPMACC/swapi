import { People } from '../../domain/models/people.model';

export function translateToSpanish(people: People): any {
  return {
    nombre: people.name,
    año_nacimiento: people.birth_year,
    color_ojo: people.eye_color,
    color_cabello: people.hair_color,
    altura: people.height,
    masa: people.mass,
    color_piel: people.skin_color,
    planeta_origen: people.homeworld,
    peliculas: people.films,
    especies: people.species,
    naves: people.starships,
    vehiculos: people.vehicles,
    url: people.url,
    creado: people.created,
    editado: people.edited,
  };
}
