import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ContactCTA } from "@/components/ContactCTA";
import { GALLERY_IMAGES } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Фото",
  description:
    "Фотогалерея прачечной и химчистки «Городская прачечная 78»: техника самообслуживания, зал, зона химчистки. Санкт-Петербург, Яхтенная улица, 28.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Фотогалерея"
        title="Загляните к нам"
        subtitle="Современная техника, уютный зал и безупречная чистота — посмотрите, как выглядит наша прачечная."
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-6 text-sm text-ink-400">
            Нажмите на фото, чтобы открыть его в полном размере.
          </p>
          <GalleryGrid images={GALLERY_IMAGES} />
        </Reveal>
      </section>

      <ContactCTA />
    </>
  );
}
