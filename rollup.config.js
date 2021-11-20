import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const dist = 'dist';
const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: 'cjs',
      exports: 'auto'
    },
    {
      file: `${dist}/bundle.cjs.min.js`,
      format: 'cjs',
      exports: 'auto',
      plugins: [isProduction && terser()]
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: 'esm'
    },
    {
      globals: {
        react: 'React'
      },
      name: 'ReactWalterSpinners',
      file: `${dist}/bundle.umd.js`,
      format: 'umd'
    }
  ],
  plugins: [resolve(), babel({ exclude: 'node_modules/**' })]
};
