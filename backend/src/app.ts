import express from 'express'
import { router } from './routes'
import http from 'http'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3003, () => console.log('🚀 Server Online'))
