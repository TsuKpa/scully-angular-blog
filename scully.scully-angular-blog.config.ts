import { setPluginConfig, ScullyConfig } from '@scullyio/scully';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-diff.js';
import 'prismjs/components/prism-docker.js';
import 'prismjs/components/prism-http.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-markdown.js';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-powershell.js';
import 'prismjs/components/prism-regex.js';
import 'prismjs/components/prism-sass.js';
import 'prismjs/components/prism-tsx.js';
import 'prismjs/components/prism-toml.js';
import 'prismjs/components/prism-vim.js';
import 'prismjs/components/prism-yaml.js';


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-angular-blog",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};
setPluginConfig('md', { enableSyntaxHighlighting: true });