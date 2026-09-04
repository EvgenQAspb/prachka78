import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ContactCTA } from "@/components/ContactCTA";
import { REVIEWS } from "@/lib/data";
import { StarIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Отзывы",
  description:
    "Отзывы клиентов прачечной и химчистки «Городская прачечная 78» в Санкт-Петербурге. Рейтинг 5.0 на Яндекс.Картах.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Отзывы"
        title="Что говорят наши гости"
        subtitle="Рейтинг 5.0 и довольные клиенты на Яндекс.Картах — лучшая награда за нашу заботу о чистоте."
      >
        <Reveal delay={220}>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-soft">
              <div className="text-4xl font-extrabold text-tiffany-600">
                <Counter value={5} decimals={1} />
              </div>
              <div>
                <div className="flex gap-0.5 text-accent-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>
                <div className="text-sm text-ink-500">средняя оценка</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-soft">
              <div className="text-4xl font-extrabold text-tiffany-600">
                <Counter value={70} />
              </div>
              <div className="text-sm font-medium leading-tight text-ink-500">
                отзывов
                <br />
                на Яндекс.Картах
              </div>
            </div>
          </div>
        </Reveal>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-soft">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-accent-400">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <StarIcon key={j} className="h-5 w-5" />
                    ))}
                  </div>
                  <span className="rounded-full bg-tiffany-100 px-3 py-1 text-xs font-semibold text-tiffany-700">
                    {r.date}
                  </span>
                </div>
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink-600">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-tiffany-200 to-tiffany-400 text-lg font-extrabold text-tiffany-800">
                    {r.name[0]}
                  </span>
                  <div>
                    <div className="font-bold text-tiffany-900">{r.name}</div>
                    <div className="text-xs text-ink-400">отзыв опубликован</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-4 rounded-[2.5rem] bg-tiffany-50 p-10 text-center">
            <StarIcon className="h-10 w-10 text-accent-400" />
            <h2 className="text-2xl font-extrabold text-tiffany-950">Пользуетесь нашими услугами?</h2>
            <p className="max-w-xl text-ink-500">
              Будем рады вашему отзыву на Яндекс.Картах — это помогает нам становиться лучше, а другим клиентам —
              находить нас.
            </p>
            <a
              href="https://yandex.ru/maps/org"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 rounded-full bg-tiffany-500 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-tiffany-600"
            >
              Оставить отзыв на Яндекс.Картах
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </section>

      <ContactCTA />
    </>
  );
}
