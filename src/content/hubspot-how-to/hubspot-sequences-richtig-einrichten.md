---
title: "HubSpot Sequences richtig einrichten: Mehr Antworten, weniger Aufwand"
description: "Wie du in HubSpot Sales-Sequences so aufbaust, dass Follow-ups automatisch laufen — und trotzdem persönlich wirken."
pubDate: 2026-03-23
author:
  name: "Frank Welsch-Lehmann"
  url: "https://www.linkedin.com/in/frankwelschlehmann/"
---

Wer im Vertrieb tätig ist, kennt das Problem: Du schreibst eine erste E-Mail, bekommst keine Antwort, und irgendwann geht der Lead im Tagesgeschäft unter. HubSpot Sequences lösen genau dieses Problem — wenn sie richtig aufgesetzt sind. Viele Nutzer aktivieren das Feature, verschicken ein paar E-Mails und wundern sich dann, warum die Öffnungsraten mager bleiben. Der Fehler liegt selten im Tool, sondern in der Logik dahinter.

## Was Sequences von Workflows unterscheidet — und warum das wichtig ist

Ein häufiger Irrtum: Sequences und Workflows werden gleichgesetzt. Der Unterschied ist aber entscheidend. **Sequences** laufen immer aus dem Postfach eines bestimmten Vertriebsmitarbeiters heraus — die Nachrichten kommen also von einer echten Person, nicht von einer Marketing-Adresse. **Workflows** hingegen sind systemgesteuert und senden aus einer allgemeinen Unternehmensadresse.

Das hat konkrete Konsequenzen:

- Sequences sind 1-zu-1-Kommunikation, Workflows sind 1-zu-viele.
- Sequences pausieren automatisch, wenn der Kontakt antwortet oder einen Termin bucht — Workflows tun das nicht per default.
- Sequences erfordern eine `Sales Hub Professional`-Lizenz oder höher; ohne diese Lizenz fehlt das Feature im Menü (Stand März 2026 — aktuelle Lizenzdetails bitte bei HubSpot prüfen).

Wenn du also feststellst, dass dein Kontakt auf deine automatisierte Nachricht antwortet und trotzdem weiter E-Mails bekommt, nutzt du wahrscheinlich einen Workflow statt einer Sequence.

## Die Sequenz aufbauen: Schritt für Schritt

Sequences findest du in HubSpot unter `Vertrieb` → `Sequences`. Dort kannst du entweder eine leere Sequenz erstellen oder eine Vorlage nutzen. Für eine solide Erst-Sequenz empfehlen sich **vier bis sechs Schritte** über einen Zeitraum von zwei bis drei Wochen:

**Schritt 1 — Tag 1:** Eine personalisierte E-Mail mit klarem Bezug zu einem konkreten Anlass (Websitebesuch, Inhalts-Download, Messebesuch). Kein generischer Einstieg.

**Schritt 2 — Tag 3:** Eine kurze Follow-up-E-Mail, die auf Schritt 1 referenziert. Maximal drei Sätze, klare Frage oder klares Angebot.

**Schritt 3 — Tag 7:** Eine LinkedIn-Aufgabe (manueller Schritt) — kein Automatismus, aber als Erinnerung in der Sequenz hinterlegt, dass du auf LinkedIn Kontakt aufnimmst.

**Schritt 4 — Tag 10:** Eine E-Mail mit einem konkreten Mehrwert — ein kurzer Artikel, eine relevante Zahl aus der Branche, ein Fallbeispiel.

**Schritt 5 — Tag 14:** Die letzte E-Mail. Ehrlich und direkt: „Ich melde mich nicht weiter, wenn das gerade nicht passt — aber falls sich was ändert, melde dich gern."

**Wichtig beim Aufbau:** Nutze HubSpot-Tokens (`{{contact.firstname}}`, `{{contact.company}}`) für Personalisierung, aber übertreibe es nicht. Zwei bis drei Tokens pro E-Mail reichen — mehr wirkt wie ein schlecht konfiguriertes CRM, nicht wie ein Mensch.

## Typische Fehler und wie du sie vermeidest

**Fehler 1: Sequences starten, ohne den Kontakt zu qualifizieren.**
Eine Sequence ist kein Massenversand. Sie ist für Kontakte gedacht, bei denen du bereits weißt, dass sie grundsätzlich relevant sind. Starte mit kleinen Batches (erfahrungsgemäß 20–50 Kontakte) in einer neuen Sequence — beobachte zuerst, wie die ersten reagieren, und optimiere dann, bevor du skalierst.

**Fehler 2: Keine Aufgaben-Schritte einbauen.**
Reine E-Mail-Sequenzen performen schlechter als solche mit manuellen Zwischenschritten (Anruf, LinkedIn, Notiz). HubSpot erlaubt es, diese Aufgaben direkt in die Sequence einzubauen — nutze das.

**Fehler 3: Alle Kontakte bekommen dieselbe Sequence.**
Ein Erstgespräch-Interessent braucht eine andere Ansprache als jemand, der vor sechs Monaten schon Angebot bekommen hat. Lege für unterschiedliche Situationen separate Sequences an und benenne sie klar (z. B. `Kaltakquise – IT-Dienstleister` oder `Re-Engage – kein Feedback nach Angebot`).

**Fehler 4: Kein A/B-Test der Betreffzeilen.**
HubSpot zeigt dir pro Sequence die Öffnungsrate, Klickrate und Antwortrate. Wenn die Öffnungsrate nach den ersten Sends spürbar unter dem liegt, was du von normalen E-Mails kennst, ist der Betreff das Problem — nicht die Nachricht selbst. Passe ihn an und teste erneut.

## Performance auswerten und optimieren

Nach jeder abgeschlossenen Sequence-Runde lohnt sich ein kurzer Blick in die Auswertung. Unter `Sequences` → `Sequence auswählen` → `Performance` siehst du die wichtigsten Metriken je Schritt. Achte besonders auf:

- **Öffnungsrate Schritt 1:** Als grobe Orientierung gilt: Liegt die Öffnungsrate unter 30–35 %, liegt das Problem meist beim Betreff oder beim Absendernamen — je nach Branche kann dieser Wert abweichen.
- **Antwortrate gesamt:** Bleibt die Antwortrate dauerhaft im niedrigen einstelligen Bereich, ist entweder die Zielgruppe falsch segmentiert oder der Inhalt zu generisch.
- **Abmeldequote:** Liegt die Opt-out-Rate spürbar über dem Normalniveau deiner anderen E-Mails, kommt die Sequence bei der Zielgruppe als Spam an — Frequenz oder Ton überdenken.

Sequences sind kein „set it and forget it"-Tool. Sie sind ein strukturierter Ausgangspunkt, den du nach jeder Runde ein bisschen schärfst. In der Praxis zeigt sich: Wer das konsequent tut, sieht nach wenigen Iterationen spürbare Verbesserungen bei der Antwortrate — ohne mehr Zeit in den Vertrieb zu investieren.
