# Changelog

## 3.6.4
- Quellenpfad auf GitHub Pages repariert: Fallback zwischen `data/sources.json` und `sources.json`.
- Entsprechender Fallback für Gewinnspieldaten.
- Service-Worker-Installation toleriert fehlende optionale Datenpfade.
- JSON-Dateien werden im ZIP zusätzlich im Hauptverzeichnis mitgeliefert.
- Version und Cache vereinheitlicht.

## 3.6.3
- Quellenanzeige auf iPhone/Safari stabilisiert und paginiert.
- Versionsnummer und Cache vereinheitlicht.
- Defensive Fehlerbehandlung für Quellenkarten ergänzt.

# Version 3.5 – Quellen-Intelligence

- Priorität, Ertragsprotokoll und Abdeckungsanalyse
- DE-Teilnahme und Verifizierung
- Quellen-Dialog technisch stabilisiert

# Version 3.2
- Quellen-Cockpit mit Prüfstatus und Fälligkeitsberechnung
- Quellen hinzufügen, bearbeiten, pausieren und als geprüft markieren
- direkte Website-Links und verbesserter Quellenimport
- persönliche Gewinnspielstatus bleiben unverändert

# Win Win – Changelog

## 3.6
- Quellenkatalog auf 183 Quellen erweitert
- Quellen-Favoriten und Favoritenfilter ergänzt
- Versionsanzeige in allen relevanten Dateien vereinheitlicht
- neue Einträge zunächst als ehrliche Prüfkandidaten gekennzeichnet


## 3.1.0 – Quellen-Datenbank
- Separate Quellen-Datenbank mit `data/sources.json`
- Quellenfilter, Statistik, Import und Export
- Gewinnspiele über `sourceId` verknüpft
- Persönliche Statusspeicher unverändert

# Changelog

## 3.0.0
- Kritischen Startfehler behoben: fehlende Filter-Elemente brechen JavaScript nicht mehr ab.
- Dashboard lädt Kennzahlen, Empfehlungen, Kategorien und Gewinnarchiv wieder zuverlässig.
- Optionale Bedienelemente werden defensiv geprüft.
- Dashboard-Rendering gegen unvollständige lokale Datensätze abgesichert.
- Bestehende LocalStorage-Schlüssel und persönliche Status bleiben unverändert.

# Version 2.9.2

- Dashboard-Abbruch durch fehlerhafte oder ältere Gewinnarchiv-Datumswerte behoben.
- Einzelne Dashboard-Bereiche sind gegen fehlerhafte lokale Daten abgesichert.
- Persönliche Status und bestehende Speicherschlüssel bleiben unverändert.

# Version 2.9.1

- Dashboard-Rendering gegen Fehler in anderen Ansichten abgesichert.
- Leere Dashboard-Bereiche werden ausgeblendet.
- Mobile Kennzahlen und Abstände überarbeitet.
- Bestehende lokale Statusdaten und Speicherschlüssel bleiben unverändert.


## 2.9
- Persönliche Tagesroutine mit frei wählbarem Tagesziel.
- Vier Sortiermodi für die tägliche Reihenfolge.
- Neue Empfehlung „Als Nächstes“.
- Tagesliste in Dringend, Schnell erledigt und Beste Chancen gegliedert.
- Fortschritt zählt tatsächliche heutige Teilnahmen statt nur die aktuelle Sitzung.
- Tagesroutine in Komplettsicherung aufgenommen.
- Vorhandene lokale Status bleiben unverändert erhalten.

## 2.8
- Vollständige persönliche Sicherung als JSON
- Wiederherstellung auf demselben oder einem anderen Gerät
- Sicherung umfasst Status, Gewinne, Einstellungen, Präferenzen und lokale Katalogdaten
- Automatische Rücksprung-Sicherung vor jeder Wiederherstellung
- Bestehende Status-Schlüssel bleiben unverändert

## 2.6
- Importvorschau vor dem Speichern
- automatische Katalog-Sicherung
- Wiederherstellung des vorherigen Katalogstands
- Importverlauf
- unveränderter Schutz persönlicher Status

# Win Win – Changelog

## 3.6
- Quellenkatalog auf 183 Quellen erweitert
- Quellen-Favoriten und Favoritenfilter ergänzt
- Versionsanzeige in allen relevanten Dateien vereinheitlicht
- neue Einträge zunächst als ehrliche Prüfkandidaten gekennzeichnet


## 2.5.1
- Doppelte Filteroption „Endet bald“ entfernt.
- Filter „Als neu markiert“ entfernt.
- Bezeichnung „Neu seit letztem Besuch“ präzisiert.
- Keine Änderung an lokalen Nutzerstatus oder Speicherschlüsseln.

## 2.5
- Dublettenerkennung um stabile Fingerabdrücke erweitert
- ähnliche Gewinnspiele werden als Prüfhinweise erkannt
- Datenwarnungen und Anbieterqualität in der Datenzentrale ergänzt
- ID-Konflikte werden gemeldet, bestehende IDs bleiben erhalten
- lokale Nutzerstatus bleiben unverändert im bisherigen Speicherbereich

## 2.4
- Prioritäts-Engine v1 eingeführt
- separate Teilwerte für Chance, Zeitnutzen, Attraktivität und Dringlichkeit
- Prioritätsgründe direkt auf jeder Karte sichtbar
- bestehender LocalStorage-Schlüssel unverändert beibehalten
- automatische Sicherung der persönlichen Statusdaten ergänzt
- URL-basierte Statusmigration schützt Markierungen bei geänderten IDs

## 2.3
- Dashboard blendet Teilgenommen und Nicht interessant standardmäßig aus
- Win des Tages und Prioritätsbereiche
- ROADMAP und CHANGELOG eingeführt

## 2.2.1
- Gewinnarchiv aus 2.1 und Filter aus 2.2 zusammengeführt


## 2.7
- lokale persönliche Priorisierung ohne Profil, Konto oder Cloud
- Kategorien werden aus Favoriten, Teilnahmen, Gewinnen, Klicks und „Nicht interessant“ gewichtet
- transparente persönliche Score-Komponente auf jeder Karte
- Lernen kann pausiert oder zurückgesetzt werden
- Reset betrifft ausschließlich die Gewichtung; alle persönlichen Status bleiben erhalten
- unveränderte Speicherbereiche für Teilnahmen, Favoriten, Gewinne und Katalogdaten
