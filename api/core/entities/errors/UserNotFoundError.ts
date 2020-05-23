import CustomError from '../generic/CustomError';

export class UserNotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('User not found');

    Object.setPrototypeOf(this, UserNotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: 'User not found' }];
  }
}
