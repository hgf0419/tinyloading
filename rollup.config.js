import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/tinyloading.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/tinyloading.umd.js',
      format: 'umd',
      name: 'TinyLoading',
      sourcemap: true
    },
    {
      file: 'dist/tinyloading.cjs.js',
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    nodeResolve(),
    terser()
  ]
};