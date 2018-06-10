import React from 'react'
import ReactDom from 'react-dom'
import {ApolloProvider} from 'react-apollo'
import 'flexboxgrid-sass/flexboxgrid.scss'

import {client} from './apollo_client'
import {App} from './app'

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
