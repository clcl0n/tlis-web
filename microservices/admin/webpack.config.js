/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const HappyPack = require('happypack');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: {
        server: path.resolve(__dirname, './src/index.ts')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'commonjs'
    },
    context: path.resolve(__dirname, './'),
    target: 'node',
    mode: 'development',
    node: {
        global: false,
        __filename: false,
        __dirname: false
    },
    externals: ['express', 'mongodb', 'bcrypt'],
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'happypack/loader?id=ts'
            }
        ]
    },
    plugins: [
        new WriteFilePlugin(),
        new CleanWebpackPlugin(),
        new WebpackBar({
            name: 'Building API'
        }),
        new HappyPack({
            id: 'ts',
            threads: 3,
            loaders: [
                {
                    path: 'ts-loader',
                    query: { happyPackMode: true }
                }
                // { path: "eslint-loader", query: { fix: true, emitWarning: true } }
            ]
        })
    ]
};
