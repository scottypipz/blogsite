import * as functions from 'firebase-functions'
import * as express from 'express'
import WriterRoute from './routes/writers'
import { applyMiddleware } from './utils'
import middlewares from './middlewares'
import errorHandlers from './middlewares/errorHandlers'

const app = express()
app.get('/api/timestamp', (request, response) => {
    response.send(`Now - ${Date.now()}`)
})

applyMiddleware(middlewares, app)
app.use('/api/writers', (new WriterRoute).routes())
applyMiddleware(errorHandlers, app)
exports.api = functions.https.onRequest(app)
