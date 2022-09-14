import serve from 'rollup-plugin-serve'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import livereload from 'rollup-plugin-livereload'
import dotenv from 'rollup-plugin-dotenv'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
// const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife',
		sourcemap: true,
	},
	plugins: [
		dotenv(),
		nodeResolve({
			extensions: ['.js'],
		}),
		replace({
			'process.env.SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
			'process.env.NODE_ENV': JSON.stringify('development'),
			preventAssignment: true,
		}),
		babel({
			presets: ['@babel/preset-react'],
			babelHelpers: 'bundled',
		}),
		commonjs(),
		serve({
			open: false,
			verbose: true,
			contentBase: ['', 'public'],
			host: 'localhost',
			port: 5000,
		}),
		livereload({ watch: 'dist' }),
	],
}
