import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const OUT = 'data/media.json';
const root = path.join(process.cwd(), 'public', 'images');
const IMG = /\.(webp|jpe?g|png|avif)$/i;
const VID = /\.(mp4|webm|mov|m4v)$/i;
const enc = (...p) => '/' + p.map(encodeURIComponent).join('/');
const sort = (a, b) => a.localeCompare(b, undefined, { numeric: true });

const folders = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.toLowerCase() !== 'brands')
  .map((d) => d.name)
  .sort(sort);

const projects = [];
for (const name of folders) {
  const dir = path.join(root, name);
  const files = fs.readdirSync(dir).filter((f) => IMG.test(f) || VID.test(f)).sort(sort);
  const items = [];
  for (const f of files) {
    const src = enc('images', name, f);
    if (VID.test(f)) items.push({ type: 'video', src });
    else {
      let w = 0, h = 0;
      try { const m = await sharp(path.join(dir, f)).metadata(); w = m.width; h = m.height; } catch {}
      items.push({ type: 'image', src, w, h });
    }
  }
  if (items.length) projects.push({ title: name, items });
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ projects }, null, 2));
console.log(`media.json ✔ ${projects.length} projects`);