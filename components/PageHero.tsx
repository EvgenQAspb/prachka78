import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-tiffany-50 to-background pb-16 pt-32 sm:pb-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-tiffany-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-accent-100/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-tiffany-600 shadow-glass backdrop-blur">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-tiffany-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">{subtitle}</p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
