"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon, PhoneIcon, TelegramIcon, WhatsAppIcon } from "./icons";
import { Cat } from "./Cat";

const NAV = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/services", label: "Услуги" },
  { href: "/prices", label: "Цены" },
  { href: "/promo", label: "Акции" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/gallery", label: "Фото" },
  { href: "/contacts", label: "Контакты" },
];

const PHONE_DISPLAY = "+7 (950) 039-89-88";
const PHONE_HREF = "tel:+79500398988";
const TG = "https://t.me/+79500398988";
const WA = "https://wa.me/+79500398988";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/80 backdrop-blur-xl shadow-glass"
          : "bg-tiffany-50/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Городская прачечная 78 — на главную">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-tiffany-400 to-tiffany-600 text-white shadow-soft transition-transform group-hover:scale-105">
            <BasketMark />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-tight text-tiffany-900 sm:text-base">
              Городская прачечная 78
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-tiffany-600">
              <Cat className="h-4 w-4" label="Кот-талисман" />
              Прачечная и химчистка · СПб
            </span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Основное меню">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? "text-tiffany-700"
                      : "text-ink-600 hover:text-tiffany-700"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-tiffany-500" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-full bg-tiffany-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-tiffany-600 md:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={TG}
            target="_blank"
            rel="noopener"
            aria-label="Написать в Telegram"
            className="grid h-10 w-10 place-items-center rounded-full bg-tiffany-100 text-tiffany-700 transition hover:bg-tiffany-200"
          >
            <TelegramIcon className="h-5 w-5" />
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            aria-label="Написать в WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full bg-tiffany-100 text-tiffany-700 transition hover:bg-tiffany-200"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full bg-tiffany-100 text-tiffany-700 transition hover:bg-tiffany-200 lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-tiffany-100 bg-white/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6" aria-label="Мобильное меню">
            <ul className="grid gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-base font-semibold transition ${
                      isActive(item.href)
                        ? "bg-tiffany-100 text-tiffany-800"
                        : "text-ink-700 hover:bg-tiffany-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3">
                <a href={PHONE_HREF} className="flex items-center justify-center gap-2 rounded-2xl bg-tiffany-500 px-4 py-3 text-base font-semibold text-white">
                  <PhoneIcon className="h-5 w-5" />
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

function BasketMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <line x1="3" x2="21" y1="6" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
