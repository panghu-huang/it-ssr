

import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';

const paths = require('../../config/path.app');

function getHtml(content: string, data: object) {
  const isDev = process.env.NODE_ENV === 'development';
  const dataString = encodeURIComponent(JSON.stringify(data));
  let html;
  let template;
  if (isDev) {
    template = fs.readFileSync(paths.htmlTemplate, 'utf8');
    html = ejs.render(template, {
      content,
      script: `
        <script type="text/javascript">
          window.__APP_DATA__ = "${dataString}";
        </script>
        <script type="text/javascript" src="/app.js"></script>
      `
    });
  } else {
    const buildedHtmlPath = path.join(paths.publicDirectory, 'client.html');
    template = fs.readFileSync(buildedHtmlPath, 'utf8');
    html = template
      .replace('AppSlot', content)
      .replace('ScriptSlot', `
        <script type="text/javascript">
          window.__APP_DATA__ = "${dataString}";
        </script>
      `);
  }
  return html;
}

export default getHtml;