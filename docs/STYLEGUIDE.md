# Taipan Consulting — Styleguide v2

**Basis:** Inter, eine Schriftfamilie. Option B: Neustart.  
**Quelle:** [Taipan-Styleguide v2](https://www.taipanconsulting.de/hubfs/0_temp/Taipan-Styleguide-v2.html) (Februar 2026)

---

## 01 — Farben

### Primär – Blau

Kernfarbe der Marke. Für Headlines, dunkle Sektionen, Navigation.

| Token    | Hex      | Verwendung                    | CSS (HSL)     |
|----------|----------|-------------------------------|---------------|
| Blue 900 | `#11212F`| Navigation, Footer            | `207 49% 13%` |
| Blue 800 | `#1A3349`| Headlines, dunkle Sektionen   | `208 46% 19%` |
| Blue 600 | `#3A72A3`| Sub-Headlines, Links, Pull-Quote-Linie | `207 42% 43%` |
| Blue 400 | `#85AFD3`| Akzente auf dunklem Grund    | `210 47% 67%` |
| Blue 100 | `#EDF2F6`| Tags, Badges, Hover-States    | `210 32% 95%` |
| Blue 50  | `#F5F8FB`| Helle Sektions-Hintergründe   | `210 33% 97%` |

### Neutral – Graustufen

Für Text, Rahmen, dezente Flächen. **Niemals reines Schwarz (#000) für Fließtext.**

| Token     | Hex      | Verwendung              | CSS (HSL)   |
|-----------|----------|-------------------------|-------------|
| Anthrazit | `#2D2D2D`| Fließtext (Standard)   | `0 0% 18%`  |
| Gray 700  | `#686F75`| Sekundärer Text         | `210 5% 43%`|
| Gray 500  | `#A3ADB7`| Platzhalter, Labels     | `208 10% 68%`|
| Gray 100  | `#E8E8E8`| Trennlinien, Rahmen    | `0 0% 91%`  |

### Akzent – Orange

**Ausschließlich für primäre CTAs.** Nirgendwo sonst.

| Token       | Hex      | Verwendung           | CSS (HSL)    |
|-------------|----------|----------------------|--------------|
| Orange      | `#D74315`| Primäre CTA-Buttons  | `13 82% 46%` |
| Orange Hover| `#BF3A11`| Hover des CTA        | `13 83% 41%` |

---

## 02 — Typografie

Eine Schriftfamilie (Inter). Hierarchie durch Größe, Gewicht und Farbe.

| Element    | Schrift      | Größe   | Farbe     | line-height | Sonstiges |
|------------|--------------|---------|-----------|-------------|-----------|
| **H1**     | Inter Bold   | 3.2rem  | #1A3349   | 1.15        | letter-spacing: -0.5px |
| **H2**     | Inter SemiBold| 2rem   | #1A3349   | 1.25        | — |
| **H3**     | Inter SemiBold| 1.6rem | #3A72A3   | 1.3         | — |
| **Body**   | Inter Regular| 18px    | #2D2D2D   | 1.75        | max-width: 680px |
| **Pull Quote** | Inter Light Italic | 22px | #1A3349 | 1.6 | border-left: 3px #3A72A3 |
| **Small/Nav**  | Inter Medium | 14px  | #686F75   | —           | — |
| **Label/Overline** | Inter SemiBold | 13px | #A3ADB7 | — | uppercase, letter-spacing: 1.5px |

---

## 03 — Komponenten

### Buttons

- **Orange** nur für den **primären CTA**. Maximal ein Orange-Button pro Viewport.
- Weitere Buttons: Blau (z. B. Blue 800 auf hellem Grund, Blue 400/White auf dunklem Grund).

Beispiele:
- Primär (CTA): „Gespräch vereinbaren“ — Orange, Hover Orange Hover.
- Sekundär: „Mehr erfahren“, „Arbeitsweise ansehen“ — Blau.

### Links im Fließtext

Farbe Blue 600 (#3A72A3), unterstrichen oder klar erkennbar. Kein Orange.

### Pull Quote

- Für **einen** Schlüsselsatz pro Sektion.
- Stil: Inter Light Italic, 22px, #1A3349, linke Linie 3px #3A72A3, line-height 1.6.

---

## 04 — Sektions-Typen

Drei Typen im Wechsel. **Nie zwei gleiche Typen hintereinander.**

| Typ | Hintergrund | Verwendung |
|-----|-------------|------------|
| **A – Weiß**   | `#FFFFFF` | Standard-Inhaltssektionen |
| **B – Dunkel** | Blue 800 `#1A3349` | Kontrast, Headlines in Weiß, Text in Blue 400/100 |
| **C – Hell**   | Blue 50 `#F5F8FB` | Entlastung, Zwischenton |

Reihenfolge z. B.: A → B → A → C → B. Monotonie vermeiden.

---

## 05 — Spacing

| Element              | Wert        |
|----------------------|-------------|
| Zwischen Sektionen  | 80–100px    |
| Sektions-Padding (oben/unten) | 64–80px |
| Nach Headline        | 24px        |
| Zwischen Absätzen    | 20px        |
| Body Zeilenabstand   | 1.75        |
| Max. Textbreite (Prose) | 680px     |
| Content-Container (max-width) | 1120px |

---

## 06 — Regeln (Do’s and Don’ts)

### Do

- **Orange nur für primäre CTAs** — ein Orange-Button pro sichtbarem Bereich.
- **Anthrazit (#2D2D2D)** für Fließtext.
- **Pull-Quotes sparsam** — maximal eine pro Sektion.
- **Gewichtsstufen für Hierarchie** — Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700).
- **Sektions-Wechsel** — A → B → A → C → B, nie zwei gleiche Typen hintereinander.

### Don’t

- **Kein Orange** für Highlights, Tags, Rahmen, Unterstreichungen, Badges, Icons.
- **Kein reines Schwarz (#000)** für Fließtext.
- **Nie zwei gleiche Sektions-Typen** hintereinander.
- **Nicht mehr als zwei weiße Sektionen** in Folge ohne Unterbrechung.
- **Keine zweite Schriftfamilie** — nur Inter.
- **Nicht alles hervorheben** — wenige Ankerpunkte setzen.

---

*Taipan Consulting GmbH · Styleguide v2.0 · Februar 2026*
