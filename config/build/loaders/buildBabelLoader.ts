import { webpackOptions } from "../types/config";

interface loadersProps extends webpackOptions {
    isTSX?: boolean
}

export function buildBabelLoader({ isTSX }: loadersProps) {
    return {
        test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: { 
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                "plugins": [
                    ["i18next-extract", { locales: ['ru', 'en'], keyAsDefaultValue: true }],
                    ["@babel/plugin-transform-typescript", 
                        {
                        isTSX
                    }],
                    // isTSX&&[removeTestIdPlugin,{
                    //     props: ['data-testid']
                    // }],
                    "@babel/plugin-transform-runtime"
                ]
            }
        }
    };
}
