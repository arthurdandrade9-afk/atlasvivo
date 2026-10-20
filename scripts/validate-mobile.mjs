import { readFileSync } from 'node:fs';
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
console.log('Mobile layout safeguards present.');
