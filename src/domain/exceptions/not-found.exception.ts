import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(entity: string, id: string) {
    super(`${entity} with ID ${id} not found.`, HttpStatus.NOT_FOUND);
  }
}
