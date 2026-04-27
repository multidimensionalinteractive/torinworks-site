import { writeFileSync, mkdirSync, rmSync, readdirSync, readFileSync } from 'fs';
import { build } from 'vite';

const dir = '/tmp/vite_css_test';
try { rmSync(dir, { recursive: true }); } catch {}
mkdirSync(dir, { recursive: true });
mkdirSync(dir + '/src', { recursive: true });

writeFileSync(dir + '/vite.config.js', `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ plugins: [react()] });
`);

writeFileSync(dir + '/index.html', '<!DOCTYPE html><html><body><div id="root"></div><script type="module" src="/src/main.jsx"></script></body></html>');

writeFileSync(dir + '/src/main.jsx', `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
`);

writeFileSync(dir + '/src/App.jsx', `
import './app.css';
export default function App() {
  return <div className="r-split" style={{ gap: 10 }}>Hello</div>;
}
`);

writeFileSync(dir + '/src/app.css', `
.r-split { display: grid; grid-template-columns: 1fr 1fr; }
.r-split:not(#\\#) { display: grid; grid-template-columns: 1fr 1fr; }
@media (max-width: 760px) {
  .r-split { grid-template-columns: 1fr !important; }
}
`);

await build({ root: dir, logLevel: 'silent' });

const cssFiles = readdirSync(dir + '/dist/assets').filter(f => f.endsWith('.css'));
for (const f of cssFiles) {
  const css = readFileSync(dir + '/dist/assets/' + f, 'utf8');
  console.log('CSS file:', f);
  console.log(css);
}

const jsFiles = readdirSync(dir + '/dist/assets').filter(f => f.endsWith('.js'));
for (const f of jsFiles) {
  const js = readFileSync(dir + '/dist/assets/' + f, 'utf8');
  console.log('JS has r-split:', js.includes('r-split'));
  const m = js.match(/className:"r-split"[^}]*style:\{([^}]*)\}/);
  if (m) console.log('Inline styles:', m[1]);
}
