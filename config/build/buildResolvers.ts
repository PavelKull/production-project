import { ResolveOptions } from 'webpack'
export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], //позволяет не казывать разширение при импортах для указанных расширений файлов
  }
}
