<<<<<<< HEAD
export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
=======
export type BuildMode = 'production' | 'development'
export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}
export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
}

export interface BuildEnv {
  mode: BuildMode
  port: number
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
}
