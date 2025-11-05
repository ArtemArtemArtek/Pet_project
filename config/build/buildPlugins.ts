import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import BundleAnalyzerPlugin from "webpack-bundle-analyzer"
import { buildPath } from './types/config';
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins(paths: buildPath, isDev: boolean, url: string): webpack.WebpackPluginInstance[] {
    const plugins: webpack.WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
            __URL__:url
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.from, to: paths.to },
            ],
        }),
        // isDev? new webpack.HotModuleReplacementPlugin(): null,
        // isDev? new ReactRefreshWebpackPlugin(): null
    ]

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }))
        plugins.push(new BundleAnalyzerPlugin.BundleAnalyzerPlugin({ openAnalyzer: false }),)
    }
    return plugins

}