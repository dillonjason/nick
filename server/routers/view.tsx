import * as express from 'express'
import * as React from 'react'
import {renderToNodeStream} from 'react-dom/server'

import {Html} from '../html/index'
import {App} from '../../src/app'

export const viewRouter = express.Router()

viewRouter.get('/', (req, res) => {
    renderToNodeStream(
        <Html>
            <App />
        </Html>
    ).pipe(res)
})
