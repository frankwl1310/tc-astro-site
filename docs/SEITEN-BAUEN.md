# Anleitung: Seiten mit dem Taipan-Styleguide bauen

Diese Anleitung nutzt den [Taipan-Styleguide v2](https://www.taipanconsulting.de/hubfs/0_temp/Taipan-Styleguide-v2.html). Alle Werte und Regeln stehen in [STYLEGUIDE.md](./STYLEGUIDE.md).

---

## 1. Voraussetzungen

- **Astro** + **Tailwind** sind eingerichtet.
- Design-Tokens (Farben, Typo, Spacing) sind in `src/styles/global.css` bzw. Tailwind-Theme abgebildet (siehe Abschnitt „Implementierung“ unten).

---

## 2. Seitenstruktur

- Jede Seite hat ein **Layout** (z. B. `BaseLayout.astro`) mit gemeinsamer Navigation und Footer.
- Der Inhalt besteht aus **Sektionen** (full-width Blöcke), die nacheinander kommen.
- **Content-Container:** `max-width: 1120px`, zentriert, seitliches Padding (z. B. 24px mobil, 40px Desktop).

---

## 3. Sektions-Typen verwenden

Es gibt genau **drei Sektions-Typen**. Im Wechsel einsetzen, **nie zwei gleiche hintereinander**.

| Typ | Klasse / Hintergrund | Wann nutzen |
|-----|----------------------|-------------|
| **A – Weiß**   | `bg-white` / `#FFFFFF` | Standard-Inhalt, Einleitung, Erklärung |
| **B – Dunkel** | Blue 800 `#1A3349`     | Starke Kontrast-Sektion, Headlines weiß, Fließtext Blue 400/100 |
| **C – Hell**   | Blue 50 `#F5F8FB`      | Aufzählungen, Entlastung, Zwischenton |

**Beispiel-Reihenfolge:** A → B → A → C → B → A.

---

## 4. Typografie umsetzen

- **H1:** eine pro Seite oder pro großer Sektion, Inter Bold, 3.2rem, Farbe Blue 800.
- **H2:** Abschnitts-Headlines, Inter SemiBold, 2rem, Blue 800.
- **H3:** Sub-Headlines, Inter SemiBold, 1.6rem, Blue 600.
- **Body:** Inter Regular, 18px, Anthrazit (#2D2D2D), line-height 1.75; **max-width 680px** für Lesbarkeit.
- **Pull Quote:** maximal **eine pro Sektion**, Inter Light Italic, 22px, linke Linie 3px Blue 600.
- **Label/Overline:** 13px, SemiBold, uppercase, letter-spacing 1.5px, Gray 500.

---

## 5. Abstände

- **Zwischen Sektionen:** 80–100px (z. B. `py-20` oder `py-24`).
- **Innenpadding Sektion:** 64–80px oben/unten (z. B. `py-16 md:py-20`).
- **Nach Headline:** 24px (z. B. `mb-6`).
- **Zwischen Absätzen:** 20px (z. B. `mb-5`).

---

## 6. Buttons und CTAs

- **Primärer CTA (Orange):** nur **einen** pro sichtbarem Bereich. Text z. B. „Gespräch vereinbaren“. Farbe Orange, Hover Orange Hover. Kein Orange für „Mehr erfahren“, Tags oder Icons.
- **Sekundäre Buttons:** Blau (z. B. Blue 800 auf Weiß, oder Outline). Auf dunklem Grund: heller Text (Blue 100/White), optional Blue 400 für Sekundär-Button.

---

## 7. Checkliste vor Go-Live

- [ ] Nur Inter, keine zweite Schrift.
- [ ] Fließtext in Anthrazit, kein #000.
- [ ] Orange nur für den einen primären CTA pro Viewport.
- [ ] Sektions-Reihenfolge: A/B/C wechselnd, nie zwei gleiche hintereinander.
- [ ] Pro Sektion maximal eine Pull Quote.
- [ ] Content-Container 1120px, Prose max. 680px.
- [ ] Spacing wie oben (Sektionen, Headlines, Absätze).

---

## 8. Implementierung im Projekt

Die Tokens und Utilities sind in **`src/styles/global.css`** hinterlegt:

- **Schrift:** Inter (Google Fonts), global für `body`.
- **Farben:** Tailwind-Theme unter `@theme` (z. B. `taipan-blue-900`, `taipan-blue-800`, `taipan-orange`, `taipan-anthrazit`, `taipan-gray-*`). Nutzung z. B. `bg-taipan-blue-800`, `text-taipan-orange`.
- **Sektions-Typen:** `.section-a` (Weiß), `.section-b` (Dunkel), `.section-c` (Hell).
- **Layout:** `.max-w-content` (1120px), `.max-w-prose` (680px), `.section-padding` (seitliches Padding).
- **Typo:** `.pull-quote`, `.label-overline`, `.text-body` wie im Styleguide.

Beim Bauen neuer Seiten: diese Klassen und den [STYLEGUIDE.md](./STYLEGUIDE.md) verwenden.
