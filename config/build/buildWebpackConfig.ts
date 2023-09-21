import { BuildOptions } from './types/config'
import webpack from 'webpack'

import { buildLoaders } from './buildLoaders'
import { buidPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options
  return {
    //указали тип конфига
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true, //удаляется предыдущая сборка
    },
    plugins: buidPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined, //для отслеживания где именно произошла ошибка
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
