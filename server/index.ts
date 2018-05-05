import * as express from 'express'

// Routes
import {viewRouter} from './routers/view'

// Middleware
import {webpackMiddleware} from './middleware/webpack'

const port = process.env.PORT || 8080

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(webpackMiddleware())
}

app.use(viewRouter)

app.listen(port)