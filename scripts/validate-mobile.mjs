import { readFileSync } from 'node:fs';
import { existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const css = readFileSync(new URL('../dist/styles.css', import.meta.url), 'utf8');
const mobile = css.match(/\/\* Mobile layout repair \*\/[\s\S]*$/)?.[0];
assert.ok(mobile, 'Mobile layout repair overrides are missing');
assert.match(mobile, /\.hero\s*\{[^}]*display\s*:\s*flex[^}]*flex-direction\s*:\s*column/s, 'Hero content must flow vertically');
assert.match(mobile, /\.hero\s+\.paper\s*\{[^}]*width\s*:\s*100%/s, 'Hero text must use the available mobile width');
assert.match(mobile, /\.hero-bundle\s*\{[^}]*position\s*:\s*static/s, 'Hero bundle must not overlap the text');
assert.match(mobile, /\.product\s*>\s*img\s*\{[^}]*position\s*:\s*static/s, 'Product image must remain in document flow');
assert.match(mobile, /\.prices\s+\.best\s*\{[^}]*transform\s*:\s*none/s, 'Offer cards must not overlap on mobile');
assert.match(mobile, /\.collection-total\s+strong\s*\{[^}]*font\s*:\s*inherit/s, 'Collection description must not inherit the large price font');
assert.match(mobile, /\.collection-cards\s+article\s*\{[^}]*display\s*:\s*grid/s, 'Material cards must have a readable mobile layout');
assert.match(css, /@media\(max-width:620px\)\{\.collection-offer \.offer-list\{display:grid;gap:10px;border:0\}/s, 'Bonus list must use individual mobile value windows');
assert.match(css, /\.collection-offer \.offer-check\{position:relative;grid-template-columns:94px minmax\(0,1fr\)/s, 'Each mobile bonus window must reserve room for a useful cover');
assert.ok(existsSync(new URL('../dist/mobile-preview.html', import.meta.url)), 'A persistent mobile review frame must be available locally');
assert.ok(existsSync(new URL('../dist/draft-preview-v3.js', import.meta.url)), 'Mobile review frame must load the current versioned draft assets');
console.log('Mobile layout safeguards present.');
