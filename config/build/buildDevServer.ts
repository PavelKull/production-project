<<<<<<< HEAD
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
=======
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'; // переименовал конфигурейшн для того чтобы не путать типы
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
