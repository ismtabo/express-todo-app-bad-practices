import { TaskNotFound } from './tasks-errors'
import { Task, TaskWithId } from './tasks-models'

const tasks: TaskWithIndex[] = []
tasks.push({ index: 1, value: 'learn react', done: false })
tasks.push({ index: 2, value: 'Go shopping', done: true })
tasks.push({ index: 3, value: 'buy flowers', done: true })

const createTask = (task: Task) => {
  const newTask = { ...task, index: tasks.length + 1 }
  tasks.push(newTask)
  return intoTaskEntity(newTask)
}

const getAll = () => {
  return tasks.slice().map(intoTaskEntity)
}

const updateTask = (taskId: string, task: Task) => {
  const taskIndex = tasks.findIndex((other) => other.index === +taskId)
  if (taskIndex < 0) {
    throw new TaskNotFound(taskId)
  }
  const previousTask = tasks[taskIndex]
  const newTask = { ...previousTask }
  if (task.value !== undefined) {
    newTask.value = task.value
  }
  if (task.done !== undefined) {
    newTask.done = task.done
  }
  tasks.splice(taskIndex, 1, newTask)
  return intoTaskEntity(newTask)
}

const deleteTask = (taskId: string) => {
  const taskIndex = tasks.findIndex((task) => task.index === +taskId)
  if (taskIndex < 0) {
    throw new TaskNotFound(taskId)
  }
  tasks.splice(taskIndex, 1)
}

interface TaskWithIndex extends Task {
  index: number
}

const intoTaskEntity = (task: TaskWithIndex): TaskWithId => ({
  value: task.value,
  done: task.done,
  id: task.index.toString(),
})

export default {
  getAll,
  createTask,
  updateTask,
  deleteTask,
}
