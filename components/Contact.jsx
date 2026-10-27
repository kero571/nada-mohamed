import Icon from "./ui/Icon";
import { CONTACT as c, SITE, wa } from "@/data/site";
const S = [
  ["behance", "Behance", SITE.behance],
  ["linkedin", "LinkedIn", SITE.linkedin],
].filter((x) => x[2]);
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-h"
      className="px-3 pb-3 lg:px-5 lg:pb-5"
    >
      <div className="reveal relative isolate overflow-hidden rounded-[28px] bg-[#3a0a04] px-5 py-16 text-center text-white lg:rounded-[36px] lg:py-24">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,#b8300f_0%,#5e1106_55%,#2a0603_100%)]"
        />
        <p className="label mb-4">{c.label}</p>
        <h2
          id="contact-h"
          className="mx-auto max-w-3xl text-[2.2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        >
          {c.title} <span className="text-brand">{c.accent}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/75 lg:text-lg">
          {c.text}
        </p>
        <a
          href={wa(c.msg)}
          target="_blank"
          rel="noopener"
          className="btn btn-brand cta-ring mx-auto mt-9 flex w-full max-w-lg !rounded-2xl !py-5 text-lg"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20">
            <Icon n="whatsapp" className="h-5 w-5" />
          </span>
          {c.cta}
          <Icon n="arrow" className="h-5 w-5" />
        </a>
        <p className="mt-10 text-[11px] font-bold tracking-[.25em] text-white/60">
          {c.or.toUpperCase()}
        </p>
        <ul className="mt-4 flex flex-wrap justify-center gap-3">
          {S.map(([i, n, u]) => (
            <li key={n}>
              <a
                href={u}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={n}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand"
              >
                {i === "behance" ? (
                  <b className="text-sm font-extrabold">Bē</b>
                ) : (
                  <Icon n={i} />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
