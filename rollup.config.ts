import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import json from 'rollup-plugin-json'
import camelCase from 'lodash.camelcase'

const pkg = require('./package.json')

const libraryName = 'objectenc-js'

export default {
    input: `dist/es/${libraryName}.js`,
    output: [
        { file: pkg.main, name: camelCase(libraryName), format: 'umd' },
        { file: pkg.module, format: 'es' },
    ],
    sourcemap: true,
    // Indicate here external modules you don't want to include
    external: [],
    watch: {
        include: 'dist/es/**',
    },
    plugins: [
        // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        commonjs({
            namedExports: {
                'dist/es/pb/aes.js': ['aes'],
                'dist/es/pb/objectenc.js': ['objectenc']
            }
        }),

        // Allow node_modules resolution, so you can use 'external' to control
        // which external modules to include in the bundle
        // https://github.com/rollup/rollup-plugin-node-resolve#usage
        resolve(),

        // Resolve source maps to the original source
        sourceMaps(),

        // Compile json files
        json(),
    ],
}
