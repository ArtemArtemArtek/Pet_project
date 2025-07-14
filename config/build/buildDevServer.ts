import { webpackOptions } from "./types/config";
import type { Configuration as devServerConfiguration } from "webpack-dev-server";

export function buildDevSrever(options: webpackOptions): devServerConfiguration{
    return{
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
}