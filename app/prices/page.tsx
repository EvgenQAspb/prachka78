import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { BUSINESS } from "@/lib/data";
import {
  WASH_GROUPS,
  WASH_ADD,
  DRYCLEAN,
  SHOES_COVERS,
  NOTES,
  type PriceRow,
} from "@/lib/prices";
import { PhoneIcon, InfoIcon, PriceIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Цены",
  description:
    "Цены на услуги прачечной и химчистки «Городская прачечная 78»: стирка, сушка, глажка, химчистка одежды, ковров и обуви. Санкт-Петербург, Яхтенная улица, 28.",
};

function SimpleTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-tiffany-50 text-sm font-bold uppercase tracking-wide text-tiffany-700">
            <th className="px-6 py-4">Услуга</th>
            <th className="px-6 py-4 text-right">Стоимость</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-tiffany-50">
          {rows.map((r) => (
            <tr key={r.name} className="transition-colors hover:bg-tiffany-50/60">
              <td className="px-6 py-3.5 text-sm font-medium text-ink-700">{r.name}</td>
              <td className="whitespace-nowrap px-6 py-3.5 text-right text-sm font-extrabold text-tiffany-700">
                {r.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WeightTable() {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-tiffany-50 text-sm font-bold uppercase tracking-wide text-tiffany-700">
            <th className="px-6 py-4">Услуга</th>
            {WASH_GROUPS.weights.map((w) => (
              <th key={w} className="px-6 py-4 text-right">{w}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-tiffany-50">
          {WASH_GROUPS.table.map((r, i) => (
            <tr key={r.name} className="transition-colors hover:bg-tiffany-50/60">
              <td className="px-6 py-3.5 text-sm font-medium text-ink-700">{r.name}</td>
              {WASH_GROUPS.byWeight[i].map((p, j) => (
                <td key={j} className="whitespace-nowrap px-6 py-3.5 text-right text-sm font-extrabold text-tiffany-700">
                  {p}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border-t border-tiffany-50 bg-tiffany-50/50 px-6 py-3 text-xs text-ink-500">
        {WASH_GROUPS.note}
      </div>
    </div>
  );
}

export default function PricesPage() {
  return (
    <>
      <PageHero
        eyebrow="Цены"
        title="Цены на услуги"
        subtitle="Ориентировочные цены на основные услуги. Точную стоимость и срок уточняйте у администратора по телефону."
      />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-12">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-tiffany-100 text-tiffany-600">
                <PriceIcon className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-extrabold text-tiffany-950">Стирка, сушка и глажка</h2>
            </div>
            <p className="mt-3 text-ink-500">Цены за одну загрузку/единицу. Есть комплексные программы «под ключ».</p>
            <div className="mt-6"><WeightTable /></div>
            <div className="mt-6"><SimpleTable rows={WASH_ADD} /></div>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-tiffany-100 text-tiffany-600">
                <PriceIcon className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-extrabold text-tiffany-950">Химчистка одежды</h2>
            </div>
            <p className="mt-3 text-ink-500">
              Готовность 3–5 дней для большинства вещей, 3–14 дней — для повседневной и деловой одежды.
            </p>
            <div className="mt-6"><SimpleTable rows={DRYCLEAN} /></div>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-tiffany-100 text-tiffany-600">
                <PriceIcon className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-extrabold text-tiffany-950">Обувь, ковры и аксессуары</h2>
            </div>
            <p className="mt-3 text-ink-500">Химчистка обуви, стирка ковров, чистка аксессуаров и экипировки.</p>
            <div className="mt-6"><SimpleTable rows={SHOES_COVERS} /></div>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {NOTES.map((n, i) => (
              <div key={i} className="flex gap-3 rounded-[1.5rem] bg-accent-50 p-5 text-sm leading-relaxed text-ink-600">
                <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                <span>{n}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-500">
            Полный прайс на всю линейку услуг — в прачечной или по телефону{" "}
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-1 font-semibold text-tiffany-600 hover:text-tiffany-800">
              <PhoneIcon className="h-4 w-4" /> {BUSINESS.phoneDisplay}
            </a>
          </p>
        </Reveal>
      </section>

      <ContactCTA />
    </>
  );
}
