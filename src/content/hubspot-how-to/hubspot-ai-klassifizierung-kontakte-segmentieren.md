---
title: "Kontakte automatisch segmentieren mit HubSpot Breeze AI"
description: "Wie ihr mit HubSpot Intelligent Properties einen zweistufigen KI-Prozess aufbaut, der Kontakte automatisch in Branchen-Cluster einteilt — inklusive Credit-Budget-Planung."
pubDate: 2026-03-21
author:
  name: "Frank Welsch-Lehmann"
  url: "https://www.linkedin.com/in/frankwelschlehmann/"
---

Wenn euer CRM mehrere zehntausend Kontakte enthält und ihr nicht mehr wisst, welche Branche welcher Kontakt eigentlich kommt — dann ist manuelle Segmentierung keine Option mehr. HubSpot Breeze AI bietet mit den Intelligent Properties einen Weg, diese Arbeit zu automatisieren. Aber der Weg dorthin will gut geplant sein.

## Was Intelligent Properties leisten

Intelligent Properties sind KI-gestützte benutzerdefinierte Felder, die HubSpot auf Basis vorhandener Daten automatisch befüllt. Ihr gebt dem Modell eine Aufgabe in natürlicher Sprache — zum Beispiel "Bestimme die Hauptbranche dieses Unternehmens anhand von Website-URL, Firmenname und Beschreibung" — und HubSpot befüllt das Feld für jeden Kontakt oder jedes Unternehmen.

Das kostet HubSpot AI Credits. Jede Klassifizierung verbraucht eine bestimmte Menge Credits, abhängig von der Komplexität der Aufgabe.

## Der zweistufige Klassifizierungsprozess

Ein bewährter Ansatz für die Kundensegmentierung ist ein zweistufiges Vorgehen:

**Stufe 1 — Unternehmensart bestimmen:** Die erste Intelligent Property analysiert, was das Unternehmen des Kontakts tut. Eingabe: Website-URL, Firmenname, ggf. Beschreibungsfelder. Ausgabe: eine kurze Kategorisierung des Unternehmenszwecks.

**Stufe 2 — Cluster zuweisen:** Die zweite Property liest das Ergebnis aus Stufe 1 und ordnet es einem eurer vordefinierten Cluster zu. Typische Cluster für B2B-Vertrieb: Reinigung, Sicherheit, Photovoltaik, Automotive, Caravan, Marine, Industrie. Die Cluster definiert ihr vorab — HubSpot wählt nur den besten Treffer aus eurer Liste.

Diese Trennung macht das System zuverlässiger: Statt eine komplexe Einstufungsaufgabe in einem Schritt zu lösen, unterteilt ihr sie in zwei einfachere Fragen.

## Credit-Budget planen

Bevor ihr die Klassifizierung für euren gesamten Kontaktbestand startet, kalkuliert euren Credit-Bedarf. Als grober Richtwert gilt: eine Klassifizierung kostet zwischen 1 und 3 Credits, je nach Datenlage und Prompt-Komplexität — der genaue Verbrauch variiert je nach HubSpot-Paket und Konfiguration.

HubSpot gibt euch in den Einstellungen unter KI-Features → Credits die aktuelle Monatszuteilung und den Verbrauch an. Setzt euer monatliches Limit bewusst — wenn das Credit-Budget erschöpft ist, pausiert HubSpot die KI-Features bis zur nächsten Abrechnungsperiode. Klärt vorab mit eurem HubSpot-Account-Manager, wie das Verhalten bei eurem spezifischen Vertrag geregelt ist.

Empfehlung: Testet zuerst mit 100 Kontakten. Prüft die Ergebnisqualität, bevor ihr den kompletten Bestand verarbeitet. Das spart Credits bei schlechten Prompts und gibt euch die Möglichkeit, die Aufgabenstellung zu verfeinern.

## Duplikate vermeiden, bevor ihr klassifiziert

Ein häufiges Problem: Wenn euer CRM viele Duplikate enthält, werden diese Datensätze doppelt klassifiziert — und verbrauchen doppelt Credits. Bereinigt euren Kontaktbestand zuerst mit dem HubSpot Duplikate-Tool (zu finden in Kontakte → Aktionen → Duplikate verwalten), bevor ihr die KI-Klassifizierung startet.

## Kontakte, die nicht klassifiziert werden können

Nicht jeder Kontakt lässt sich sauber einordnen — fehlende Website-URLs, leere Firmennamen oder zu allgemeine Beschreibungen führen dazu, dass die KI keinen Cluster zuweist. Behandelt diese Gruppe separat: entweder mit einem manuellen Review-Workflow oder mit einer `Nicht klassifizierbar`-Option in eurem Cluster-Feld, die als Filter für eine gezielte Datenanreicherungskampagne dient.

## Was ihr damit erreicht

Nach der Klassifizierung könnt ihr eurem Vertrieb gezielte Segmentlisten liefern: alle Kontakte aus dem Cluster "Photovoltaik" in Norddeutschland ohne Aktivität in den letzten 6 Monaten. Das ist Vertriebsarbeit, die ohne CRM-Struktur schlicht nicht möglich wäre.
