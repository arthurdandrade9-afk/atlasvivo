import { readFileSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const vsl = html.match(/<section id="vsl"[\s\S]*?<\/section>/)?.[0] ?? '';
assert.match(vsl, /poster="assets\/stream\/atlas-vsl-poster\.jpg"/, 'VSL should display an actual video frame before play');
assert.match(vsl, /assets\/stream\/atlas-vsl\.mp4/, 'VSL should use the optimized video');
assert.match(vsl, /Assista ao vídeo/, 'VSL should invite visitors to watch');
assert.doesNotMatch(vsl, /\bautoplay\b/, 'VSL must not autoplay');
for (const path of ['atlas-vsl.mp4', 'quem-somos.mp4']) {
  assert.ok(statSync(new URL(`../dist/assets/stream/${path}`, import.meta.url)).size < 70_000_000, `${path} should be under 70 MB`);
}
console.log('Video checks passed');
