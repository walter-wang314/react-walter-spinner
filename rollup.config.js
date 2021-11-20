import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// import { terser } from 'rollup-plugin-terser';
import { string } from 'rollup-plugin-string';

const dist = 'dist';
// const isProduction = process.env.NODE_ENV === 'production';

const outputs = [
  {
    file: `${dist}/bundle.cjs.js`,
    format: 'cjs',
    exports: 'auto'
  },
  {
    file: `${dist}/bundle.cjs.min.js`,
    format: 'cjs',
    exports: 'auto'
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
];

const common = {
  input: 'src/index.js',
  external: ['react'],
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**' }),
    string({ include: '**/*.css' })
    // isProduction && terser()
  ]
};

export default outputs.map((output) => ({
  ...common,
  output
}));
