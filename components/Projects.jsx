import fs from 'node:fs';
import path from 'node:path';
import ProjectsCarousel from './ProjectsCarousel';
import { WORK } from '@/data/site';

const IMG = /\.(webp|jpe?g|png|avif)$/i;
const VID = /\.(mp4|webm|mov|m4v)$/i;
const sort = (a, b) => a.localeCompare(b, undefined, { numeric: true });

function getProjects() {
  const root = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(root)) return [];

  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.toLowerCase() !== 'brands')
    .map((d) => d.name)
    .sort(sort)
    .map((name) => {
      const files = fs
        .readdirSync(path.join(root, name))
        .filter((f) => IMG.test(f) || VID.test(f))
        .sort(sort);

      const items = files.map((f) => ({
        type: VID.test(f) ? 'video' : 'image',
        src: '/' + ['images', name, f].map(encodeURIComponent).join('/'),
        w: 0,
        h: 0,
      }));

      return { title: name, items };
    })
    .filter((p) => p.items.length);
}

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-h" className="border-t border-line">
      <ProjectsCarousel w={WORK} projects={getProjects()} />
    </section>
  );
}