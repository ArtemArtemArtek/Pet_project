import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { webpackOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildRules(options: webpackOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const babelLoaderTSX = buildBabelLoader({...options, isTSX:true})
    const babelLoaderTS = buildBabelLoader({...options, isTSX:false})
    // const babelLoader = {
    //     test: /\.(js|jsx|tsx)$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: "babel-loader",
    //         options: {
    //             presets: ['@babel/preset-env'],
    //             "plugins": [
    //                 ["i18next-extract", { locales:['ru', 'en'], keyAsDefaultValue: true}],

    //             ]
    //         }
    //     }
    // }
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]'
                    },
                },
            },
            "sass-loader",
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [fileLoader, svgLoader, babelLoaderTSX,babelLoaderTS, typescriptLoader, scssLoader]
}