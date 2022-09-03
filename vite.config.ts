import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  plugins: [
    postcss(),
    react(),
    dts({
      insertTypesEntry: true,
    }),
    svgr(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'counter-test-datagile',
      fileName: (format) => `counter-test-datagile.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-redux',
        '@reduxjs/toolkit',
        'vite-plugin-svgr',
        'tailwindcss',
        'postcss',
        '@formkit/auto-animate',
        'typescript',
      ],
      output: {
        globals: {
          react: 'React',
          useEffect: 'React.useEffect',
          'react-redux': 'reactRedux',
          '@reduxjs/toolkit': 'reduxToolkit',
          'vite-plugin-svgr': 'viteSVGR',
          '@formkit/auto-animate': 'autoAnimate',
          'react-dom': 'ReactDOM',
          typescript: 'typescript',
          tailwindcss: 'tailwind',
          postcss: 'postcss',
        },
      },
    },
  },
});
