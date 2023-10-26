import webpack from 'webpack';
<<<<<<< HEAD
=======

>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
<<<<<<< HEAD
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

=======
    const isDev = mode === 'development'; // isDev равен тру когда мод равен девелопмент
    const PORT = env.port || 3000;

>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
<<<<<<< HEAD

=======
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
    return config;
};
