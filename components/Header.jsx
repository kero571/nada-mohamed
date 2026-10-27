'use client';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import Icon from './ui/Icon';
import { SITE, NAV } from '@/data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    addEventListener('scroll', f, { passive: true });
    return () => removeEventListener('scroll', f);
  }, []);

  const skin = scrolled
    ? 'bg-white/90 text-ink shadow-md backdrop-blur'
    : 'bg-white/90 text-ink backdrop-blur lg:bg-transparent lg:text-white lg:backdrop-blur-none';

  return (
    <div className={`nav-in fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 px-5 py-3 transition-colors duration-300 lg:px-14 lg:py-4 ${skin}`}>
      <a href="#top" className="leading-tight">
        <b className="block text-xl font-extrabold tracking-tight lg:text-2xl">{SITE.name}</b>
        <span className={`block text-[10px] font-bold tracking-widest lg:hidden ${'text-mute'}`}>GRAPHIC DESIGNER · VISUAL IDENTITY</span>
      </a>

      <nav aria-label="Main" className="hidden items-center gap-10 text-sm font-semibold lg:flex">
        {NAV.map(([t, h]) => (
          <a key={h} href={h} className="opacity-90 transition hover:text-[#ffb27a] hover:opacity-100">{t}</a>
        ))}
      </nav>

      <a href="#contact" className="group hidden items-center gap-3 rounded-full bg-white py-1.5 pe-1.5 ps-5 text-sm font-bold text-ink shadow-lg transition duration-300 hover:-translate-y-0.5 lg:inline-flex">
        Contact Me
        <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white transition duration-300 group-hover:translate-x-0.5">
          <Icon n="arrow" className="h-4 w-4" />
        </span>
      </a>

      <MobileMenu links={NAV} />
    </div>
  );
}