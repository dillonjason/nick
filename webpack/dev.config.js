import * as path from 'path'
import * as webpack from 'webpack'

export default {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        path.resolve('server', 'index.ts')
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}