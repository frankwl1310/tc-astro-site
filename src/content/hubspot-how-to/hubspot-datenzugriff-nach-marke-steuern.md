---
title: "HubSpot-Datenzugriff nach Marke steuern: So seht ihr nur, was euch gehört"
description: "Wie ihr in HubSpot ein Berechtigungskonzept auf Basis von Marken-Properties aufbaut — damit Berater aus unterschiedlichen Brands keine fremden Kontaktdaten sehen."
pubDate: 2026-03-21
author:
  name: "Frank Welsch-Lehmann"
  url: "https://www.linkedin.com/in/frankwelschlehmann/"
---

In Multi-Brand-Umgebungen ist Datentrennung kein Nice-to-have — sie ist Pflicht. Wenn selbstständige Berater (etwa HGB-§84-Handelsvertreter) je nach Vertragsgestaltung auf ihre eigenen Datensätze beschränkt sind, reicht eine lose Teamstruktur in HubSpot nicht aus. Ihr braucht ein sauberes Berechtigungskonzept, das auf einer zentralen Property aufbaut.

## Das Grundproblem: HubSpot teilt standardmäßig alles

HubSpot ist auf Zusammenarbeit ausgelegt. Ohne Konfiguration sehen alle Nutzer in einem Account grundsätzlich alle Kontakte, Deals und Unternehmen. In Konzernen mit mehreren unabhängigen Marken — oder in Strukturen, in denen Berater rechtlich selbstständig sind — ist das ein ernstes Problem. Ein Berater der Marke A sollte niemals die Kundendaten von Marke B einsehen können.

## Die Lösung: Property-basiertes Berechtigungskonzept

Der zentrale Hebel ist eine benutzerdefinierte Property, z. B. `Marke` oder `Brand`, die an jedem Kontakt- und Deal-Datensatz hängt. Auf dieser Basis baut ihr eure gesamte Zugriffskontrolle auf.

**Schritt 1 — Property anlegen:** Legt in den Einstellungen unter Objekte → Kontakte eine Dropdown-Property `Marke` an. Die Optionen entsprechen euren Brands. Wichtig: Diese Property muss bei jedem Datensatz befüllt sein — plant entsprechende Pflichtfeld-Regeln oder Workflow-Automatisierungen ein, die den Wert beim Import setzen.

**Schritt 2 — Teams nach Marken strukturieren:** Legt in den Einstellungen unter Nutzer & Teams für jede Marke ein eigenes Team an. Weist jedem Berater genau einem Team zu.

**Schritt 3 — Datenzugriff auf "Nur eigene" begrenzen:** Setzt die Berechtigungsstufe für Kontakte, Deals und Unternehmen auf "Eigene" oder "Team" — je nachdem, ob Berater nur ihre persönlichen Datensätze oder auch die ihrer Teamkollegen sehen sollen.

**Schritt 4 — Owner-Feld konsequent belegen:** HubSpot steuert den Zugriff im Modus "Nur eigene" über das `Zuständig`-Feld. Jeder Kontakt braucht einen zugewiesenen Owner — ohne Owner ist der Datensatz für niemanden sichtbar außer Admins.

## Typische Fehler und wie ihr sie vermeidet

**Fehlende Owner-Zuweisung beim Import:** Wenn ihr Datensätze per CSV importiert, achtet darauf, die Spalte `HubSpot Owner` zu befüllen. Datensätze ohne Owner fallen aus dem Raster — sie sind unsichtbar für normale Nutzer, aber sichtbar für Admins, was zu Verwirrung führt.

**Workflows ohne Markenfilter:** Wenn Automatisierungen auf alle Kontakte greifen, riskiert ihr, dass beim Daten-Import versehentlich Workflows für fremde Marken ausgelöst werden. Fügt bei jeder Automatisierung als erstes Enrollment-Kriterium die Marken-Property ein.

**Super-Admins sehen alles:** Das ist gewollt, aber ihr solltet die Zahl der Super-Admins im Account bewusst klein halten. Für operative HubSpot-Nutzer reicht eine niedrigere Berechtigungsstufe.

## Was ihr damit erreicht

Mit diesem Setup kann ein Berater von Marke A ausschließlich Kontakte und Deals sehen, bei denen er als Owner eingetragen ist und die die Property `Marke = A` tragen. Datensätze anderer Brands sind für ihn schlicht nicht auffindbar — weder in der Suche noch in Listen.

Das schützt nicht nur rechtlich, sondern hält auch die Arbeitsoberfläche sauber: Jeder Berater sieht nur das, was für ihn relevant ist.
