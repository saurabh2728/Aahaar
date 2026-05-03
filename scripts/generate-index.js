const fs = require('fs');
const path = require('path');

const distClient = path.join(__dirname, '..', 'dist', 'client');
if (!fs.existsSync(distClient)) {
  console.warn('dist/client not found, skipping index generation');
  process.exit(0);
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Aahaar</title>
    <link rel="stylesheet" href="/assets/styles-C66oozee.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/index-B7JU7gSN.js"></script>
    <script type="module" src="/assets/index-CedM8fqi.js"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(distClient, 'index.html'), html);
console.log('Wrote dist/client/index.html');
