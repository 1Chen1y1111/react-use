import { defineConfig } from 'dumi';
import { resolve } from 'path';

const basePath = '/react-use/';

export default defineConfig({
  outputPath: 'dist',
  base: basePath,
  publicPath: basePath,
  hash: true,
  themeConfig: {
    name: 'react-use',
  },
  alias: {
    '@cy-group/react-use': resolve(__dirname, '../packages/hooks/src'),
  },
  resolve: {
    atomDirs: [{ type: 'hook', dir: '../packages/hooks/src' }],
  },
});
