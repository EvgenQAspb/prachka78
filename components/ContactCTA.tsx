import Link from "next/link";
import { BUSINESS } from "@/lib/data";
import { PhoneIcon, TelegramIcon, WhatsAppIcon, ArrowRightIcon } from "./icons";
import { Reveal } from "./Reveal";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-tiffany-500 via-tiffany-600 to-tiffany-800 p-8 text-white shadow-glow sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-tiffany-400/30 blur-3xl" />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Остались вопросы?
              </h2>
              <p className="mt-3 max-w-xl text-lg text-tiffany-100">
                Позвоните или напишите в мессенджеры — расскажем об услугах, ценах и свободной технике.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-tiffany-700 shadow-soft transition hover:-translate-y-0.5"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={BUSINESS.telegram}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-tiffany-950/20 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/30 transition hover:bg-tiffany-950/30"
                >
                  <TelegramIcon className="h-5 w-5" />
                  Telegram
                </a>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-tiffany-950/20 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/30 transition hover:bg-tiffany-950/30"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
            <Link
              href="/contacts"
              className="group inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/25"
            >
              Все контакты
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
