window.STATE =
{
  "slug": "gorodskaya-prachechnaya-78",
  "dir": "2026-09-04-gorodskaya-prachechnaya-78",
  "title": "Сайт «Городская прачечная 78»",
  "mode": "semi",
  "depth": "normal",
  "polish": null,
  "tier": "T0",
  "briefFile": "2026-09-04-brief.md",
  "memoryFile": "AGENTS.md",
  "skillDir": "C:/Users/Evgen/.agents/skills/autopilot",
  "startedAt": "2026-09-04T15:20:49+03:00",
  "updatedAt": "2026-09-04T16:20:00+03:00",
  "finishedAt": "2026-09-04T16:20:00+03:00",
  "stages": [
    {
      "id": "preflight",
      "status": "done",
      "startedAt": "2026-09-04T15:20:49+03:00",
      "finishedAt": "2026-09-04T15:21:40+03:00"
    },
    {
      "id": "manifest",
      "status": "done",
      "startedAt": "2026-09-04T15:21:40+03:00",
      "finishedAt": "2026-09-04T15:28:00+03:00"
    },
    {
      "id": "briefing",
      "status": "done",
      "startedAt": "2026-09-04T15:28:00+03:00",
      "finishedAt": "2026-09-04T15:30:00+03:00"
    },
    {
      "id": "spec",
      "status": "done",
      "startedAt": "2026-09-04T15:30:00+03:00",
      "finishedAt": "2026-09-04T15:40:00+03:00"
    },
    {
      "id": "plan",
      "status": "done",
      "startedAt": "2026-09-04T15:40:00+03:00",
      "finishedAt": "2026-09-04T15:42:00+03:00",
      "note": "T0 — без тасок, вся сборка единым проходом"
    },
    {
      "id": "build",
      "status": "done",
      "startedAt": "2026-09-04T15:42:00+03:00",
      "finishedAt": "2026-09-04T16:05:00+03:00"
    },
    {
      "id": "review",
      "status": "done",
      "startedAt": "2026-09-04T16:05:00+03:00",
      "finishedAt": "2026-09-04T16:05:00+03:00",
      "note": "T0 саморевью: ссылки, CSS/JS подключение, tel/wa/tg проверены"
    },
    {
      "id": "final",
      "status": "done",
      "startedAt": "2026-09-04T16:05:00+03:00",
      "finishedAt": "2026-09-04T16:20:00+03:00"
    }
  ],
  "requirements": {
    "total": 34,
    "done": 34,
    "inTicket": 0,
    "inSpec": 34,
    "placeholder": 0,
    "deferred": 0,
    "dropped": 0
  },
  "tickets": [],
  "singlePass": {"files": ["index.html","about.html","services.html","prices.html","promo.html","reviews.html","gallery.html","contacts.html","css/style.css","js/script.js"], "tests": "node --check js/script.js: OK; internal links OK; css/js attached on all pages", "startedAt": "2026-09-04T15:42:00+03:00", "finishedAt": "2026-09-04T16:05:00+03:00"},
  "tests": null,
  "debt": {
    "placeholders": [],
    "assumptions": [],
    "emptyEnv": []
  },
  "additions": [],
  "coverage": {"findings": 6, "resolved": 6, "note": "G2: MISSING SEO (added), HALF gallery grid (specified), HALF about counters (specified), HALF no-overdo rule (added). All fixed in spec."},
  "concerns": [],
  "reviewers": {
    "manifestSpec": null,
    "craft": null
  },
  "blind": {"verdict": "all implemented", "drift": [], "note": "G4 независимая приёмка: все 34 требования брифа — «реализовано», расхождений с манифестом нет. Сайт поднят (python -m http.server), все 8 страниц + css/js отдают 200."}
}
