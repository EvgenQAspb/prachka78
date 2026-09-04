import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ContactCTA } from "@/components/ContactCTA";
import { CheckIcon, CardIcon, ClockIcon, BasketIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "О нас",
  description:
    "Городская прачечная 78 — прачечная и химчистка в Приморском районе Санкт-Петербурга. Самообслуживание, оплата картой, бонусная программа.",
};

const PERKS = [
  { icon: BasketIcon, title: "Самообслуживание", text: "Стирайте и сушите бельё самостоятельно в удобном темпе." },
  { icon: CardIcon, title: "Оплата картой", text: "Принимаем банковские карты и наличные — по-современному." },
  { icon: ClockIcon, title: "День в день", text: "Химчистка и прачечная работают ежедневно с 9:00 до 21:00." },
  { icon: CheckIcon, title: "Бережно и аккуратно", text: "Современное оборудование и деликатный уход за вашими вещами." },
];

const STATS = [
  { value: 5, decimals: 1, suffix: "", label: "рейтинг на картах" },
  { value: 70, decimals: 0, suffix: "", label: "отзывов" },
  { value: 5000, decimals: 0, suffix: "+", label: "обслуженных заказов" },
  { value: 7, decimals: 0, suffix: "", label: "дней в неделю" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О нас"
        title="Городская прачечная 78"
        subtitle="Уютная прачечная и химчистка в Приморском районе Санкт-Петербурга. Заботимся о чистоте ваших вещей, чтобы вы тратили время на то, что любите."
      />

      {/* История + фото */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] shadow-glow">
              <Image
                src="https://placehold.co/800x600/d6f7f4/0a9a97?text=%D0%9E%20%D0%BD%D0%B0%D1%81&font=montserrat"
                alt="О прачечной Городская прачечная 78"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="inline-flex items-center gap-2 rounded-full bg-tiffany-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-tiffany-700">
              Наш подход
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-tiffany-950 sm:text-4xl">
              Чистота, которая экономит ваше время
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              «Городская прачечная 78» — современная точка самообслуживания и химчистки на Яхтенной улице. Мы объединили
              стиральные машины, сушильные барабаны, гладильную зону и профессиональную химчистку в одном месте.
            </p>
            <p className="mt-3 text-lg leading-relaxed text-ink-500">
              Сдайте куртку, пуховик, шторы или ковёр — вернём их чистыми и ухоженными. А если хочется справиться самим,
              к вашим услугам техника самообслуживания и оплата картой.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Цифры */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-[2.5rem] bg-white p-6 shadow-soft sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <div className="text-4xl font-extrabold text-tiffany-600">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="mt-1 text-sm font-medium text-ink-500">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Преимущества */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-soft">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-tiffany-100 to-tiffany-200 text-tiffany-700">
                  <p.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-tiffany-900">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-500">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
