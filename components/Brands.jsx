import { BRANDS as b } from '@/data/site';
export default function Brands() {
  const row = [...b.items, ...b.items, ...b.items, ...b.items];
  return (
    <section id="brands" aria-label="Clients and brands" className="overflow-hidden px-4 py-10 lg:py-14">
      <p className="label mb-6 text-center" dir="ltr">| {b.label} |</p>
      <div className="mask-x overflow-hidden" aria-hidden="true">
        <ul className="marquee flex w-max items-center">
          {[...row, ...row].map((src, i) => (
            <li key={i} className="flex items-center">
              <img src={src} alt="" loading="lazy" decoding="async" className="h-10 w-auto object-contain px-8 lg:h-14 lg:px-14" />
              <i className="h-1.5 w-1.5 rounded-full bg-brand" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}