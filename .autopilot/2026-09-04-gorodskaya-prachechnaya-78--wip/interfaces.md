# Interfaces

## Границы, решённые в спецификации

| Модуль | Владеет | Выставляет | Прячет |
|--------|---------|-----------|--------|
| HTML-страницы (8 шт.) | разметку, семантику, ссылки | class-атрибуты для CSS/JS | структуру (CSS/JS не знают о DOM) |
| `style.css` | все визуальные стили | CSS Custom Properties (переменные цветов) | медиа-запросы, анимации |
| `script.js` | весь интерактив и анимации | обработчики событий | логику IntersectionObserver, параллакса |

## Швы для проверки

- **Навигация**: все 8 страниц ссылаются друг на друга корректно (header/footer)
- **CSS**: все страницы подключают style.css, классы совпадают
- **JS**: script.js загружается на всех страницах, не падает на страницах без определённых элементов (guard checks)

## Что уже построено (T0, единый проход)

- 8 HTML-страниц: `index.html`, `about.html`, `services.html`, `prices.html`, `promo.html`, `reviews.html`, `gallery.html`, `contacts.html`
- `css/style.css` — все стили, CSS Custom Properties (синие/голубые/белые + янтарный акцент), адаптивность (375/768/1440)
- `js/script.js` — бургер-меню, scroll-reveal (IntersectionObserver), анимированные счётчики, parallax hero, page-fade, лайтбокс, форма (UI), таймер акции, год в футере
- Контакты: +7 (950) 039-89-88 (tel:+79500398988), Telegram/WhatsApp по номеру, VK vk.ru/prachka78spb
- Режим работы: ежедневно 9:00–21:00 (реальные данные из референс-PDF)
- Реальные цены из референс-PDF в `prices.html`
- Фото: плейсхолдеры placehold.co
- Юр. реквизиты в футере: ИП Клипачев И.В., ОГРНИП 323784700192634, ИНН 540543766407
- Проверено: `node --check js/script.js` ✓, все внутренние ссылки ✓, все страницы подключают CSS/JS ✓

## Правила проекта

- Стек: чистый HTML5 + CSS3 + Vanilla JS. Без React/Vue/сборщиков/Bootstrap/Tailwind.
- Структура: `index.html`, `about.html`, `services.html`, `prices.html`, `promo.html`, `reviews.html`, `gallery.html`, `contacts.html`, `css/style.css`, `js/script.js`
- Адаптивность: mobile-first, breakpoints 375px → 768px → 1440px
- Цвета: CSS Custom Properties `--color-primary: #1a56db`, `--color-accent: #f59e0b`, etc.
- Анимации: IntersectionObserver, requestAnimationFrame, CSS transitions/animations, ease-in-out 0.3–0.6s
- Плейсхолдеры: placehold.co URL inline (без локальных файлов изображений)
- Юридические данные: ИП Клипачев И.В., ОГРНИП 323784700192634, ИНН 540543766407
- Контакты: +7 (950) 039-89-88, Яхтенная 28, 9:00–21:00, vk.ru/prachka78spb
- Тестирование: `npm run build` если есть, иначе открыть index.html в браузере
- Не трогать: .autopilot/ директорию
