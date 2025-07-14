type mode = 'development' | 'production'

export interface buildPath {
    html: string
    entry: string
    output: string
}

export interface webpackOptions {
    path: buildPath
    mode: mode
    isDev: boolean
    port: number
}

export interface envData{
    port: number
    mode: mode
}