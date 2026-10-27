'use client';
import { useEffect } from 'react';

export default function ProjectModal({ p, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose();
    addEventListener('keydown', k);
    const o = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { removeEventListener('keydown', k); document.body.style.overflow = o; };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={p.title} onClick={onClose}
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 p-3 backdrop-blur-sm lg:p-10">
      <button type="button" aria-label="Close" onClick={onClose}
        className="fixed end-4 top-4 z-[101] grid h-11 w-11 place-items-center rounded-full bg-white text-xl font-bold text-black shadow-lg transition hover:scale-105">
        ✕
      </button>
      <div onClick={(e) => e.stopPropagation()} className="mx-auto flex max-w-4xl flex-col gap-4 pb-10 pt-10 lg:pt-0">
        {p.items.map((it, i) =>
          it.type === 'video' ? (
            <video key={i} src={it.src} controls playsInline preload="metadata" className="h-auto w-full rounded-xl bg-black" />
          ) : (
            <img key={i} src={it.src} alt={`${p.title} ${i + 1}`} width={it.w || undefined} height={it.h || undefined}
              loading="lazy" decoding="async" className="h-auto w-full rounded-xl" />
          )
        )}
      </div>
    </div>
  );
}