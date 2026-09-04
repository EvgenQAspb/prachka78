import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ContactCTA } from "@/components/ContactCTA";
import { REVIEWS, BUSINESS } from "@/lib/data";
import {
  StarIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsAppIcon,
  ClockIcon,
  CardIcon,
  PinIcon,
  BasketIcon,
  ShirtIcon,
  ShoeIcon,
  SparkIcon,
} from "@/components/icons";

const FEATURES = [
  {
    icon: ClockIcon,
    title: "Режим работы",
    text: "Ежедневно с 9:00 до 21:00 — удобно даже в выходные",
  },
  {
    icon: CardIcon,
    title: "Оплата картой",
    text: "Платите банковской картой или наличными",
  },
  {
    icon: BasketIcon,
    title: "Самообслуживание",
    text: "Стирайте и сушите сами или доверьте нам — как удобно",
  },
  {
    icon: SparkIcon,
    title: "Бонусная программа",
    text: "1% с каждого заказа, +2% с 09:00 до 15:00",
  },
];

const SERVICES = [
  {
    icon: BasketIcon,
    title: "Стирка, сушка, глажка",
    text: "Стиральные машины, сушильные барабаны, гладильная зона. Самообслуживание или под ключ.",
    href: "/services#washing",
  },
  {
    icon: ShirtIcon,
    title: "Химчистка",
    text: "Одежда, пуховики, шторы, ковры. Деликатное приведение вещей в порядок.",
    href: "/services#drycleaning",
  },
  {
    icon: ShoeIcon,
    title: "Обувь и аксессуары",
    text: "Обувь, ковры и аксессуары — вернём чистоту и вид.",
    href: "/services#shoes",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-tiffany-50 via-background to-background pt-28 sm:pt-32">
        <div className="pointer-events-none absolute left-1/4 top-8 h-80 w-80 rounded-full bg-tiffany-200/50 blur-3xl animate-drift" />
        <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-accent-100/60 blur-3xl animate-drift [animation-delay:-6s]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-tiffany-700 shadow-glass">
                <StarIcon className="h-4 w-4 text-accent-400" />
                Рейтинг {BUSINESS.rating} · {BUSINESS.reviews} отзывов на Яндекс.Картах
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-tiffany-950 sm:text-5xl xl:text-6xl">
                Свежее бельё —{" "}
                <span className="bg-gradient-to-r from-tiffany-500 to-tiffany-300 bg-clip-text text-transparent">
                  быстро, качественно
                </span>{" "}
                и бережно
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl">
                Прачечная и химчистка в Санкт-Петербурге. Стирка, сушка, глажка, химчистка одежды, ковров и обуви.
                Самообслуживание и оплата картой.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-tiffany-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-tiffany-600"
                >
                  <PhoneIcon className="h-5 w-5" /> Позвонить
                </a>
                <a
                  href={BUSINESS.telegram}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-tiffany-700 ring-1 ring-tiffany-200 transition hover:-translate-y-0.5 hover:bg-tiffany-50"
                >
                  <TelegramIcon className="h-5 w-5" /> Telegram
                </a>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-tiffany-700 ring-1 ring-tiffany-200 transition hover:-translate-y-0.5 hover:bg-tiffany-50"
                >
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={330}>
              <a href="#features" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tiffany-600 transition hover:text-tiffany-800">
                Как доехать · ул. Яхтенная, 28
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal delay={200} className="relative">
            <div className="relative mx-auto aspect-square max-w-md lg:max-w-none">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-tiffany-300 to-tiffany-600 opacity-90 animate-blob" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-40 w-40 place-items-center rounded-full bg-white/25 text-white backdrop-blur-sm animate-float">
                  <span className="text-7xl">🧺</span>
                </div>
              </div>
              <div className="absolute -left-4 top-16 rounded-2xl bg-white p-3 shadow-glass animate-float [animation-delay:-2s]">
                <div className="flex items-center gap-2">
                  <SparkIcon className="h-5 w-5 text-accent-500" />
                  <span className="text-sm font-bold text-tiffany-800">до 3% бонусами</span>
                </div>
              </div>
              <div className="absolute -right-2 bottom-10 rounded-2xl bg-white p-3 shadow-glass animate-float [animation-delay:-4s]">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-tiffany-500" />
                  <span className="text-sm font-bold text-tiffany-800">сегодня 9:00–21:00</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-[2.5rem] bg-white p-6 shadow-soft sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
          <Reveal className="text-center">
            <div className="text-4xl font-extrabold text-tiffany-600">
              <Counter value={5} decimals={1} />
            </div>
            <div className="mt-1 text-sm font-medium text-ink-500">рейтинг на картах</div>
          </Reveal>
          <Reveal delay={80} className="text-center">
            <div className="text-4xl font-extrabold text-tiffany-600">
              <Counter value={70} />
            </div>
            <div className="mt-1 text-sm font-medium text-ink-500">отзывов</div>
          </Reveal>
          <Reveal delay={160} className="text-center">
            <div className="text-4xl font-extrabold text-tiffany-600">
              <Counter value={5000} suffix="+" />
            </div>
            <div className="mt-1 text-sm font-medium text-ink-500">обслуженных заказов</div>
          </Reveal>
          <Reveal delay={240} className="text-center">
            <div className="text-4xl font-extrabold text-tiffany-600">
              <Counter value={7} />
            </div>
            <div className="mt-1 text-sm font-medium text-ink-500">дней в неделю</div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-tiffany-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-tiffany-700">
            Наши услуги
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-tiffany-950 sm:text-4xl">
            Всё для чистоты ваших вещей — в одном месте
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-tiffany-100 to-tiffany-200 text-tiffany-700 transition group-hover:from-tiffany-500 group-hover:to-tiffany-600 group-hover:text-white">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-tiffany-900">{s.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink-500">{s.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-tiffany-600">
                  Подробнее
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-tiffany-100/60 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-[2.5rem] shadow-glow">
                  <Image
                    src="https://placehold.co/800x600/d6f7f4/0abab5?text=%D0%9F%D1%80%D0%B0%D1%87%D0%B5%D1%87%D0%BD%D0%B0%D1%8F&font=montserrat"
                    alt="Прачечная и химчистка Городская прачечная 78"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-glass">
                  <StarIcon className="h-6 w-6 text-accent-400" />
                  <div>
                    <div className="text-lg font-extrabold text-tiffany-900">{BUSINESS.rating}</div>
                    <div className="text-xs text-ink-500">{BUSINESS.reviews} отзывов</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <div id="features">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-500">
                  Почему выбирают нас
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-tiffany-950 sm:text-4xl">
                  Забота о чистоте — бережно к вашим вещам и времени
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-500">
                  Уютная прачечная у метро в Приморском районе. Приходите сами или доверьте вещи нам — заберём и вернём безупречно чистыми.
                </p>
              </Reveal>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {FEATURES.map((f, i) => (
                  <Reveal key={f.title} delay={i * 90}>
                    <div className="flex gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-tiffany-100 text-tiffany-600">
                        <f.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-bold text-tiffany-900">{f.title}</h3>
                        <p className="mt-0.5 text-sm leading-relaxed text-ink-500">{f.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-accent-400 to-accent-500 p-8 text-white shadow-glow sm:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                  Акция
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Счастливые часы: до 3% бонусами
                </h2>
                <p className="mt-3 max-w-md text-lg text-accent-50">
                  1% с каждого заказа, а с 09:00 до 15:00 — ещё +2%. Акция действует до 31 декабря 2026.
                </p>
                <Link
                  href="/promo"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-accent-500 transition hover:-translate-y-0.5"
                >
                  Подробнее об акции
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="grid aspect-square w-52 place-items-center rounded-full bg-white/15 text-center backdrop-blur-sm animate-pulse-soft">
                  <div>
                    <div className="text-5xl font-extrabold">3%</div>
                    <div className="mt-1 text-sm font-semibold text-accent-50">кэшбэк бонусами</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-tiffany-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-tiffany-700">
              Отзывы
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-tiffany-950 sm:text-4xl">
              Нам доверяют жители Приморского района
            </h2>
          </div>
          <Link href="/reviews" className="inline-flex items-center gap-1.5 text-sm font-semibold text-tiffany-600 hover:text-tiffany-800">
            Все отзывы <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REVIEWS.slice(0, 3).map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-soft">
                <div className="flex items-center gap-1 text-accent-400">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <StarIcon key={j} className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink-600">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-tiffany-200 to-tiffany-400 text-base font-extrabold text-tiffany-800">
                    {r.name[0]}
                  </span>
                  <div>
                    <div className="font-bold text-tiffany-900">{r.name}</div>
                    <div className="text-xs text-ink-400">{r.date}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] shadow-glow">
            <iframe
              src={BUSINESS.mapEmbed}
              title="Городская прачечная 78 — как нас найти на карте"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-tiffany-100 text-tiffany-600">
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-tiffany-900">{BUSINESS.addressShort}</div>
                <div className="text-sm text-ink-500">{BUSINESS.hours}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-tiffany-100 px-3 py-1.5 text-sm font-semibold text-tiffany-700">
                <CheckIcon className="h-4 w-4" /> Самообслуживание
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-tiffany-100 px-3 py-1.5 text-sm font-semibold text-tiffany-700">
                <CardIcon className="h-4 w-4" /> Картой
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      <ContactCTA />
    </>
  );
}
