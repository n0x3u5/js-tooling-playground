import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './user/index.js',
  output: {
    file: './user-dist/index.js',
    format: 'umd',
    name: 'Runner'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}
