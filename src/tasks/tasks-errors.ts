import { NotFoundError } from '../errors'

export class TaskNotFound extends NotFoundError {
  constructor(id) {
    super(`not found task with id "${id}"`)
  }
}
