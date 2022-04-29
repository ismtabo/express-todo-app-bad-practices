import httpStatus from 'http-status'

export class ApplicationError extends Error {
  constructor(public statusCode: number, public code: string, message) {
    super(message)
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message) {
    super(httpStatus.NOT_FOUND, 'not_found', message)
  }
}

export class BadRequest extends ApplicationError {
  constructor(message) {
    super(httpStatus.BAD_REQUEST, 'bad_request', message)
  }
}
