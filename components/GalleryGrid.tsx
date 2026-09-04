"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CloseIcon } from "./icons";
import type { GalleryImage } from "@/lib/gallery";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((a) => (a === null ? a : (a + images.length - 1) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={img.alt + i}
            type="button"
            onClick={() => setActive(i)}
            className="group relative overflow-hidden rounded-3xl shadow-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-tiffany-300"
            aria-label={`Открыть фото: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={720}
              height={540}
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-tiffany-950/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-4 left-4 translate-y-2 text-left text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {img.alt}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-tiffany-950/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={images[active].alt} onClick={close}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
            aria-label="Закрыть"
            className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Предыдущее фото"
            className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-xl text-white transition hover:bg-white/30 sm:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Следующее фото"
            className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-xl text-white transition hover:bg-white/30 sm:right-6"
          >
            ›
          </button>
          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={1200}
              height={900}
              className="max-h-[80vh] rounded-3xl object-contain shadow-glow"
            />
          </figure>
        </div>
      )}
    </>
  );
}
