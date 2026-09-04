import Link from "next/link";
import { PhoneIcon, TelegramIcon, WhatsAppIcon, VkIcon, PinIcon, ClockIcon } from "./icons";

const NAV = [
  { href: "/about", label: "О нас" },
  { href: "/services", label: "Услуги" },
  { href: "/prices", label: "Цены" },
  { href: "/promo", label: "Акции" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/gallery", label: "Фото" },
  { href: "/contacts", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-tiffany-950 text-tiffany-100">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-tiffany-500/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-tiffany-400 to-tiffany-600 text-white">
                <span className="text-lg">🧺</span>
              </span>
              <span className="text-lg font-extrabold text-white">Городская прачечная 78</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-tiffany-200">
              Прачечная и химчистка в Санкт-Петербурге. Стирка, сушка, глажка, химчистка одежды, ковров и обуви. Самообслуживание и оплата картой.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-tiffany-300">Разделы</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-tiffany-100/80 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-tiffany-300">Контакты</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-tiffany-400" />
                <span>Санкт-Петербург, ул. Яхтенная, 28</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-tiffany-400" />
                <span>Ежедневно 9:00–21:00</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 shrink-0 text-tiffany-400" />
                <a href="tel:+79500398988" className="transition hover:text-white">+7 (950) 039-89-88</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-tiffany-300">Мы в сети</h3>
            <div className="mt-4 flex gap-2">
              <a
                href="https://t.me/+79500398988"
                target="_blank"
                rel="noopener"
                aria-label="Telegram"
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-tiffany-500"
              >
                <TelegramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/+79500398988"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-tiffany-500"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href="https://vk.ru/prachka78spb"
                target="_blank"
                rel="noopener"
                aria-label="ВКонтакте"
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-tiffany-500"
              >
                <VkIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-tiffany-200/70">
          <p>© {new Date().getFullYear()} Городская прачечная 78. Все права защищены.</p>
          <p className="mt-1">ИП Клипачев И.В. · ОГРНИП 323784700192634 · ИНН 540543766407</p>
          <p className="mt-1">197082, Санкт-Петербург, ул. Яхтенная, д. 28, строение 1, помещение 32н</p>
        </div>
      </div>
    </footer>
  );
}
