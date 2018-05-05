import client from 'webpack-hot-client'
import * as middleware from 'webpack-dev-middleware'
import * as webpack from 'webpack'

import config from '../../webpack/dev.config'

export const webpackMiddleware = () => {
    const compiler = webpack(config)
    const {publicPath} = config.output
    const options = {}

    client(compiler, options)
    return middleware(compiler, {publicPath})
}
