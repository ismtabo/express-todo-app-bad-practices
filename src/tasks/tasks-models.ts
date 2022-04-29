export interface Task {
  value: string
  done: boolean
}

export interface TaskWithId extends Task {
  id: string
}
