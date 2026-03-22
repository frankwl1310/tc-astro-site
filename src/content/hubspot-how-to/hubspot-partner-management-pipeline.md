---
title: "Partner-Management in HubSpot: Von der Lead-Qualifizierung bis zum Abschluss"
description: "Wie ihr eine Partner-Pipeline aufbaut, BB-Leads und Vereinbarungen in getrennten Phasen qualifiziert und Partner-Status automatisch auf Basis von CRM-Aktivitäten aktualisiert."
pubDate: 2026-03-21
author:
  name: "Frank Welsch-Lehmann"
  url: "https://www.linkedin.com/in/frankwelschlehmann/"
---

Partner-Management ist ein anderer Prozess als klassischer B2B-Vertrieb — und verdient eine eigene Struktur in HubSpot. Partner sind keine Kunden, aber auch keine internen Teammitglieder. Sie brauchen eigene Pipelines, eigene Qualifizierungsphasen und eine Status-Logik, die sich auf Basis von Aktivitäten möglichst automatisiert aktualisiert.

## Warum eine separate Partner-Pipeline sinnvoll ist

Ein häufiger Fehler beim Partner-Management in HubSpot ist, Partner-Leads in dieselbe Pipeline wie Kunden-Leads zu stecken. Das vermischt Metriken, verzerrt Conversion-Raten und macht es schwer, die Performance des Partner-Kanals separat auszuwerten.

Legt eine eigene Pipeline für Partner an — mit einem klaren Namensschema, das Partner-Deals von Kunden-Deals unterscheidet. Technisch ist das in der Basis schnell umgesetzt; der Nutzen ist langfristig sauberes Reporting.

## Die zweistufige Qualifizierungslogik

Partner-Prozesse folgen oft einer zweistufigen Logik: Erst wird der Partner selbst qualifiziert (ist diese Organisation ein geeigneter Partner?), dann werden konkrete Kooperationsvereinbarungen ausgehandelt und abgeschlossen.

Diese zwei Stufen sollten sich in der Pipeline-Struktur widerspiegeln:

**Stufe 1 — Lead-Phase (Partnerqualifizierung):** Der potenzielle Partner ist identifiziert, aber noch nicht bewertet. Typische Phasen: `Erstgespräch`, `Qualifizierung läuft`, `Qualifiziert / Kooperationsbereit`. Hier wird geprüft: Passt das Profil? Gibt es gemeinsame Zielkunden? Sind die kommerziellen Rahmenbedingungen realistisch?

**Stufe 2 — Vereinbarungsphase:** Konkrete Kooperationsvereinbarungen (BB-Vereinbarungen) werden ausgehandelt und geschlossen. Phasen hier: `Vereinbarung in Vorbereitung`, `Verhandlung`, `Aktiver Partner`. Abschluss-Status: `Vereinbarung geschlossen` oder `Nicht zustande gekommen`.

Diese Trennung macht es möglich, sowohl die Qualifizierungsquote (wie viele Interessenten werden zu geeigneten Partnern?) als auch die Abschlussquote (wie viele qualifizierte Partner schließen eine Vereinbarung ab?) separat auszuwerten.

## Partner-Status automatisch aktualisieren

Ein zentrales Property im Partner-Management ist der `Partner-Status` — eine Ampel, die den aktuellen Bearbeitungsstand anzeigt. Eine bewährte Logik ist zum Beispiel: `Frei` (kein aktiver Lead oder keine aktive Vereinbarung), `In Bearbeitung` (mindestens ein Lead oder eine Vereinbarung ist aktiv), `Abgeschlossen / Exit` (Zusammenarbeit beendet).

Der praktische Vorteil: Dieser Status muss nicht dauerhaft manuell gepflegt werden. Ein Workflow kann ihn auf Basis klarer Kriterien setzen:

- Sobald ein Lead in der Partner-Pipeline angelegt wird → Status auf `In Bearbeitung`
- Sobald eine Vereinbarung auf `Aktiver Partner` wechselt → Status auf `Aktiver Partner`
- Sobald alle relevanten Deals geschlossen oder verloren sind → Status zurück auf `Frei`

Das reduziert administrative Pflegeaufgaben und hält den Status in den meisten Fällen aktuell — auch wenn im Alltag nicht jede Person daran denkt, ihn manuell zu aktualisieren.

Hinweis: Wenn ihr mehrere parallele Vereinbarungen pro Partner habt, definiert vorher, welche Logik bei Konflikten gilt (zum Beispiel „mindestens ein aktiver Deal = aktiv“).

## Datensynchronisation: API statt CSV

Wenn Partner-Stammdaten aus einem anderen System kommen — einem ERP, einer Partnerdatenbank oder einem HR-System — ist CSV am Anfang oft okay. Ab einer gewissen Änderungsfrequenz oder Komplexität wird CSV aber schnell fehleranfällig: Daten sind verzögert, Imports sind manuell, und Formatfehler führen zu unsauberen Datensätzen.

Eine API-basierte Synchronisation via Middleware (n8n, Make, Zapier) kann das stabiler lösen: Änderungen im Quellsystem werden in kurzen Intervallen oder nahezu in Echtzeit an HubSpot übertragen. Für den initialen Aufbau braucht ihr die Felder, die synchronisiert werden sollen, und klare Regeln, welches System bei Konflikten führend ist.

## Berechtigungen im Partner-Kontext

Partner-Manager, die im CRM arbeiten, sollten in der Regel nur die Datensätze sehen, die ihren eigenen Partner-Accounts zugeordnet sind — nicht die gesamte Partnerliste. Das gilt besonders, wenn Partner-Accounts aus verschiedenen Regionen, Marken oder Produktlinien stammen.

Konfiguriert die Berechtigungsstufe entsprechend eurer Organisationsstruktur: Regionale Partner-Manager sehen ihre Region, überregionale Koordinatorinnen und Koordinatoren sehen alles. Die Grundlage dafür ist ein konsequent gepflegtes Owner-Feld — genauso wie im Kunden-CRM.

## Was ihr damit erreicht

Ein strukturiertes Partner-Management in HubSpot macht den Partnerkanal messbar und steuerbar. Ihr seht jederzeit: Wie viele aktive Partner habt ihr? Welche befinden sich gerade in der Qualifizierungsphase? Wie viele Vereinbarungen wurden in einem Quartal abgeschlossen? Und wo stagnieren Partner-Deals, ohne dass jemand aktiv wird?

Das ist die Grundlage, um den Partnerkanal systematisch zu entwickeln — statt ihn rein intuitiv zu managen.
