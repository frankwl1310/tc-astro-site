# HubSpot + DocuSign: Vertragsversand automatisieren

**Kategorie:** HubSpot CRM · Integrationen · Workflow-Automatisierung
**Schwierigkeitsgrad:** Mittel bis Fortgeschritten
**Zeitaufwand:** ca. 2–4 Stunden (je nach Komplexität der Vertragsvorlage)

---

## Worum geht es?

Verträge manuell in Word ausfüllen, als PDF exportieren und einzeln über DocuSign versenden — das ist in vielen Unternehmen noch Standard. Mit der HubSpot-DocuSign-Integration lässt sich dieser Prozess vollständig automatisieren: Sobald ein Geschäftspartner oder Kontakt in HubSpot angelegt wird, füllt HubSpot automatisch die Vertragsfelder aus und versendet das Dokument über DocuSign an alle relevanten Empfänger.

---

## Anwendungsfall

Der typische Einsatzfall: Onboarding neuer Geschäftspartner oder Vertriebsmitarbeitender.

**Bisheriger manueller Prozess:**
1. Stammdaten aus einem anderen System übernehmen
2. Vertrag in Word öffnen und manuell befüllen
3. Als PDF exportieren
4. Über DocuSign manuell an Empfänger versenden

**Automatisierter Prozess mit HubSpot + DocuSign:**
1. Datensatz in HubSpot anlegen (oder aktualisieren)
2. HubSpot füllt die DocuSign-Vorlage automatisch mit den Stammdaten aus
3. DocuSign versendet den Vertrag automatisch an alle definierten Empfänger

---

## Voraussetzungen

- HubSpot Sales Hub (Professional oder Enterprise empfohlen, da Workflows benötigt werden)
- Ein aktiver DocuSign-Account
- Die HubSpot-DocuSign-Integration im HubSpot App Marketplace installiert
- Administratorzugang in HubSpot und DocuSign

---

## Schritt 1: DocuSign-Vorlage vorbereiten

Bevor ihr HubSpot konfiguriert, müsst ihr in DocuSign eine Vorlage anlegen:

1. Loggt euch in euren DocuSign-Account ein
2. Navigiert zu **Vorlagen → Neue Vorlage erstellen**
3. Ladet euer Vertragsdokument hoch (z. B. als PDF oder Word-Datei)
4. Markiert alle Felder, die automatisch befüllt werden sollen (Name, Adresse, Datum usw.) als **DocuSign-Felder mit Datenbindung** (Data Labels)
5. Legt die Empfängerrollen fest (z. B. „Neuer Partner", „Interner Empfänger 1", „Interner Empfänger 2")
6. Speichert die Vorlage

**Hinweis:** Ihr braucht kein finalisiertes Rechtsdokument, um mit der Einrichtung zu starten. Ein Platzhalterdokument (Dummy) reicht aus, um die Vorlage und den Workflow zu testen. Das endgültige Dokument kann nachträglich ausgetauscht werden.

---

## Schritt 2: HubSpot-DocuSign-Integration installieren

1. Öffnet in HubSpot den **App Marketplace** (oben rechts über das Raster-Symbol)
2. Sucht nach „DocuSign"
3. Klickt auf **Installieren** und folgt dem Authentifizierungsflow
4. Verknüpft euren DocuSign-Account mit dem HubSpot-Portal
5. Überprüft, ob die Verknüpfung in **Einstellungen → Integrationen** als aktiv angezeigt wird

---

## Schritt 3: Feldzuordnung konfigurieren (Field Mapping)

Nach der Installation legt ihr fest, welche HubSpot-Eigenschaften in welche DocuSign-Felder übertragen werden:

1. Öffnet die DocuSign-Integration in den HubSpot-Einstellungen
2. Wählt eure Vorlage aus
3. Ordnet die HubSpot-Felder den DocuSign-Daten-Labels zu, z. B.:
   - HubSpot: `Nachname` → DocuSign: `last_name`
   - HubSpot: `Vorname` → DocuSign: `first_name`
   - HubSpot: `Straße` → DocuSign: `address_street`
   - HubSpot: `Provisionsmodell` → DocuSign: `commission_type`
4. Legt die Empfänger-E-Mail-Adressen fest (können fix oder dynamisch aus HubSpot-Feldern kommen)

---

## Schritt 4: Workflow in HubSpot einrichten

Der Auslöser für den automatischen Vertragsversand wird über einen HubSpot-Workflow gesteuert:

1. Navigiert zu **Automatisierung → Workflows → Workflow erstellen**
2. Wählt **Kontaktbasiert** oder **Deal-basiert** als Workflow-Typ
3. Definiert den Auslöser, z. B.:
   - Eigenschaft `Typ` wird auf `Neuer SAM-Partner` gesetzt
   - Oder: Deal-Phase wechselt auf `Onboarding gestartet`
4. Fügt die Aktion **DocuSign-Umschlag senden** hinzu
5. Wählt eure Vorlage aus
6. Überprüft die Empfänger und den Versandzeitpunkt
7. Aktiviert den Workflow im Testmodus und führt einen Testlauf durch

---

## Schritt 5: Prozess testen und aktivieren

Bevor ihr den Workflow live schaltet:

- Testet den Versand mit einem internen Testdatensatz
- Überprüft, ob alle Felder korrekt befüllt sind
- Kontrolliert, ob alle Empfänger die E-Mail erhalten haben
- Prüft, ob der DocuSign-Status (gesendet, unterzeichnet, abgelaufen) korrekt in HubSpot zurückgespielt wird

Erst wenn der Testlauf erfolgreich war, schaltet ihr den Workflow auf **Aktiv**.

---

## Empfehlung: Alten Prozess parallel laufen lassen

Falls das endgültige Vertragsdokument noch nicht vorliegt (z. B. weil es sich noch in rechtlicher Prüfung befindet), empfiehlt es sich, den alten manuellen Prozess zunächst weiterzuführen und den neuen Workflow erst zu aktivieren, wenn das finale Dokument in DocuSign hinterlegt ist. So vermeidet ihr, dass Verträge mit einem Platzhalterdokument produktiv versendet werden.

---

## Was ihr damit erreicht

- **Zeitersparnis:** Kein manuelles Befüllen, kein manueller PDF-Export, kein manueller Versand
- **Fehlerreduktion:** Stammdaten werden direkt aus HubSpot übernommen — Tippfehler beim Übertragen entfallen
- **Nachverfolgbarkeit:** HubSpot zeigt, wann ein Vertrag gesendet, geöffnet und unterzeichnet wurde — direkt am Datensatz
- **Skalierbarkeit:** Der Prozess funktioniert genauso für 5 Verträge pro Jahr wie für 500

---

## Hinweis zur Lizenz

Die DocuSign-Integration selbst ist kostenlos im HubSpot App Marketplace verfügbar. Für den automatisierten Versand über Workflows ist jedoch mindestens **HubSpot Sales Hub Professional** erforderlich, da erst ab dieser Lizenz benutzerdefinierte Workflows mit Integrationsaktionen möglich sind. Für den DocuSign-Account gelten die eigenen Tarifbedingungen von DocuSign — prüft vorab, wie viele Umschläge (Envelopes) in eurem aktuellen Tarif enthalten sind.

---

*Erstellt auf Basis eines Projektmeetings vom 23. März 2026.*
