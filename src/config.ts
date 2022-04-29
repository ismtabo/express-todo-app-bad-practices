import dotenv from 'dotenv'

dotenv.config()

export default {
  server: {
    port: process.env.SERVER_PORT ?? 8000,
  },
}
