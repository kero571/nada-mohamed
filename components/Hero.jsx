import Img from "./ui/Img";
import Icon from "./ui/Icon";
import Header from "./Header";
import { HERO as h, SITE, wa } from "@/data/site";
const d = (s) => ({ "--d": s });
export default function Hero() {
  return (
    <section id="top" className="relative p-3 pb-0 pt-[4.75rem] lg:p-5 lg:pb-0">
      <Header />
      <div className="relative isolate min-h-[calc(100svh-6.5rem)] overflow-hidden rounded-[28px] bg-[#2a0603] lg:min-h-[calc(100svh-2.5rem)] lg:rounded-[36px]">
        <div
          aria-hidden
          className="glow absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_75%_at_62%_32%,#f0561a_0%,#b8300f_30%,#5e1106_62%,#2a0603_100%)]"
        />
        <div className="photo-up absolute inset-0">
          <Img
            src={h.img}
            alt={h.alt}
            fill
            priority
            fetchPriority="high"
            quality={75}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#2a0603] via-[#2a0603]/25 to-transparent lg:from-[#2a0603]/75 lg:via-transparent"
        />
        <h1 className="sr-only">
          {SITE.name} — {SITE.role}
        </h1>
        {/* desktop */}
        <div className="absolute inset-0 z-10 hidden flex-col justify-between px-14 pb-7 pt-32 text-white lg:flex">
          <div className="grid flex-1 grid-cols-[1fr_.75fr_1fr] items-center gap-6">
            <div className="from-l" style={d(".85s")}>
              <p className="mb-3 text-xl font-medium text-white/90">
                {h.intro}
              </p>
              <p
                aria-hidden
                className="text-[clamp(3.4rem,7.4vw,7.4rem)] font-extrabold uppercase leading-[.88] tracking-[-.04em]"
              >
                Graphic
                <br />
                Designer
              </p>
            </div>
            <span />
            <div className="from-r max-w-md justify-self-end" style={d("1s")}>
              <p
                aria-hidden
                className="text-[clamp(1.2rem,1.9vw,1.9rem)] font-bold leading-[1.25]"
              >
                {h.tag} {h.tagAccent}
              </p>
              <p className="mt-4 text-white/70">{h.sub}</p>
            </div>
          </div>
          <ol className="grid grid-cols-5 gap-6 border-t border-white/20 pt-5">
            {h.list.map((x, i) => (
              <li key={x} className="fade-u" style={d(`${1.35 + i * 0.09}s`)}>
                <b className="block text-xs font-extrabold text-brand">
                  #{String(i + 1).padStart(2, "0")}
                </b>
                <span className="mt-1 block text-[13px] font-medium">{x}</span>
              </li>
            ))}
          </ol>
          <a
            href="#brands"
            aria-label="Scroll down"
            className="fade-u mt-5 flex flex-col items-center gap-2 text-[10px] font-bold tracking-[.25em] text-white/80"
            style={d("1.9s")}
          >
            SCROLL DOWN
            <span className="flex h-9 w-5 justify-center rounded-full border border-white/50">
              <i className="wheel mt-2 h-2 w-0.5 rounded bg-white" />
            </span>
          </a>
        </div>
        {/* mobile */}
        <div className="relative z-10 flex min-h-[inherit] flex-col justify-between p-4 text-white lg:hidden">
          <span
            className="from-l inline-flex w-fit items-center gap-2 rounded-full bg-black/35 px-3 py-2 text-[10px] font-extrabold tracking-widest backdrop-blur"
            style={d(".7s")}
          >
            <i className="h-3.5 w-0.5 bg-brand" />
            {h.chip}
          </span>
          <div className="grid gap-4">
            <p
              aria-hidden
              className="from-l text-[1.7rem] font-extrabold leading-[1.18] sm:text-4xl"
              style={d(".85s")}
            >
              {h.tag}{" "}
              <em className="font-semibold text-[#ffa94d]">{h.tagAccent}</em>
            </p>
            <p className="from-r text-sm text-white/80" style={d("1s")}>
              {h.mobileSub}
            </p>
            <div className="from-r flex gap-3" style={d("1.1s")}>
              <a
                href="#work"
                className="btn flex-1 border border-white/30 bg-black/30 text-white backdrop-blur"
              >
                View My Work
              </a>
              <a href="#contact" className="btn flex-1 bg-white text-ink">
                Contact Me
              </a>
            </div>
            <div
              className="fade-u flex items-center justify-between text-[11px] text-white/80"
              style={d("1.5s")}
            >
              <span className="flex items-center gap-2">
                <b className="tracking-widest text-[#ffa94d]">★★★★★</b>
                {h.proof}
              </span>
              <a
                href="#brands"
                aria-label="Scroll down"
                className="bob grid h-8 w-8 place-items-center"
              >
                <Icon n="down" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
