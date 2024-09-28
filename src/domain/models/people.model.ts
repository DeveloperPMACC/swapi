export class People {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly birth_year: string,
    public readonly eye_color: string,
    public readonly hair_color: string,
    public readonly height: string,
    public readonly mass: string,
    public readonly skin_color: string,
    public readonly homeworld: string,
    public readonly films: string[],
    public readonly species: string[],
    public readonly starships: string[],
    public readonly vehicles: string[],
    public readonly url: string,
    public readonly created: string,
    public readonly edited: string,
  ) {}
}
