import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildRules } from './buildRules';
import { buildResolve } from './buildResolve';
import { webpackOptions } from './types/config';
import { buildDevSrever } from './buildDevServer';

export function webpackConfig(options: webpackOptions): webpack.Configuration {

    const { mode, path, isDev } = options

    return {
        mode,
        entry: path.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: path.output,
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(path, isDev),
        module: {
            rules: buildRules(options),
        },
        resolve: buildResolve(),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevSrever(options) : undefined
    }
}