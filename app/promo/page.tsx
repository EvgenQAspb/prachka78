import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PromoTimer } from "@/components/PromoTimer";
import { ContactCTA } from "@/components/ContactCTA";
import { SparkIcon, CheckIcon, ClockIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Акции",
  description:
    "Акции прачечной «Городская прачечная 78»: бонусная программа «Счастливые часы» — 1% с каждого заказа и +2% с 09:00 до 15:00. Акция до 31.12.2026.",
};

const CONDITIONS = [
  {
    title: "1% с каждого заказа",
    text: "Бонусы начисляются за каждую услугу в любое время дня.",
  },
  {
    title: "+2% в «Счастливые часы»",
    text: "Приходите с 09:00 до 15:00 и получайте повышенное начисление до 3%.",
  },
  {
    title: "Действует до 31.12.2026",
    text: "Успейте воспользоваться выгодой на протяжении всего года.",
  },
];

const STEPS = [
  { n: "01", title: "Приходите", text: "Заезжайте на Яхтенную, 28 в удобное время." },
  { n: "02", title: "Пользуйтесь услугами", text: "Стирка, сушка, глажка или химчистка — как вам удобно." },
  { n: "03", title: "Копите бонусы", text: "Бонусы начисляются на каждый заказ автоматически." },
  { n: "04", title: "Оплачивайте со скидкой", text: "Используйте накопленное при следующем визите." },
];

export default function PromoPage() {
  return (
    <>
      <PageHero
        eyebrow="Акции и бонусы"
        title="«Счастливые часы»: до 3% бонусами"
        subtitle="Копите бонусы с каждого заказа и получайте ещё больше при визитах с 09:00 до 15:00."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-accent-400 via-accent-500 to-accent-500 p-8 text-white shadow-glow sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                  <SparkIcon className="h-4 w-4" /> Бонусная программа
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Кэшбэк бонусами за чистоту
                </h2>
                <p className="mt-3 max-w-lg text-lg text-accent-50">
                  1% с каждого заказа — всегда, и дополнительно +2% в часы с 09:00 до 15:00. Итого до 3% бонусами
                  с ощутимой выгодой.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                    <ClockIcon className="h-4 w-4" /> ежедневно 9:00–21:00
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                    <CheckIcon className="h-4 w-4" /> до 3% бонусами
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent-100">До конца акции осталось</p>
                <PromoTimer />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CONDITIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-100 text-accent-500">
                  <SparkIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-tiffany-900">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-500">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-tiffany-950 sm:text-3xl">
            Как это работает
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="relative rounded-[2rem] bg-white p-7 shadow-soft">
                <span className="text-4xl font-extrabold text-tiffany-200">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold text-tiffany-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <ContactCTA />
    </>
  );
}
