import { Request, Response } from 'express'
import log from 'log'
import { Task, TaskWithId } from './tasks-models'
import repository from './tasks-respository'

const getTasks = (_, res: Response<TaskWithId[]>) => {
  const tasks = repository.getAll()
  return res.json(tasks)
}

const createTask = (
  req: Request<unknown, Pick<Task, 'value'>>,
  res: Response<TaskWithId>,
) => {
  log.info('creating task')
  const task = repository.createTask({
    value: req.body.value,
    done: false,
  })
  return res.json(task)
}

const updateTask = (
  req: Request<{ id: string }, Partial<Task>>,
  res: Response<TaskWithId>,
) => {
  const task = repository.updateTask(req.params.id, req.body)
  return res.json(task)
}

const deleteTask = (req: Request<{ id: string }>, res: Response) => {
  repository.deleteTask(req.params.id)
  return res.sendStatus(204)
}

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
}
