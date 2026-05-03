const fs = require('fs');
const path = require('path');

const distServer = path.join(__dirname, '..', 'dist', 'server');
if (!fs.existsSync(distServer)) {
  console.warn('dist/server not found, skipping server wrapper generation');
  process.exit(0);
}

const content = `export default {
  fetch: async (request, env, ctx) => {
    try {
      const mod = await import('./index.js');
      const entry = mod.default ?? mod;
      if (entry && typeof entry.fetch === 'function') return entry.fetch(request, env, ctx);
      if (typeof entry === 'function') return entry(request, env, ctx);
    } catch (e) {
      // ignore
    }
    return new Response('Not Found', { status: 404 });
  }
};
`;

fs.writeFileSync(path.join(distServer, 'server.js'), content);
console.log('Wrote dist/server/server.js');
