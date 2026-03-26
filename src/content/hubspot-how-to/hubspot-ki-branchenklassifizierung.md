# KI-gestützte Branchenklassifizierung in HubSpot einrichten

**Kategorie:** HubSpot CRM · Datenanreicherung · KI-Eigenschaften
**Schwierigkeitsgrad:** Mittel
**Zeitaufwand:** ca. 30–60 Minuten

---

## Worum geht es?

HubSpot bietet über seinen „Intelligence"-Reiter die Möglichkeit, Unternehmensdaten automatisch anreichern zu lassen — und mit KI-gestützten Eigenschaften sogar eigene Klassifizierungslogiken zu hinterlegen. Eine besonders praktische Anwendung: Die automatische Zuweisung von Branchen nach einer selbst definierten Kategorienliste.

Viele Unternehmen haben eine interne Branchenklassifikation, die nicht mit den Standardkategorien von HubSpot oder Datenanbieter übereinstimmt. Mit KI-Eigenschaften lässt sich das lösen: HubSpot recherchiert auf der Website des Unternehmens, ermittelt den Haupttätigkeitsbereich und ordnet ihn automatisch einer eurer vordefinierten Kategorien zu.

---

## Voraussetzungen

- HubSpot Sales Hub oder Marketing Hub in einer Lizenz, die KI-Eigenschaften (AI Properties) enthält (erfahrungsgemäß ab Professional — aktuelle Verfügbarkeit in eurer Lizenz in der HubSpot-Produktübersicht prüfen)
- Administratorzugang im HubSpot-Portal
- Eine fertige Liste eurer internen Branchenkategorien

---

## Schritt 1: Eigene Branchenkategorien definieren

Bevor ihr HubSpot konfiguriert, legt intern fest, welche Kategorien ihr verwenden wollt. Wichtig: Keine Freitexteingaben — das führt zu inkonsistenten Daten.

Beispiel für eine Optionsliste:

- Maschinenbau & Fertigung
- Handwerk & Handwerksbetriebe
- Handel & Grosshandel
- Baugewerbe & Gebäudetechnik
- IT & Software
- Dienstleistungen & Beratung
- Sonstige

Haltet diese Liste bewusst klein und trennscharf. In der Regel gilt: Je mehr Kategorien, desto unschärfer wird die KI-Zuordnung.

---

## Schritt 2: KI-Eigenschaft im HubSpot anlegen

1. Navigiert in HubSpot zu **Einstellungen → Eigenschaften → Unternehmen**
2. Klickt auf **Eigenschaft erstellen**
3. Wählt als Feldtyp **KI-Eigenschaft** (oder „AI Property", je nach Spracheinstellung — der genaue Menüpfad kann je nach HubSpot-Version leicht abweichen)
4. Gebt der Eigenschaft einen klar verständlichen Namen, z. B. `Interne Branche (KI)`
5. Wählt **Dropdown-Auswahl** als Antwortformat
6. Tragt eure Kategorien aus Schritt 1 als Optionen ein

---

## Schritt 3: Den Prompt formulieren

Der Prompt ist das Herzstück der KI-Eigenschaft. HubSpot nutzt ihn, um die Website des Unternehmens zu analysieren und eine Kategorie zuzuweisen.

**Empfohlene Promptstruktur:**

> Analysiere die Website des Unternehmens und ermittle den primären Geschäftstätigkeitsbereich. Ordne das Unternehmen dann einer der folgenden Kategorien zu:
> [Maschinenbau & Fertigung / Handwerk & Handwerksbetriebe / Handel & Grosshandel / ...]
> Wähle immer genau eine Kategorie aus. Falls keine eindeutige Zuordnung möglich ist, wähle „Sonstige".

**Wichtige Hinweise zum Prompt:**

- Listet alle Kategorien direkt im Prompt auf — HubSpot kann nur aus diesen wählen
- Formuliert die Anweisung klar und eindeutig
- Verbietet Freitexteingaben ausdrücklich (z. B. „Wähle ausschließlich aus den genannten Optionen")

---

## Schritt 4: Weitere nützliche KI-Eigenschaften einrichten

Aus dem gleichen Mechanismus lassen sich weitere automatisierte Prüfungen aufbauen. Besonders hilfreich:

**Geschäftsführer-Überprüfung:**
> Prüfe, ob [Kontaktname] auf der Website oder im Impressum des Unternehmens als Geschäftsführer oder Inhaber gelistet ist. Antworte mit „Ja", „Nein" oder „Nicht eindeutig".

Wenn das Ergebnis auf „Nein" oder „Nicht eindeutig" wechselt, lässt sich ein HubSpot-Workflow triggern, der automatisch eine Aufgabe für den Vertrieb erstellt — z. B. zur Datenprüfung oder Kontaktaktualisierung.

---

## Schritt 5: Datenanreicherung über den Intelligence-Reiter

Neben KI-Eigenschaften bietet HubSpot im Intelligence-Reiter automatische Datenanreicherungsvorschläge:

1. Öffnet einen Unternehmens-Datensatz in HubSpot
2. Klickt auf den Reiter **„Intelligence"**
3. HubSpot schlägt angereicherte Felder vor: Adresse, Mitarbeiterzahl, Beschreibung und weitere
4. Ihr könnt jeden Vorschlag einzeln übernehmen oder ablehnen

**Empfohlene Datenquellen für die manuelle Anreicherung:**

- LinkedIn (Unternehmensprofil)
- Handelsregister (kostenlos abrufbar)
- Unternehmenswebsite / Impressum
- Apollo (für skalierte B2B-Recherche)

---

## Was ihr damit erreicht

- **Konsistente Segmentierung:** Alle Unternehmen sind nach einem einheitlichen System klassifiziert — ohne manuelle Eingaben durch das Team
- **Automatische Qualitätssicherung:** Veraltete Kontaktdaten (Geschäftsführerwechsel, Adressänderungen) werden frühzeitig erkannt
- **Bessere Listen und Berichte:** Ihr könnt Unternehmen gezielt nach Branche filtern, ansprechen und auswerten

---

## Hinweis zur Datenaktualität

Durchschnittlich ändert sich ein Unternehmens-Datensatz etwa alle drei Monate — das bedeutet, dass rund 30 % eures CRM-Bestands innerhalb eines Jahres veralten können. KI-Eigenschaften helfen, diese Drift systematisch aufzufangen, ersetzen aber keine regelmäßige Datenpflege durch das Vertriebsteam.

---

*Erstellt auf Basis eines HubSpot-Workshops vom 23. März 2026.*
