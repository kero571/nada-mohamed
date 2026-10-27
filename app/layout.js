import './globals.css';
import {Plus_Jakarta_Sans} from 'next/font/google';
import {metadata as m,viewport as v,jsonLd} from '@/lib/seo';
const f=Plus_Jakarta_Sans({subsets:['latin'],display:'swap',variable:'--font-jakarta'});
export const metadata=m;export const viewport=v;
export default function RootLayout({children}){return(<html lang="en" className={f.variable}><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/></body></html>)}
