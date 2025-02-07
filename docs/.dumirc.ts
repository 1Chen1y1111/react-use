import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'cy-hooks',
  },
  alias: {
    '@cy-design/hooks': resolve(__dirname, '../packages/hooks/src'),
  },
  resolve: {
    atomDirs: [{ type: 'hook', dir: '../packages/hooks/src' }],
  },
});
