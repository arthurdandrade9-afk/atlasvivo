import { readFileSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const vsl = html.match(/<section id="vsl"[\s\S]*?<\/section>/)?.[0] ?? '';
assert.match(vsl, /poster="assets\/stream\/atlas-vsl-poster\.jpg"/, 'VSL should display an actual video frame before play');
assert.match(vsl, /assets\/stream\/atlas-vsl\.mp4/, 'VSL should use the optimized video');
assert.match(vsl, /preload="none"/, 'VSL must not compete with the first page load before play');
assert.match(vsl, /Assista ao vídeo/, 'VSL should invite visitors to watch');
assert.doesNotMatch(vsl, /\bautoplay\b/, 'VSL must not autoplay');
const about = html.match(/<section id="quem-somos"[\s\S]*?<\/section>/)?.[0] ?? '';
assert.match(about, /poster="assets\/stream\/quem-somos-poster\.jpg"/, 'About video needs a poster');
assert.match(about, /preload="none"/, 'About video must not compete with the first page load before play');
for (const section of [vsl, about]) {
  assert.match(section, /class="watch-prompt"/, 'Each video needs a visible viewing prompt');
  assert.match(section, /data-play-video/, 'Each video needs an accessible play button');
}
for (const path of ['atlas-vsl.mp4', 'quem-somos.mp4']) {
  assert.ok(statSync(new URL(`../dist/assets/stream/${path}`, import.meta.url)).size < 70_000_000, `${path} should be under 70 MB`);
}
console.log('Video checks passed');
