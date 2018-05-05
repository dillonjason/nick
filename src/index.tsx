import {hydrate} from 'react-dom'
import * as React from 'react'

import {App} from './app'

hydrate(
    <App />,
    document.getElementById('app')
)
