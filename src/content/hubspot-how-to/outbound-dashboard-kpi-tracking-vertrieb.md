---
title: "Ein Sales-KPI-Dashboard in HubSpot bauen, das manuelle Excel-Reports ersetzt"
description: "Wie ihr ein Outbound-Dashboard mit Anwahlversuchen, Entscheider-Reached-Quote und Conversion-Rates je Mitarbeiter aufbaut — inklusive Meeting-Type-Standardisierung als Voraussetzung."
pubDate: 2026-03-21
author:
  name: "Frank Welsch-Lehmann"
  url: "https://www.linkedin.com/in/frankwelschlehmann/"
---

Viele Vertriebsteams messen ihre Outbound-Performance noch in Excel: Anrufe per Hand eingetragen, Quoten manuell berechnet, wöchentliches Zusammenführen verschiedener Tabellen. HubSpot kann das vollständig ersetzen — aber nur, wenn die Datenbasis stimmt. Der Schlüssel liegt nicht im Dashboard selbst, sondern in der Konsequenz, mit der das Team Aktivitäten protokolliert.

## Die Voraussetzung: Meeting-Type-Standardisierung

Bevor ihr auch nur eine Zeile im Dashboard konfiguriert, müsst ihr sicherstellen, dass alle Termine den richtigen Meeting-Typ eingetragen haben. Ohne diese Standardisierung ist kein Reporting möglich — HubSpot kann nicht unterscheiden, ob ein Termin ein "Erstgespräch", eine "Demo" oder ein "Follow-up" war.

Legt in den Einstellungen unter Aktivitäten → Meeting-Typen eine verbindliche Liste fest. Typische Typen im Outbound-Vertrieb: `Connect & Qualify`, `Discovery Call`, `Demo`, `Follow-up`. Kommuniziert intern, dass diese Felder bei jedem Termin Pflicht sind — und prüft das in einem wöchentlichen Daten-Hygiene-Report.

## Die wichtigsten KPIs im Outbound-Dashboard

**Anwahlversuche:** Zählt alle Anruf-Aktivitäten vom Typ "Outbound Call" — nicht alle Calls pauschal. Wichtig: In HubSpot müsst ihr bei der Call-Erfassung den Ergebnis-Typ differenzieren. Setzt klare Standards dafür, was als "Anwahl" gilt und was nicht.

**Entscheider-Reached-Quote:** Verhältnis von Anwahl-Versuchen zu tatsächlich erreichten Entscheidungsträgern. Dafür braucht ihr ein Call-Outcome-Feld mit mindestens zwei Werten: `Entscheider erreicht` und `Nicht erreicht / Voicemail`.

**Anzahl gesetzter Termine:** Nur Termine mit Meeting-Typ `Connect & Qualify` zählen als "gesetzte Termine" — nicht alle Kalendereinträge. Diese Einschränkung ist entscheidend für die Genauigkeit.

**Conversion-Rate:** Verhältnis von Anwahl zu gesetztem Termin. HubSpot unterstützt Formelfelder (aktuell noch in Beta) für berechnete Properties — alternativ lässt sich die Quote manuell im Report-Builder berechnen.

## Dashboard-Aufbau: eine Oberfläche, mehrere Perspektiven

Legt ein zentrales Outbound-Dashboard an und dupliziert es dann für jedes Teammitglied. Jede Version zeigt dieselben KPIs, gefiltert auf den jeweiligen Mitarbeiter. So können Führungskräfte die Team-Gesamtansicht öffnen und Vertriebsmitarbeitende ihre persönliche Performance — ohne dass Zahlen gemischt werden.

Fügt Quick-Filter für Zeitraum und Zuständigkeit hinzu. Das ermöglicht Tages-, Wochen- und Monatsvergleiche mit einem Klick.

## Daten-Hygiene-Report als Kontrollmechanismus

Ergänzt euer Outbound-Dashboard um einen Daten-Hygiene-Report, der folgendes zeigt: Termine ohne Meeting-Typ, Anrufe ohne Ergebnis-Typ und "Meetings ohne Ergebnis" — also Termine, nach denen weder eine Notiz noch ein Follow-up angelegt wurde.

Diesen Report nutzt ihr in eurem wöchentlichen Team-Meeting als Kurzcheck: Wer hat saubere Daten, wer hat Lücken? Das schafft Verbindlichkeit ohne Mikromanagement.

## Was ihr damit erreicht

Ein gut konfiguriertes Outbound-Dashboard spart eurem Team 1–2 Stunden pro Woche, die bisher für manuelle Excel-Pflege draufgingen. Wichtiger noch: Die Zahlen sind in Echtzeit verfügbar und nicht mehr von manuellen Eingaben abhängig. Führungskräfte sehen sofort, wo das Team steht — und können eingreifen, bevor ein schwaches Quartal erst im Monatsabschluss sichtbar wird.
