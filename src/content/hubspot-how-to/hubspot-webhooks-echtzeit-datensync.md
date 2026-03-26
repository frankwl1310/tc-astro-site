---
title: "HubSpot Webhooks: Echtzeit-Datensync mit externen Systemen"
description: "Wie ihr mit HubSpot Webhooks Datenänderungen in Echtzeit an externe Systeme übergebt und einen robusten Datensync ohne CSV-Exporte aufsetzt."
pubDate: 2026-03-23
author:
  name: "Frank Welsch-Lehmann"
  url: "https://www.linkedin.com/in/frankwelschlehmann/"
---

# HubSpot Webhooks: Echtzeit-Datensync mit externen Systemen

**Kategorie:** HubSpot Operations · Integrationen · Webhooks
**Schwierigkeitsgrad:** Mittel bis Fortgeschritten
**Zeitaufwand:** ca. 1–2 Stunden

---

## Worum geht es?

Viele Unternehmen nutzen HubSpot als führendes CRM, haben aber nachgelagerte Systeme — Beratungssoftware, ERP, Abrechnungstools —, die ebenfalls aktuelle Kontakt- und Unternehmensdaten benötigen. Die häufigste Lösung: regelmäßige CSV-Exporte, manuelle Importe, ein wöchentlicher Abgleich. Das Ergebnis: veraltete Daten, frustrierte Nutzer, schlechte Akzeptanz.

HubSpot bietet eine saubere Alternative: **Webhooks**. Dabei sendet HubSpot automatisch eine Benachrichtigung an ein externes System, sobald sich ein Datensatz ändert — also neue Kontakte, Unternehmensänderungen, Statuswechsel. Das externe System empfängt die Daten in Echtzeit und kann sie sofort verarbeiten.

---

## Anwendungsfall

Ein typisches Szenario: HubSpot ist die Quelle der Wahrheit für alle Makler, Partner oder Kunden. Ein nachgelagertes System (z. B. Beratungs- oder Abwicklungssoftware) benötigt dieselben Stammdaten — aber immer auf dem aktuellen Stand.

**Bisheriger manueller Prozess:**
1. Kontaktdaten in HubSpot pflegen
2. Regelmäßig CSV-Export aus HubSpot erstellen
3. CSV manuell in das externe System importieren
4. Fehler und Abweichungen manuell nachpflegen

**Automatisierter Prozess mit HubSpot Webhooks:**
1. Kontaktdaten in HubSpot pflegen
2. HubSpot sendet bei jeder relevanten Änderung automatisch einen Push an das externe System
3. Das externe System verarbeitet die Daten in Echtzeit

---

## Voraussetzungen

- **HubSpot Operations Hub Professional oder Enterprise** (Webhooks als Workflow-Aktion setzen Operations Hub voraus — die genaue Verfügbarkeit je nach Lizenzstufe solltet ihr in der aktuellen HubSpot-Produktübersicht prüfen, da sich Lizenzinhalte ändern können)
- Ein externes System mit einem öffentlich erreichbaren Endpunkt (API-Endpoint), der HTTP POST-Anfragen verarbeiten kann
- Administratorzugang in HubSpot
- **DSGVO-Hinweis:** Bei der Übertragung personenbezogener Daten an externe Systeme gelten die Anforderungen der DSGVO — insbesondere wenn das Ziel-System außerhalb der EU betrieben wird. Prüft vorab, ob ein Auftragsverarbeitungsvertrag (AVV) mit dem Anbieter des Ziel-Systems erforderlich ist.

---

## Schritt 1: Anwendungsfall und Auslöser definieren

Bevor ihr den Webhook einrichtet, klärt intern:

- **Was soll übertragen werden?** Neue Kontakte, Kontaktänderungen, neue Unternehmens-Zuordnungen?
- **Wann soll der Push ausgelöst werden?** Bei jeder Änderung? Nur bei bestimmten Eigenschaftsänderungen?
- **Wie viele Datensätze sind täglich betroffen?** Das hilft einzuschätzen, ob das Ziel-System das Volumen verarbeiten kann.

Für die meisten Fälle ist eine **eigenschaftsbasierte Bedingung** sinnvoll: Der Webhook wird nur ausgelöst, wenn sich eine bestimmte Eigenschaft ändert (z. B. Zuordnung zu einem Unternehmen, Status, Region).

