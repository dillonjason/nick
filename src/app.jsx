import React, {Fragment} from 'react'

import {Profile} from './components/profile'
import {Gallery} from './components/gallery'

export const App = () => (
  <Fragment>
    <Profile />
    <Gallery />
  </Fragment>
)