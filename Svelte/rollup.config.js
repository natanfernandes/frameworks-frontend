import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';   
import autoPreprocess from 'svelte-preprocess';
import json from '@rollup/plugin-json';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js',
    },
    plugins: [
        json(),
        svelte({
            // Enables run-time checks when not in production.
            dev: !production,

            // Extracts any component CSS out into a separate file — better for performance.
            css: css => css.write('public/build/bundle.css'),

            // Emit CSS as "files" for other plugins to process
            emitCss: true,

            preprocess: autoPreprocess()          
        }),

        resolve({
            browser: true,
            dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
        }),
        commonjs(),

        postcss({                           
            extract: true,
            minimize: true,
            use: [
                ['sass', {
                includePaths: [
                    './src/theme',
                    './node_modules'
                ]
                }]
            ]
        }),

        // In dev mode, call `npm run start` once the bundle has been generated
        !production && serve(),

        // Watches the `public` directory and refresh the browser on changes when not in production.
        !production && livereload('public'),

        // Minify for production.
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};

function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });
            }
        }
    };
}