---

## Schritt 2: Workflow mit Webhook-Aktion einrichten

HubSpot-Webhooks werden über das Workflow-Modul konfiguriert:

1. Navigiert zu **Automatisierung → Workflows → Workflow erstellen**
2. Wählt den passenden Workflow-Typ: **Kontaktbasiert**, **Unternehmensbasiert** oder **Deal-basiert**
3. Definiert den **Auslöser**, z. B.:
   - Eigenschaft `Primäres Unternehmen` wird geändert
   - Eigenschaft `Kontakttyp` wird auf `Freier Makler` gesetzt
   - Eigenschaft `Zuordnung Region` wird aktualisiert
4. Fügt als Aktion **„Webhook senden"** hinzu (unter „Weitere Aktionen" oder „Integrationsaktionen")
5. Tragt die **Webhook-URL** des externen Systems ein
6. Wählt als Methode **POST**

---

## Schritt 3: Datenformat und Authentifizierung konfigurieren

HubSpot sendet beim Webhook-Aufruf standardmäßig die interne Objekt-ID des auslösenden Datensatzes (z. B. die Kontakt-ID). Das externe System kann damit direkt die HubSpot-API ansprechen, um alle weiteren Felder abzurufen.

Falls das externe System einen direkten Datenpayload erwartet, lassen sich über **HubSpot Custom Workflow Actions** (Operations Hub) auch eigene Payloads strukturieren.

**Authentifizierung:** Falls das Ziel-System eine Authentifizierung verlangt, könnt ihr einen **geheimen Header** in HubSpot hinterlegen (z. B. `Authorization: Bearer <Token>`). Dieser wird bei jedem Webhook-Aufruf mitgeschickt.

---

## Schritt 4: Webhook testen

Bevor ihr den Workflow aktiviert:

1. Nutzt ein Tool wie **Webhook.site** oder **RequestBin**, um die eingehenden Daten zu sehen
2. Tragt die Test-URL temporär als Webhook-Ziel ein
3. Löst den Workflow manuell mit einem Testdatensatz aus
4. Überprüft, ob die erwarteten Daten ankommen und das Format stimmt
5. Tauscht die Test-URL gegen die produktive Webhook-URL aus

---

## Schritt 5: Fehlerbehandlung und Monitoring einrichten

Webhooks können fehlschlagen — etwa wenn das Ziel-System nicht erreichbar ist. HubSpot protokolliert fehlgeschlagene Webhook-Aufrufe im Workflow-Protokoll. Empfohlene Maßnahmen:

- Richtet im Workflow eine **Fehlerbenachrichtigung** ein (z. B. interne E-Mail oder Task an Verantwortliche)
- Prüft regelmäßig das **Workflow-Protokoll** auf fehlgeschlagene Durchläufe
- Klärt mit dem externen System, ob es **Retry-Logik** unterstützt (d. h. ob Duplikate gehandhabt werden können)

---

## Was ihr damit erreicht

- **Aktuelle Daten in allen Systemen:** Kein manueller Export mehr — das externe System bekommt Änderungen in Echtzeit
- **Bessere Nutzerakzeptanz:** Wenn Berater und Nutzer im externen System immer aktuelle Daten sehen, steigt die Akzeptanz des Gesamtsystems
- **Reduzierter Pflegeaufwand:** Doppelpflege in zwei Systemen entfällt; HubSpot bleibt die einzige Quelle der Wahrheit
- **Skalierbarkeit:** Ein Webhook funktioniert genauso für 20 Änderungen pro Tag wie für 2.000

---

## Hinweis zur Systemarchitektur

Der Flaschenhals liegt meist nicht bei HubSpot, sondern beim Empfangssystem: Kann das externe System eingehende API-Anfragen in Echtzeit verarbeiten? Unterstützt es eine schreibende API? Wer die Antwort auf diese Fragen noch nicht hat, sollte das zuerst klären — bevor die HubSpot-Seite aufgebaut wird. Ohne einen empfangsbereiten Endpunkt auf der anderen Seite hilft auch der beste Webhook nicht weiter.

---

*Erstellt auf Basis eines Projektmeetings vom 24. März 2026.*
