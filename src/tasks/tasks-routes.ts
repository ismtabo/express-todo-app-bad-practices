import express from 'express'
import Joi from 'joi'
import { validateBody } from '../middlewares'
import controller from './tasks-controllers'

const router = express.Router()

router.get('/', controller.getTasks)

const createTaskBodySchema = Joi.object({
  value: Joi.string(),
})
router.post('/', validateBody(createTaskBodySchema), controller.createTask)

router.delete('/:id', controller.deleteTask)

const patchTaskBodySchema = Joi.object({
  value: Joi.string().optional(),
  done: Joi.boolean().optional(),
})
router.patch('/:id', validateBody(patchTaskBodySchema), controller.updateTask)

export default router
