import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { SWAPI_CONFIG } from '../../../infrastructure/swapi/config/swapi.config';
import { People } from '../../../domain/models/people.model';

@Injectable()
export class SwapiService {
  private readonly logger = new Logger(SwapiService.name);
  private readonly baseUrl:string;

  constructor() {
    this.baseUrl = SWAPI_CONFIG.baseUrl;
  }

  async findAll(): Promise<People[]> {
    try {
      const response:AxiosResponse = await axios.get(`${this.baseUrl}/people`);
      return response.data.results;
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: string): Promise<People> {
    try {
      const response:AxiosResponse = await axios.get(`${this.baseUrl}/people/${id}`);
      return response.data;
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
