import express from 'express'
import tasksRouter from './tasks/tasks-routes'
const router = express.Router()

router.use('/tasks', tasksRouter)

export default router
