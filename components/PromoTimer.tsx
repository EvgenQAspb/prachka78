"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-31T23:59:59");

function diff(target: Date) {
  const ms = target.getTime() - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export function PromoTimer() {
  const [t, setT] = useState(() => diff(TARGET));

  useEffect(() => {
    const id = setInterval(() => setT(diff(TARGET)), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { label: "дней", value: t.days },
    { label: "часов", value: t.hours },
    { label: "минут", value: t.minutes },
    { label: "секунд", value: t.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {cells.map((c) => (
        <div key={c.label} className="text-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-2xl font-extrabold text-accent-500 shadow-soft sm:h-20 sm:w-20 sm:text-3xl">
            {String(c.value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-tiffany-900">{c.label}</div>
        </div>
      ))}
    </div>
  );
}
