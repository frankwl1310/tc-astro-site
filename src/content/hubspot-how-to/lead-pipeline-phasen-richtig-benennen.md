---
title: "Lead-Pipeline-Phasen in HubSpot so benennen, dass Automation und Team-Alltag funktionieren"
description: "Wie ihr eine Lead-Pipeline mit klaren Phasennamen strukturiert, sodass Workflow-Enrollment-Kriterien greifen, Sequences passgenau starten und das Team die Logik versteht."
pubDate: 2026-03-21
author:
  name: "Frank Welsch-Lehmann"
  url: "https://www.linkedin.com/in/frankwelschlehmann/"
---

Eine Lead-Pipeline ist mehr als eine Visualisierung des Vertriebsprozesses. Sie ist der Auslöser für Automatisierungen, die Grundlage für Reporting und die gemeinsame Sprache im Team. Wenn die Phasennamen unklar oder inkonsistent sind, kollabiert alles dahinter.

## Warum Phasennamen so wichtig sind

HubSpot-Workflows und Sequences können auf Basis des Pipeline-Status ausgelöst werden. Heißt eine Phase mal "Qualifiziert", mal "Qualifizierung läuft" und mal "SQL" — je nachdem, wer sie angelegt hat — funktioniert kein Enrollment-Kriterium zuverlässig. Außerdem führt das dazu, dass Mitarbeitende die Phasen unterschiedlich interpretieren und Leads an falschen Stellen ablegen.

Gute Phasennamen sind eindeutig, handlungsorientiert und aus der Perspektive des nächsten Schritts formuliert — nicht aus der Perspektive des vergangenen.

## Die vier Grundphasen einer funktionierenden Lead-Pipeline

Eine bewährte Struktur für B2B-Midmarket gliedert sich in vier Hauptphasen:

**Phase 1 — Neu / Eingang:** Der Lead ist im System, aber noch nicht bewertet. Kein menschlicher Kontakt hat stattgefunden. Typischer Name: `Eingang` oder `Neu`.

**Phase 2 — Kontaktaufnahme läuft:** Ein erster Kontaktversuch wurde unternommen, aber noch keine qualifizierte Reaktion. Typischer Name: `Kontaktaufnahme` oder `Erstversuch`.

**Phase 3 — Qualifiziert:** Ein qualifiziertes Gespräch hat stattgefunden, der Lead ist als relevant bewertet. Typischer Name: `Qualifiziert` oder `Erstgespräch geführt`.

**Phase 4 — In Bearbeitung / Demo geplant:** Konkrete nächste Schritte sind vereinbart. Typischer Name: `Demo geplant` oder `Angebot in Vorbereitung`.

Dazu kommen Abschluss-Status wie `Gewonnen` und `Verloren` sowie ggf. `Parkposition` für Leads, die nicht sofort weiterbearbeitet werden.

## Separate Sequences pro Pipeline-Phase

Ein häufiger Fehler ist, eine einzige E-Mail-Sequenz für alle Leads zu fahren. Besser ist es, pro Hauptphase eine eigene Sequence zu hinterlegen — mit jeweils passendem Inhalt und Tonalität:

- Phase 1 → kurze Einleitungsmail, kein Verkaufsdruck
- Phase 2 → Follow-up mit Mehrwertinhalt nach ausgebliebenem Erstkontakt
- Phase 3 → Vorbereitung auf das Erstgespräch, Agenda-Mail
- Phase 4 → konkrete nächste Schritte, Angebotsankündigung

Diese Trennung macht Automatisierungen präziser und vermeidet, dass Leads dieselbe Mail zweimal erhalten.

## Enrollment-Kriterien korrekt setzen

Wenn ihr Workflows an Pipeline-Phasen koppelt, achtet auf folgende Punkte:

Nutzt als Trigger "Lead-Status hat sich geändert auf [Phasenwert]" und nicht "Lead wurde erstellt". Sonst laufen bei Importen alle Automationen gleichzeitig an.

Kombiniert den Pipeline-Status immer mit einem Marken- oder Segment-Filter, wenn ihr mehrere Pipelines oder Kundengruppen im gleichen Account verwaltet. Ohne diesen Filter triggern Workflows markenübergreifend.

## Nachträgliche Umbenennung: so geht es ohne Schmerzen

Wenn ihr bestehende Phasennamen ändern möchtet, könnt ihr das direkt in den Pipeline-Einstellungen tun. HubSpot übernimmt die Umbenennung für alle bestehenden Datensätze automatisch. Enrollment-Kriterien in Workflows beziehen sich auf den internen Wert (nicht den Anzeigenamen) — prüft daher nach der Umbenennung, ob eure Workflows noch korrekt konfiguriert sind.
