import { readFileSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
assert.match(html, /<script src="app\.js\?v=[^"]+">/, 'VSL behavior script must be versioned so returning visitors receive new controls');
const vsl = html.match(/<section id="vsl"[\s\S]*?<\/section>/)?.[0] ?? '';
assert.match(vsl, /poster="assets\/stream\/atlas-vsl-poster\.jpg"/, 'VSL should display an actual video frame before play');
assert.match(vsl, /assets\/stream\/atlas-vsl\.mp4/, 'VSL should use the optimized video');
assert.match(vsl, /preload="none"/, 'VSL must not compete with the first page load before play');
assert.match(vsl, /ASSISTA AO VÍDEO COM SOM/, 'VSL should invite visitors to watch with sound');
assert.match(vsl, /data-scroll-preview/, 'VSL must opt into the lightweight in-view preview');
assert.match(vsl, /data-enable-video-sound="video-vsl"/, 'VSL needs an explicit sound activation control');
assert.match(vsl, /Você vai entender por que elas passam a procurar personagens sozinhas/, 'VSL needs the approved curiosity hook');
const app = readFileSync(new URL('../dist/app.js', import.meta.url), 'utf8');
assert.match(app, /IntersectionObserver/, 'VSL preview must start only when its section becomes visible');
assert.match(app, /\.muted=true/, 'In-view VSL preview must remain muted for mobile autoplay compatibility');
assert.match(app, /\.pause\(\)/, 'VSL preview must pause after leaving the viewport');
assert.match(app, /data-enable-video-sound/, 'Sound activation must be handled without preloading the video');
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
