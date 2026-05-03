const fs = require('fs');
const path = require('path');

const distClient = path.join(__dirname, '..', 'dist', 'client');
if (!fs.existsSync(distClient)) {
  console.warn('dist/client not found, skipping index generation');
  process.exit(0);
}

// detect asset filenames
const assetsDir = path.join(distClient, 'assets');
const files = fs.readdirSync(assetsDir);
const css = files.find((f) => f.endsWith('.css'));
const scripts = files.filter((f) => f.endsWith('.js'));

const cssHref = css ? `/assets/${css}` : '';
const scriptTags = scripts
  .map((s) => `<script type="module" src="/assets/${s}"></script>`)
  .join('\n    ');

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Aahaar</title>
    ${cssHref ? `<link rel="stylesheet" href="${cssHref}">` : ''}
  </head>
  <body>
    <div id="root"></div>
    ${scriptTags}
  </body>
</html>`;

fs.writeFileSync(path.join(distClient, 'index.html'), html);
console.log('Wrote dist/client/index.html');
