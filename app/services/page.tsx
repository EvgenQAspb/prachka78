import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { BasketIcon, ShirtIcon, ShoeIcon, PriceIcon, CheckIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Услуги прачечной и химчистки «Городская прачечная 78»: стирка, сушка, глажка, химчистка одежды, пуховиков, штор, ковров, обуви и аксессуаров.",
};

const CATEGORIES = [
  {
    id: "washing",
    icon: BasketIcon,
    title: "Стирка, сушка, глажка",
    text: "Самообслуживание или под ключ. Современные стиральные машины, сушильные барабаны и гладильная зона.",
    items: [
      "Стирка белья и одежды",
      "Сушка в сушильных барабанах",
      "Глажка и отпаривание",
      "Самообслуживание",
    ],
  },
  {
    id: "drycleaning",
    icon: ShirtIcon,
    title: "Химчистка одежды",
    text: "Деликатное приведение в порядок верхней одежды и текстиля без риска для ткани.",
    items: [
      "Пуховики и куртки",
      "Костюмы и пальто",
      "Шторы и текстиль",
      "Постельное бельё",
    ],
  },
  {
    id: "shoes",
    icon: ShoeIcon,
    title: "Обувь, ковры, аксессуары",
    text: "Вернём чистоту и вид обуви, коврам и аксессуарам.",
    items: [
      "Чистка обуви",
      "Ковры и ковровые изделия",
      "Мягкие игрушки",
      "Аксессуары",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Каталог услуг"
        title="Услуги прачечной и химчистки"
        subtitle="Стирка, сушка, глажка, химчистка одежды, ковров и обуви. Делаем чистоту доступной — от самообслуживания до работы под ключ."
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {CATEGORIES.map((cat) => (
            <Reveal key={cat.id} as="section" className="scroll-mt-24">
              <div id={cat.id} className="grid gap-8 lg:grid-cols-[1fr_2fr]">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <div className="rounded-[2rem] bg-white p-8 shadow-soft">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-tiffany-500 to-tiffany-700 text-white shadow-soft">
                      <cat.icon className="h-8 w-8" />
                    </span>
                    <h2 className="mt-5 text-2xl font-extrabold text-tiffany-950">{cat.title}</h2>
                    <p className="mt-3 leading-relaxed text-ink-500">{cat.text}</p>
                    <ul className="mt-6 space-y-2.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink-600">
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-tiffany-100 text-tiffany-600">
                            <CheckIcon className="h-3 w-3" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/prices"
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-tiffany-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-tiffany-600"
                    >
                      <PriceIcon className="h-4 w-4" /> Цены
                    </Link>
                  </div>
                </div>

                <div className="grid content-start gap-6 sm:grid-cols-2">
                  {cat.items.map((item, i) => (
                    <Reveal key={item} delay={i * 70}>
                      <div className="group h-full rounded-[2rem] bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                        <div className="flex items-center gap-3">
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-tiffany-100 text-tiffany-600 transition group-hover:bg-tiffany-500 group-hover:text-white">
                            <ArrowRightIcon className="h-5 w-5" />
                          </span>
                          <h3 className="font-bold text-tiffany-900">{item}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-ink-500">
                          Точную стоимость уточняйте у администратора по телефону — цена зависит от типа ткани и объёма.
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
