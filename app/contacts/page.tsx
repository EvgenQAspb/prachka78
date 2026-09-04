"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BUSINESS } from "@/lib/data";
import {
  PhoneIcon,
  PinIcon,
  ClockIcon,
  TelegramIcon,
  WhatsAppIcon,
  VkIcon,
  CheckIcon,
} from "@/components/icons";

const CONTACT_CARDS = [
  {
    icon: PinIcon,
    title: "Адрес",
    lines: [BUSINESS.addressShort, "пересечение с ул. Оптиков"],
  },
  {
    icon: PhoneIcon,
    title: "Телефон",
    lines: [BUSINESS.phoneDisplay],
    href: BUSINESS.phoneHref,
  },
  {
    icon: ClockIcon,
    title: "Режим работы",
    lines: [BUSINESS.hours, "без выходных"],
  },
];

export default function ContactsPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Как нас найти"
        subtitle="Приезжайте, звоните или пишите в мессенджеры — мы на связи каждый день."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            {CONTACT_CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="flex items-start gap-4 rounded-[1.75rem] bg-white p-6 shadow-soft">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-tiffany-100 to-tiffany-200 text-tiffany-700">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-tiffany-900">{c.title}</h3>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block text-lg font-semibold text-tiffany-600 hover:text-tiffany-800">
                        {c.lines[0]}
                      </a>
                    ) : (
                      c.lines.map((l) => (
                        <p key={l} className="mt-1 text-ink-600">{l}</p>
                      ))
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={240}>
              <div className="rounded-[1.75rem] bg-white p-6 shadow-soft">
                <h3 className="font-bold text-tiffany-900">Мы в сети</h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a href={BUSINESS.telegram} target="_blank" rel="noopener" aria-label="Telegram" className="inline-flex items-center gap-2 rounded-full bg-tiffany-100 px-4 py-2.5 text-sm font-semibold text-tiffany-700 transition hover:bg-tiffany-200">
                    <TelegramIcon className="h-5 w-5" /> Telegram
                  </a>
                  <a href={BUSINESS.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp" className="inline-flex items-center gap-2 rounded-full bg-tiffany-100 px-4 py-2.5 text-sm font-semibold text-tiffany-700 transition hover:bg-tiffany-200">
                    <WhatsAppIcon className="h-5 w-5" /> WhatsApp
                  </a>
                  <a href={BUSINESS.vk} target="_blank" rel="noopener" aria-label="ВКонтакте" className="inline-flex items-center gap-2 rounded-full bg-tiffany-100 px-4 py-2.5 text-sm font-semibold text-tiffany-700 transition hover:bg-tiffany-200">
                    <VkIcon className="h-5 w-5" /> ВКонтакте
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-9">
              <h2 className="text-2xl font-extrabold text-tiffany-950">Задать вопрос</h2>
              <p className="mt-2 text-ink-500">Оставьте контакты — мы свяжемся с вами в ближайшее время.</p>

              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-3 rounded-[1.5rem] bg-tiffany-50 p-8 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-tiffany-500 text-white">
                    <CheckIcon className="h-8 w-8" />
                  </span>
                  <h3 className="text-xl font-bold text-tiffany-900">Спасибо!</h3>
                  <p className="max-w-sm text-ink-500">
                    Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-tiffany-900">
                      Ваше имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Как к вам обращаться"
                      className="w-full rounded-2xl border border-tiffany-100 bg-tiffany-50/50 px-4 py-3 text-ink-700 placeholder:text-ink-400 focus:border-tiffany-400 focus:outline-none focus:ring-2 focus:ring-tiffany-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-tiffany-900">
                      Телефон
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="w-full rounded-2xl border border-tiffany-100 bg-tiffany-50/50 px-4 py-3 text-ink-700 placeholder:text-ink-400 focus:border-tiffany-400 focus:outline-none focus:ring-2 focus:ring-tiffany-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-tiffany-900">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Чем можем помочь?"
                      className="w-full rounded-2xl border border-tiffany-100 bg-tiffany-50/50 px-4 py-3 text-ink-700 placeholder:text-ink-400 focus:border-tiffany-400 focus:outline-none focus:ring-2 focus:ring-tiffany-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-tiffany-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-tiffany-600"
                  >
                    Отправить
                  </button>
                  <p className="text-center text-xs text-ink-400">
                    Это витринная форма: в демо-версии ничего никуда не отправляется.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] shadow-glow">
            <iframe
              src={BUSINESS.mapEmbed}
              title="Городская прачечная 78 — Яхтенная улица, 28 на карте"
              className="h-[440px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
