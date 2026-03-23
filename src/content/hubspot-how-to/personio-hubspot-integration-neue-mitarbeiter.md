---
title: "Personio und HubSpot verbinden: Neue Mitarbeiter automatisch als Kontakte anlegen"
description: "Wie ihr über eine Personio-HubSpot-Integration neue Mitarbeitende automatisch als interne Kontakte erfasst und Onboarding-Schritte zentral im CRM steuert."
pubDate: 2026-03-21
author:
  name: "Frank Welsch-Lehmann"
  url: "https://www.linkedin.com/in/frankwelschlehmann/"
---

Wenn neue Mitarbeitende eingestellt werden, passiert in den meisten Unternehmen folgendes: HR pflegt Personio, der CRM-Admin wird irgendwann informiert, und HubSpot wird manuell aktualisiert — oder gar nicht. Das führt zu veralteten Vertriebszuständigkeiten, fehlenden internen Kontakten und Onboarding-Schritten, die nirgendwo dokumentiert sind. Eine einfache Integration zwischen Personio und HubSpot löst das.

## Warum interne Mitarbeiter in HubSpot als Kontakte gehören

In Unternehmen, in denen Berater oder Vertriebsmitarbeitende direkt mit Kunden-Datensätzen in HubSpot verbunden sind — zum Beispiel als Owner von Kontakten und Deals — muss HubSpot immer den aktuellen Stand der internen Belegschaft kennen. Tritt ein Berater in ein Unternehmen ein, muss ein Owner-Profil existieren. Verlässt er das Unternehmen, müssen seine Datensätze reassigniert werden.

Ohne Automatisierung passiert beides zu spät, zu selten oder fehlerhaft.

## Die technische Grundlage: Personio-Webhook oder API

Personio bietet zwei Wege, Daten an externe Systeme zu übertragen:

**Option 1 — Native Integration:** HubSpot hat eine offizielle Personio-Integration im App Marketplace. Sie synchronisiert Mitarbeiterdaten in einem vordefinierten Rhythmus und eignet sich für einfache Anwendungsfälle.

**Option 2 — Webhook via n8n oder Zapier:** Für mehr Flexibilität — zum Beispiel wenn ihr die Synchronisation an bestimmte Bedingungen knüpfen oder Daten transformieren wollt — empfiehlt sich ein Middleware-Ansatz. Personio feuert bei neuen Mitarbeitern einen Webhook; ein n8n-Workflow empfängt diesen und legt in HubSpot einen neuen Kontakt mit den relevanten Properties an.

Der Middleware-Ansatz hat den Vorteil, dass ihr die Logik komplett selbst kontrolliert: Welche Felder werden übertragen? Welches Team wird zugewiesen? Welche interne Markierung bekommt der Kontakt?

## Was ihr bei der Konfiguration beachten solltet

**Interne Kontakte markieren:** Legt eine Property `Kontakttyp` mit dem Wert `Intern / Mitarbeiter` an. Damit könnt ihr interne Kontakte in allen Listen und Reports sauber von Kunden trennen. Ohne diese Markierung landen neue Mitarbeitende in euren Marketing-Segmenten.

**Owner-Zuweisung automatisieren:** Wenn ein neuer HubSpot-Nutzer angelegt wird (also ein Mitarbeiter, der auch HubSpot-Zugang bekommt), kann ein Workflow dafür sorgen, dass er automatisch als Owner seiner eigenen Kontakte eingetragen wird.

**Onboarding-Aufgaben triggern:** Der eigentliche Mehrwert liegt in der Prozessautomatisierung: Sobald ein neuer Mitarbeiter in HubSpot als Kontakt angelegt wird, kann ein Workflow automatisch eine Checkliste von Onboarding-Aufgaben erstellen — HubSpot-Schulung einplanen, Zugriffsberechtigungen prüfen, erstes Team-Meeting anlegen.

## Was bei Austritt passieren muss

Die Offboarding-Seite ist mindestens genauso wichtig. Wenn ein Mitarbeiter Personio verlässt, sollte Personio — sofern Webhooks für den Austritts-Event entsprechend konfiguriert sind — einen weiteren Webhook feuern, der in HubSpot folgende Aktionen auslöst: HubSpot-Nutzer deaktivieren, alle Kontakte und Deals des ausscheidenden Mitarbeiters einem definierten Nachfolger zuweisen, eine interne Aufgabe für den Teamleiter erstellen.

Ohne diesen Offboarding-Schritt akkumulieren sich über Monate verwaiste Datensätze mit einem inaktiven Owner — und niemand bearbeitet diese Leads mehr.

## Typische Fehler bei der Erstimplementierung

**Doppelte Kontakte:** Wenn Mitarbeitende bereits als Kunden-Kontakte in HubSpot existieren (zum Beispiel aus früherer Geschäftsbeziehung), entsteht ein Duplikat. Prüft vor dem Anlegen, ob die E-Mail-Adresse bereits vorhanden ist.

**Fehlende Marken-Zuweisung:** In Multi-Brand-Accounts muss auch ein neuer interner Kontakt sofort der richtigen Marke zugewiesen werden — sonst taucht er in falschen Listen und Segmenten auf.

## Was ihr damit erreicht

Eine sauber konfigurierte Personio-HubSpot-Integration spart eurem HR- und CRM-Team mehrere Stunden pro Monat und verhindert, dass Vertriebsdaten durch Personalwechsel veralten. Das ist besonders relevant in Unternehmen mit hoher Mitarbeiterfluktuation oder einem aktiven Wachstum im Vertriebsteam.
