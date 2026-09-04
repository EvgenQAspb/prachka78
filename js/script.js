/* ==========================================================================
   Городская прачечная 78 — интерактив и анимации
   ========================================================================== */

(function () {
  "use strict";

  var doc = document;

  /* ---------- Текущий год в футере ---------- */
  function setYear() {
    var el = doc.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Бургер-меню ---------- */
  function initBurger() {
    var burger = doc.querySelector(".burger");
    var nav = doc.querySelector(".nav");
    if (!burger || !nav) return;

    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      var expanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!expanded));
    });

    // Закрыть меню при клике по ссылке
    nav.addEventListener("click", function (e) {
      if (e.target.closest(".nav__link")) {
        nav.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Scroll reveal через IntersectionObserver ---------- */
  function initReveal() {
    var items = doc.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { obs.observe(el); });
  }

  /* ---------- Анимированные счётчики ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = el.getAttribute("data-decimals") || "0";
    var duration = 2000;
    var suffix = el.getAttribute("data-suffix") || "";
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = doc.querySelectorAll("[data-count]");
    if (!counters.length) return;

    if (!("IntersectionObserver" in window)) {
      counters.forEach(function (el) { animateCount(el); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { obs.observe(el); });
  }

  /* ---------- Parallax на hero ---------- */
  function initParallax() {
    var hero = doc.querySelector(".hero");
    if (!hero) return;
    var bg = hero.querySelector(".hero__bg");
    if (!bg) return;

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.pageYOffset || doc.documentElement.scrollTop;
        if (y < hero.offsetHeight) {
          bg.style.transform = "translateY(" + y * 0.3 + "px)";
        }
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Переход между страницами (fade) ---------- */
  function initPageFade() {
    var links = doc.querySelectorAll('.nav__link[href], a[data-page-link]');
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        var href = link.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("tel:") ||
            href.startsWith("wa.me") || href.startsWith("t.me") || href.startsWith("http")) {
          return;
        }
        // Только внутренние .html переходы
        if (href.indexOf("http") === 0 && href.indexOf(window.location.hostname) === -1) return;
        if (href.indexOf(".html") === -1) return;
        e.preventDefault();
        doc.body.style.transition = "opacity 0.3s ease-in-out";
        doc.body.style.opacity = "0";
        setTimeout(function () {
          window.location.href = href;
        }, 300);
      });
    });
  }

  /* ---------- Лайтбокс галереи ---------- */
  function initLightbox() {
    var galleryItems = doc.querySelectorAll(".gallery__item");
    var body = doc.body;
    if (!galleryItems.length) return;

    // Создаём лайтбокс
    var lb = doc.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("aria-hidden", "true");
    lb.setAttribute("role", "dialog");
    lb.innerHTML =
      '<img class="lightbox__img" alt="" />' +
      '<button class="lightbox__close" aria-label="Закрыть просмотр">&times;</button>';
    body.appendChild(lb);

    var lbImg = lb.querySelector(".lightbox__img");
    var lbClose = lb.querySelector(".lightbox__close");

    function open(src, alt) {
      lbImg.src = src;
      lbImg.alt = alt || "";
      lb.classList.add("is-open");
      lb.setAttribute("aria-hidden", "false");
      body.style.overflow = "hidden";
    }
    function close() {
      lb.classList.remove("is-open");
      lb.setAttribute("aria-hidden", "true");
      body.style.overflow = "";
    }

    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var img = item.querySelector("img");
        if (img) open(img.getAttribute("src"), img.getAttribute("alt"));
      });
    });

    lbClose.addEventListener("click", close);
    lb.addEventListener("click", function (e) {
      if (e.target === lb) close();
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---------- Форма обратной связи (UI, без отправки) ---------- */
  function initForms() {
    var forms = doc.querySelectorAll(".form");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var success = form.querySelector(".form__success");
        if (success) success.style.display = "block";
        form.reset();
        setTimeout(function () {
          if (success) success.style.display = "none";
        }, 6000);
      });
    });
  }

  /* ---------- Таймер до конца акции ---------- */
  function initTimer() {
    var timer = doc.getElementById("promoTimer");
    if (!timer) return;
    var blocks = timer.querySelectorAll(".timer__num");
    if (blocks.length < 4) return;

    var end = new Date("2026-12-31T23:59:59").getTime();

    function pad(n) { return n < 10 ? "0" + n : String(n); }

    function update() {
      var now = Date.now();
      var diff = end - now;
      if (diff < 0) {
        blocks.forEach(function (b) { b.textContent = "00"; });
        return;
      }
      var days = Math.floor(diff / 86400000);
      var hours = Math.floor((diff % 86400000) / 3600000);
      var mins = Math.floor((diff % 3600000) / 60000);
      var secs = Math.floor((diff % 60000) / 1000);
      blocks[0].textContent = pad(days);
      blocks[1].textContent = pad(hours);
      blocks[2].textContent = pad(mins);
      blocks[3].textContent = pad(secs);
    }
    update();
    setInterval(update, 1000);
  }

  /* ---------- Запуск ---------- */
  function init() {
    setYear();
    initBurger();
    initReveal();
    initCounters();
    initParallax();
    initPageFade();
    initLightbox();
    initForms();
    initTimer();
  }

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
