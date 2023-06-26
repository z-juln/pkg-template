import path from 'path';
import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// TODO: cdnBasePath
const cdnBase = `//cdn.youweb.com/static/<%= changeCase(name, 'kebab') %>/`;

// https://vitejs.dev/config/
export default ({ mode }) => {
  const plugins: PluginOption[] = [react()];

  if (mode === 'analyze') {
    plugins.push(
      visualizer({
        open: true,
      }),
    );
  }

  return defineConfig({
    build: {
      outDir: './build',
    },
    base: mode === 'production' ? cdnBase : '/',
    plugins,
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
      modules: {
        localsConvention: 'camelCase',
      },
    },
    resolve: {
      alias: [
        { find: /^~/, replacement: '' },
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
    },
    server: {
      port: 3333,
      proxy: {
        '/admin-api': {
          target: 'https://sit.you.com/admin/api/<%= changeCase(name, 'kebab') %>',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/demo-api/, ''),
        },
      },
    },
  });
};
