import { ValidationError } from 'express-validator';

export class DatabaseConnectionError extends Error {
  reaseon = 'error conecting to db';
  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
