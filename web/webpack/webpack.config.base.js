/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const WebpackBar = require('webpackbar');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        tlisweb: path.resolve(__dirname, '../src/index.tsx')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    context: path.resolve(__dirname, '../'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, '../tsconfig.json')
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'happypack/loader?id=ts'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.(scss|sass)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new WriteFilePlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html'
        }),
        new WebpackBar(),
        new HappyPack({
            id: 'ts',
            threads: 3,
            loaders: [
                {
                    path: 'ts-loader',
                    query: { happyPackMode: true }
                },
                { path: 'eslint-loader', query: { fix: true, emitWarning: true } }
            ]
        }),
        new MiniCssExtractPlugin()
    ]
};
