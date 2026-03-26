# Zuordnungshistorie in HubSpot: Wann war ein Kontakt bei welchem Unternehmen?

**Kategorie:** HubSpot CRM · Datenarchitektur · Custom Objects
**Schwierigkeitsgrad:** Fortgeschritten
**Zeitaufwand:** ca. 2–4 Stunden

---

## Worum geht es?

HubSpot zeigt immer den aktuellen Zustand eines Datensatzes — aber nicht, wie er sich über die Zeit verändert hat. Für viele operative Fragen reicht das nicht aus: Wann wurde ein Kontakt diesem Unternehmen zugeordnet? Hat er vorher zu einem anderen Unternehmen gehört? Seit wann ist eine Zuordnung gültig?

Diese Informationen sind für sauberes Reporting und Inzentivierungsmodelle entscheidend. HubSpot bietet zwar seit Kurzem granularere Zuordnungs-Zeitstempel (noch in Beta, API-Zugriff eingeschränkt), aber eine praxistaugliche Lösung ist heute schon möglich: eine eigene **Zuordnungstabelle als Custom Object**, in der jede Zuordnungsänderung mit Start- und Enddatum protokolliert wird.

---

## Anwendungsfall

Ein typisches Szenario: Ein Unternehmen ordnet Kontakte (z. B. Makler, Partner, Kunden) bestimmten Unternehmen (z. B. Filialen, Regionen, Betreuungsgruppen) zu. Zuordnungen ändern sich — Kontakte wechseln die Zuständigkeit, werden neu zugeordnet, oder Datensätze werden bereinigt. Für Reporting und Vergütungsmodelle muss nachvollziehbar sein, welche Zuordnung wann aktiv war.

**Ohne Zuordnungshistorie:**
- Nur der aktuelle Zustand ist einsehbar
- Historische Reportings zeigen immer die aktuelle Zuordnung — auch rückwirkend falsch
- Unstimmigkeiten bei Provisionsabrechnungen sind kaum nachvollziehbar

**Mit Zuordnungshistorie als Custom Object:**
- Jede Zuordnung hat ein Startdatum und (nach einem Wechsel) ein Enddatum
- Historische Abfragen zeigen die Zuordnung zum jeweiligen Zeitpunkt
- Manuelle Korrekturen für Sonderf älle sind möglich

---

## Voraussetzungen

- **HubSpot Operations Hub Enterprise** (Custom Objects sind in HubSpot eine Enterprise-Funktion — prüft die aktuelle Lizenzverfügbarkeit in der HubSpot-Produktübersicht, da sich Lizenzinhalte ändern können)
- Administratorzugang im HubSpot-Portal
- Kenntnisse über den HubSpot Workflow-Editor

---

## Schritt 1: Custom Object „Zuordnungshistorie" anlegen

1. Navigiert in HubSpot zu **Einstellungen → Objekte → Custom Objects**
2. Klickt auf **Custom Object erstellen**
3. Benennt das Objekt, z. B. `Zuordnungshistorie`
4. Legt folgende **Pflichtfelder** an:
   - `Kontakt-ID` (Typ: Zahl oder Text)
   - `Unternehmen-ID` (Typ: Zahl oder Text)
   - `Startdatum` (Typ: Datum)
   - `Enddatum` (Typ: Datum — bleibt leer, solange die Zuordnung aktiv ist)
5. Optionale Zusatzfelder: `Zuordnungstyp`, `Notiz`, `Geändert von`
6. Verknüpft das Custom Object mit dem Objekt **Kontakt** über eine HubSpot-Association

---

## Schritt 2: Workflow zur automatischen Befüllung einrichten

Jedes Mal, wenn sich die primäre Unternehmens-Zuordnung eines Kontakts ändert, soll automatisch ein neuer Eintrag in der Zuordnungstabelle erstellt werden.

1. Navigiert zu **Automatisierung → Workflows → Workflow erstellen**
2. Wählt **Kontaktbasiert** als Workflow-Typ
3. Definiert den **Auslöser:**
   - Eigenschaft `Primäres Unternehmen` wird geändert (bzw. die relevante Zuordnungseigenschaft)
4. Fügt eine Aktion hinzu: **Custom Object-Datensatz erstellen**
5. Befüllt die Felder:
   - `Kontakt-ID` → HubSpot-Token: Kontakt-ID des auslösenden Kontakts
   - `Unternehmen-ID` → HubSpot-Token: neue Unternehmens-ID
   - `Startdatum` → HubSpot-Token: aktuelles Datum (Workflow-Ausführungsdatum)
