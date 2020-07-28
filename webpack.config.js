const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    };

    if (!isDev) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin(),
        ];
    }

    return config;
};

const styleLoaders = additionalLoader => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true,
            },
        },
        'css-loader',
    ];

    if (additionalLoader) {
        loaders.push(additionalLoader);
    }

    return loaders;
};

const babelOptions = preset => {
    const config = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties',
        ],
    };

    if (preset) {
        config.presets.push(preset);
    }

    return config;
};

const jsLoaders = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: babelOptions(),
        },
    ];

    if (isDev) {
        loaders.push({
            loader: 'eslint-loader',
        });
    }

    return loaders;
};

const plugins = () => {
    const base = [
        new CleanWebpackPlugin(),
        /*new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/index.d.ts'),
                to: path.resolve(__dirname, 'lib'),
            },
        ]),*/
        new MiniCssExtractPlugin({
            filename: 'index.css',
        }),
        new DeclarationBundlerPlugin({
            moduleName:'Component',
            out:'index.d.ts',
        }),
    ];

    /*if (!isDev) {
        base.push(new BundleAnalyzerPlugin());
    }*/

    return base;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
    },
    resolve: {
        extensions: ['.ts', 'tsx', '.js', '.jsx', '.json', '.png'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev,
    },
    devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: styleLoaders(),
            },
            {
                test: /\.s[ac]ss$/,
                use: styleLoaders('sass-loader'),
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader'],
            },
            {
                test: /\.xml$/,
                use: ['xml-loader'],
            },
            {
                test: /\.csv$/,
                use: ['csv-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react'),
                },
            },
        ],
    },
};
