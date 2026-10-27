import {SITE,NAV} from '@/data/site';
export default function Footer(){return(<footer className="border-t border-line px-5 py-10 lg:px-10"><div className="mx-auto flex max-w-[1320px] flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-start">
<div><b className="text-xl font-extrabold">{SITE.name}</b><span className="block text-[10px] font-bold tracking-widest text-mute lg:hidden">GRAPHIC DESIGNER</span></div>
<nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-mute">{NAV.map(([t,h])=><a key={h} href={h} className="transition hover:text-brand">{t}</a>)}</nav>
<div className="flex flex-col items-center gap-2 text-xs text-mute lg:flex-row lg:gap-6"><a href={SITE.behance} target="_blank" rel="noopener noreferrer me" className="hidden font-extrabold tracking-widest text-ink lg:inline">BEHANCE ↗</a><p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p></div></div></footer>)}