6. Fügt optional eine zweite Aktion hinzu, die den **vorherigen Eintrag** mit einem Enddatum versieht (erfordert eine Suche nach dem letzten offenen Eintrag — umsetzbar über Operations Hub Scripting)

**Hinweis:** Die vollautomatische Pflege des Enddatums setzt voraus, dass HubSpot Änderungen an der Zuordnungseigenschaft als Trigger erkennt. Prüft vorab, ob dies in eurer HubSpot-Version zuverlässig funktioniert — die Unterstützung für Association-basierte Trigger ist noch nicht in allen Konfigurationen vollständig.

---

## Schritt 3: Verknüpfung zum Kontakt herstellen

Damit die Zuordnungshistorie direkt am Kontaktdatensatz einsehbar ist:

1. Öffnet die Einstellungen für den Kontakt-Datensatz-Layout
2. Fügt einen **Associated Records**-Block für das Custom Object `Zuordnungshistorie` hinzu
3. Wählt aus, welche Felder in der Vorschau angezeigt werden sollen (empfohlen: Unternehmen-ID, Startdatum, Enddatum)

So sehen Nutzer direkt im Kontaktdatensatz, welche Zuordnungen in der Vergangenheit aktiv waren.

---

## Schritt 4: Manuelle Korrekturen ermöglichen

Für Edge Cases — z. B. wenn ein Datensatz gelöscht und neu angelegt wurde und damit der Zuordnungszeitstempel zurückgesetzt wurde — muss eine manuelle Überschreibung möglich sein:

- Das Feld `Startdatum` im Custom Object sollte **editierbar** bleiben (kein schreibgeschütztes Systemfeld)
- Admins können den Eintrag direkt im Custom Object-Datensatz korrigieren
- Empfehlung: Ein Zusatzfeld `Manuell angepasst` (Checkbox) dokumentiert solche Eingriffe für spätere Auswertungen

---

## Schritt 5: Historischen Schnitt für Bestandsdaten definieren

Die Zuordnungshistorie kann nur ab dem Zeitpunkt lückenlos aufgebaut werden, ab dem der Workflow aktiv ist. Für Bestandsdaten empfiehlt sich ein pragmatischer Ansatz:

- Legt einen **Stichtag** fest (z. B. den Go-live-Termin des neuen Prozesses)
- Alle Kontakte erhalten ab diesem Datum ein Startdatum mit der aktuell gesetzten Zuordnung
- Ältere Zuordnungen aus Vorsystemen (z. B. Data Warehouse oder Kundendatenbank) werden auf Unternehmensebene gemappt und nicht rückwirkend in HubSpot nachgepflegt
- Dokumentiert den Stichtag intern, damit spätere Reportings die Einschränkung kennen

---

## Was ihr damit erreicht

- **Sauberes historisches Reporting:** Zuordnungen werden mit Start- und Enddatum dokumentiert — Reportings können auf jeden Zeitpunkt zurückblicken
- **Nachvollziehbare Inzentivierung:** Provisionsmodelle, die an Zuordnungen hängen, lassen sich korrekt berechnen — auch rückwirkend
- **Transparenz für alle Nutzer:** Wer war wann welchem Unternehmen zugeordnet? Die Antwort ist direkt im CRM einsehbar, ohne Data Warehouse oder externes Reporting
- **Robustheit bei Datenpflege:** Selbst wenn Datensätze neu angelegt werden, bleibt die inhaltliche Geschichte erhalten — sofern die Einträge manuell nachgepflegt werden

---

## Hinweis zu HubSpot-nativen Möglichkeiten

HubSpot arbeitet an einer nativen Lösung für granulare Zuordnungs-Zeitstempel (Association Timestamps). Stand März 2026 befindet sich diese Funktion in der Beta-Phase und ist über die API noch nicht vollständig auslesbar. Sobald sie allgemein verfügbar ist, könnte der Custom Object-Workaround durch eine native Lösung ersetzt werden. Es lohnt sich, die HubSpot Product Updates im Blick zu behalten.

## Hinweis zu API-Limits und Volumen

Bei hohem Kontaktvolumen und häufigen Zuordnungsänderungen kann das automatische Erstellen von Custom Object-Datensätzen über Workflows HubSpots API-Rate-Limits belasten. Schätzt vorab ab, wie viele Änderungen täglich zu erwarten sind, und prüft, ob euer Tarif ausreichende API-Kapazitäten bietet.

---

*Erstellt auf Basis eines Projektmeetings vom 24. März 2026.*
