export type GalleryImage = { src: string; alt: string };

const ph = (label: string, fg = "45c6c0", bg = "d6f7f4") =>
  `https://placehold.co/720x540/${bg}/${fg}?text=${encodeURIComponent(label)}&font=montserrat`;

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: ph("Стиральные машины"), alt: "Стиральные машины самообслуживания" },
  { src: ph("Сушильные барабаны"), alt: "Сушильные барабаны" },
  { src: ph("Гладильная зона"), alt: "Гладильная зона" },
  { src: ph("Химчистка"), alt: "Зона химчистки" },
  { src: ph("Чистый зал"), alt: "Чистый и уютный зал" },
  { src: ph("Стойка приёма"), alt: "Стойка приёма заказов" },
  { src: ph("Ковры"), alt: "Химчистка ковровых изделий" },
  { src: ph("Обувь"), alt: "Чистка обуви" },
  { src: ph("Готовые заказы"), alt: "Готовые к выдаче заказы" },
];
