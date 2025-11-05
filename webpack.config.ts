import path from 'path'
import webpack from 'webpack';
import { webpackConfig } from './config/build/buildWebpackConfig';
import { buildPath } from './config/build/types/config';
import { envData } from './config/build/types/config';

export default (env: envData) => {
    const paths: buildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
        from: path.resolve(__dirname, 'public', 'locales'),
        to:  path.resolve(__dirname, 'build')
    }

    const mode = env.mode||'development'
    // const url = env.url||'http://localhost:8000'
    const port = env.port||3000

    const isDev = mode === 'development'

    const config: webpack.Configuration = webpackConfig({ path: paths, mode, port, isDev})

    return config
}