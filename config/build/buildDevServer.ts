import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'; // переименовал конфигурейшн для того чтобы не путать типы
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
