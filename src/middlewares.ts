import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import { Schema } from 'joi'
import { ApplicationError, BadRequest, NotFoundError } from './errors'
import log from './log'

export const validateBody =
  (schema: Schema) => (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.validate(req.body)
    if (result.error) {
      const errorMessage = result.error.details
        .map((details) => details.message)
        .join(', ')
      next(new BadRequest(errorMessage))
    }
    return next()
  }

export const handleError = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ApplicationError) {
    log.error(err.statusCode, err.stack)
    if (err instanceof NotFoundError) {
      return res.sendStatus(err.statusCode)
    }
    return res
      .status(err.statusCode)
      .json({ code: err.code, message: err.message })
  }
  return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
}
