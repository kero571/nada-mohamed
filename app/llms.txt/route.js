import {SITE,SERVICES,ABOUT,wa} from '@/data/site';
export function GET(){const t=`# ${SITE.name}\n> ${SITE.description}\n\nRole: ${SITE.role}\nSite: ${SITE.url}\nInstagram: ${SITE.instagram}\nWhatsApp: ${wa('')}\n\n## About\n${ABOUT.p.join('\n\n')}\n\n## Services\n${SERVICES.items.map(i=>`- ${i.title}: ${i.desc}`).join('\n')}\n`;
return new Response(t,{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public, max-age=3600'}})}
