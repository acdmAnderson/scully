import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "personal-blog",
  outDir: './dist/static',
  routes: {
    '/about/:title': {
      type: 'contentFolder',
      title: {
        folder: "./mbabout"
      }
    },
    '/blog/:title': {
      type: 'contentFolder',
      title: {
        folder: "./mdblog"
      }
    }
  }
};

setPluginConfig('md', { enableSyntaxHighlighting: true });