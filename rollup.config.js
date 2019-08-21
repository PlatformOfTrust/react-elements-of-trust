import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import copy from 'rollup-plugin-copy-glob';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    external: [
        'react',
        'react-bootstrap',
        'react-dom'
    ],
    plugins: [
        flow({ all: true }),
        copy([
            { files: 'src/**/*.scss', dest: 'dist/scss' },
        ], {verbose: true}),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react']
        })
    ]
};

