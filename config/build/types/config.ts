type mode = 'development' | 'production'

export interface buildPath {
    html: string
    entry: string
    output: string,
    src: string,
    from: string,
    to: string
}

export interface webpackOptions {
    path: buildPath
    mode: mode
    isDev: boolean
    port: number
    url:string
}

export interface envData{
    port: number
    mode: mode
    url: string
}