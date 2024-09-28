import { DynamoDBClient, GetItemCommand, PutItemCommand, ScanCommand } from '@aws-sdk/client-dynamodb';
import { format } from 'date-fns';
import { PeopleRepository } from '../../domain/repositories/people.repository';
import { dynamoDbConfig } from './config/dynamo.config';
import { People } from '../../domain/models/people.model';
import * as process from 'node:process';

export class DynamoDbPeopleRepository implements PeopleRepository {
  private client: DynamoDBClient;

  constructor() {
    this.client = dynamoDbConfig();
  }

  async save(people: People): Promise<void> {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    const params = {
      TableName: process.env.DYNAMODB_TABLE || 'Peoples',
      Item: {
        id: { S: people.id },
        name: { S: people.name },
        birthYear: { S: people.birth_year },
        eyeColor: { S: people.eye_color },
        hairColor: { S: people.hair_color },
        height: { N: people.height },
        mass: { N: people.mass },
        skinColor: { S: people.skin_color },
        homeworld: { S: people.homeworld },
        films: { SS: people.films },
        species: { SS: people.species },
        starships: { SS: people.starships },
        vehicles: { SS: people.vehicles },
        url: { S: people.url },
        createdSwapi: { S: people.created },
        editedSwapi: { S: people.edited },
        created: { S: formattedDate },
      },
    };
    await this.client.send(new PutItemCommand(params));
  }

  async findById(id: string): Promise<People> {
    const params = {
      TableName: process.env.DYNAMODB_TABLE || 'Peoples',
      Key: {
        id: { S: id },
      },
    };

    const result = await this.client.send(new GetItemCommand(params));

    if (!result.Item) {
      throw new Error(`People with ID ${id} not found`);
    }

    return new People(
      result.Item.id.S,
      result.Item.name.S,
      result.Item.birthYear.S,
      result.Item.eyeColor.S,
      result.Item.hairColor.S,
      result.Item.height.S,
      result.Item.mass.S,
      result.Item.skinColor.S,
      result.Item.homeworld.S,
      result.Item.films.SS,
      result.Item.species.SS,
      result.Item.starships.SS,
      result.Item.vehicles.SS,
      result.Item.url.S,
      result.Item.createdSwapi.S,
      result.Item.editedSwapi.S,
    );
  }

  async findAll(): Promise<People[]> {
    const params = {
      TableName: process.env.DYNAMODB_TABLE || 'Peoples',
    };

    const result = await this.client.send(new ScanCommand(params));

    if (!result.Items) {
      return [];
    }

    return result.Items.map(item => new People(
      item.id.S,
      item.name.S,
      item.birthYear.S,
      item.eyeColor.S,
      item.hairColor.S,
      item.height.S,
      item.mass.S,
      item.skinColor.S,
      item.homeworld.S,
      item.films.SS,
      item.species.SS,
      item.starships.SS,
      item.vehicles.SS,
      item.url.S,
      item.createdSwapi.S,
      item.editedSwapi.S,
    ));
  }
}
