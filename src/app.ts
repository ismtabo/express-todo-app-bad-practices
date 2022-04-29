import bodyParser from 'body-parser'
import config from 'config'
import express from 'express'
import log from 'log'
import { handleError } from 'middlewares'
import router from 'routes'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/v1', router)
app.use(handleError)
app.listen(config.server.port, () => log.info('Example app running!'))
