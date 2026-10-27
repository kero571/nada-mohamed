'use client';
import { useRef, useEffect, useState } from 'react';
import Icon from './ui/Icon';
import ProjectModal from './ProjectModal';
import { SITE } from '@/data/site';

function Cover({ item, title, priority }) {
  const fill = 'absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105';
  if (item.type === 'video')
    return (
      <video src={item.src + '#t=0.1'} muted playsInline preload="auto" aria-label={title}
        className={fill + ' pointer-events-none'} />
    );
  return (
    <img src={item.src} alt={title} loading="eager" decoding="async"
      fetchPriority={priority ? 'high' : 'auto'} className={fill} />
  );
}

function FolderCard({ p, onOpen }) {
  const count = p.items.length;
  return (
    <button type="button" onClick={() => onOpen(p)} aria-label={`${p.title} — open (${count})`}
      className="group relative block w-full pt-5 text-start transition duration-300 hover:-translate-y-1.5">
      {/* تبويبة الفولدر */}
      <span aria-hidden className="absolute start-0 top-0 h-7 w-[42%] rounded-t-xl bg-brand" />

      {/* جسم الفولدر: مقاس موحد لكل الكروت */}
      <div className="relative aspect-[4/5] rounded-2xl rounded-ss-none bg-brand p-2.5 shadow-lg transition duration-300 group-hover:shadow-2xl">
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-black/25">
          <Cover item={p.items[0]} title={p.title} priority={p.priority} />

          {p.items[0].type === 'video' && (
            <span aria-hidden className="absolute inset-0 grid place-items-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-black/45 text-white backdrop-blur">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
          )}

          {/* علامة إن الكارت يتفتح */}
          <span aria-hidden className="absolute end-2.5 top-2.5 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-black shadow backdrop-blur">
            Open
            <Icon n="arrow" className="h-3 w-3 transition duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>

        {/* الجزء الأمامي من الفولدر */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 rounded-b-2xl bg-brand px-4 py-3 text-white">
          <b className="truncate text-[15px]">{p.title}</b>
          <span className="shrink-0 rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold">{count}</span>
        </div>
      </div>
    </button>
  );
}

export default function ProjectsCarousel({ w, projects }) {
  const r = useRef(null), b = useRef(null);
  const [open, setOpen] = useState(null);
  const upd = () => {
    const e = r.current;
    if (e && b.current) b.current.style.width = Math.min(100, ((e.scrollLeft + e.clientWidth) / e.scrollWidth) * 100) + '%';
  };
  useEffect(() => {
    upd(); const e = r.current;
    e.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd);
    return () => { e.removeEventListener('scroll', upd); removeEventListener('resize', upd); };
  }, []);
  const go = (s) => r.current?.scrollBy({ left: s * r.current.clientWidth * 0.7, behavior: 'smooth' });
  const ar = 'grid h-11 w-11 place-items-center rounded-full border border-line bg-white transition duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand active:scale-95';

  return (
    <div className="mx-auto max-w-[1320px] px-5 py-14 lg:px-10 lg:py-20">
      <div className="reveal mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="label mb-2">{w.label}</p>
          <h2 id="work-h" className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            <span className="lg:hidden">{w.mTitle}</span><span className="hidden lg:inline">{w.title}</span>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <a href={SITE.behance} target="_blank" rel="noopener noreferrer me" className="hidden text-xs font-extrabold tracking-widest text-brand lg:inline">{w.all} →</a>
          <button type="button" aria-label="Previous" onClick={() => go(-1)} className={ar}><Icon n="arrowL" className="h-4 w-4" /></button>
          <button type="button" aria-label="Next" onClick={() => go(1)} className={ar}><Icon n="arrow" className="h-4 w-4" /></button>
        </div>
      </div>

      <ul ref={r} className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 pt-1 [scrollbar-width:none] lg:mx-0 lg:px-0">
        {projects.map((p, i) => (
          <li key={p.title} className="reveal w-[72%] shrink-0 snap-start sm:w-[40%] lg:w-[calc(25%-15px)]">
            <FolderCard p={{ ...p, priority: i < 4 }} onOpen={setOpen} />
          </li>
        ))}
      </ul>

      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-line">
        <div ref={b} className="h-full w-1/2 rounded-full bg-brand transition-[width] duration-300 ease-out" />
      </div>

      {open && <ProjectModal p={open} onClose={() => setOpen(null)} />}
    </div>
  );
}