---
title: "E-Mail-Deliverability prüfen, bevor ihr HubSpot-Sequences startet"
description: "Wie ihr vor dem Start einer Sequence sicherstellt, dass eure E-Mails ankommen — inklusive Mail-Tester-Check, One-to-One-Subscription und Sender-Score-Grundlagen."
pubDate: 2026-03-21
author:
  name: "Frank Welsch-Lehmann"
  url: "https://www.linkedin.com/in/frankwelschlehmann/"
---

Eine Sequence kann noch so gut geschrieben sein — wenn die E-Mails im Spam landen oder gar nicht erst verschickt werden, war die Arbeit umsonst. Deliverability-Probleme fallen oft erst auf, wenn die Öffnungsraten verdächtig niedrig sind. Mit ein paar gezielten Checks vor dem Start könnt ihr das verhindern.

## Warum Deliverability in HubSpot ein eigenes Thema ist

HubSpot-Sequences sind 1-zu-1-E-Mails, die über den persönlichen Posteingang des Senders laufen — nicht über ein Marketing-Tool. Das ist ihr größter Vorteil gegenüber Massen-E-Mails. Aber der Vorteil funktioniert nur, wenn die technische Grundlage stimmt: Domain-Authentifizierung, saubere Kontaktdaten und die richtige Subscription-Einstellung.

## Schritt 1: Domain-Authentifizierung prüfen

Bevor ihr die erste Sequence startet, vergewissert euch, dass eure Sending-Domain korrekt konfiguriert ist. In den HubSpot-Einstellungen unter Marketing → E-Mail → Einstellungen findet ihr den Bereich "Verbundene E-Mail-Sending-Domains". Dort seht ihr, ob SPF, DKIM und idealerweise DMARC korrekt hinterlegt sind.

Ohne diese Einträge landen eure E-Mails deutlich häufiger im Spam — vor allem bei größeren Mail-Providern wie Google Workspace und Microsoft 365.

## Schritt 2: Mail-Tester-Check durchführen

Der schnellste Weg, den Ist-Zustand zu sehen, ist ein Test über mail-tester.com. Das Tool gibt euch eine temporäre E-Mail-Adresse — sendet eine Test-E-Mail dorthin und erhaltet danach einen Score von 1–10 mit detaillierten Hinweisen auf technische Probleme.

Angestrebt wird ein Score von mindestens 8. Alles darunter deutet auf behebbare Probleme hin — fehlende DKIM-Einträge, zu viele Links, Spam-Trigger-Wörter im Betreff.

## Schritt 3: One-to-One-Subscription-Status überprüfen

Das ist der am häufigsten übersehene Punkt: In HubSpot können Contacts nur dann E-Mails über Sequences erhalten, wenn sie die Subscription-Einstellung `One-to-One` aktiviert haben — oder wenn ihr in den Sequence-Einstellungen auf "Alle Kontakte kontaktieren" konfiguriert habt.

Prüft in eurer Kontaktliste, welcher Anteil der Leads diese Subscription hat. In der Praxis fehlt sie bei vielen Kontakten, die per CSV-Import in HubSpot gekommen sind — weil beim Import die Subscription nicht mitgeführt wurde. Das Ergebnis: Die Sequence startet formal, aber ein Großteil der E-Mails wird nie verschickt.

Um das zu beheben, könnt ihr per Workflow die `One-to-One`-Subscription für Kontakte setzen, bei denen ein berechtigtes Interesse besteht — zum Beispiel für alle Leads aus einer Vertriebsliste. Klärt das vorher mit eurem Datenschutzbeauftragten.

## Schritt 4: Kontaktdaten-Qualität vor dem Einschreiben prüfen

Löscht aus eurer Sequence-Empfängerliste alle Kontakte ohne E-Mail-Adresse, mit offensichtlich falschen Adressen (Tippfehler-Domains wie "gmial.com") und mit Hard-Bounce-History in HubSpot. HubSpot zeigt diese Information im Kontaktdatensatz unter "E-Mail-Status".

Ein hoher Bounce-Anteil schadet eurem Sender-Reputation dauerhaft — und zwar für alle E-Mails, die ihr künftig aus eurem Account verschickt.

## Was ihr damit erreicht

Mit diesen vier Checks erhöht ihr nicht nur die Zustellrate der aktuellen Sequence. Ihr legt die Grundlage für alle zukünftigen E-Mail-Aktivitäten aus eurem HubSpot-Account. Gute Deliverability ist kein einmaliger Zustand, sondern das Ergebnis konsequenter technischer Sorgfalt.
