
## 4.8 – Tagesmodus

- Priorisierte tägliche Arbeitsliste mit Tagesziel.
- Fortschritt für offen, erledigt, geöffnet und nur heute übersprungen.
- Kompakte Aktionskarten für Teilnahme, Status und Ausblenden.
- Tagesbezogene Überspringen-Funktion ohne dauerhaftes Ausblenden.

## Version 4.7 – 100 angereicherte Gewinnspiele

Katalog mit 100 vollständig angereicherten Einträgen. 18 neue Gewinnspiele und einheitliche Qualitäts-, Chancen- und Prioritätsfelder.

# Version 4.6.2

- Ein verbindlicher Katalog: `contests.json`.
- Falsche URL-Dublettenbereinigung im Basiskatalog behoben.
- Alle 82 Einträge bleiben erhalten.
- Diagnose basiert auf tatsächlich geladenen Daten.

## 4.6.1 – Katalog-Lade-Bugfix

- Katalogauswahl lädt nicht länger blind die erste erreichbare Datei.
- Vier Katalogkopien mit identischen 82 Einträgen.
- Eindeutige Dateien `catalog-4.6.1.json` verhindern alte Teil-Uploads.
- Diagnose meldet Abweichungen zwischen erwartetem und geladenem Katalog.
- Vier fehlerhaft formatierte Gewinnspiele repariert.

# Version 4.6.1

- 50 neue aktuelle Gewinnspiel-Chancen
- Katalog von 32 auf 82 Einträge erweitert
- 20 tägliche Sommer-Chancen separat im Tagesworkflow
- 11 neue dm/glückskind-Aktionen
- neue Film-, Reise-, Lifestyle- und Familiengewinne
- Katalogpfade und Cache auf Version 4.6.1 synchronisiert

# Version 4.5.2

- „Alle“ setzt jetzt Hauptfilter, Zusatzfilter und Suche vollständig zurück.
- Katalog-JSON wird netzwerkbevorzugt und ohne Browser-Cache geladen.
- Service Worker verwendet wieder ausschließlich die tatsächlich vorhandenen stabilen Dateinamen.
- Versionsdiagnose und Kataloggröße bleiben sichtbar.

# Win Win 4.5.2 – Deployment- und Datenfix

- Live-Veröffentlichung als veraltet erkannt (3.6.3 statt 4.4).
- Versionierte Assets, Cache-Reset, Versionsdiagnose und Pages-Workflow ergänzt.
- Katalogdateien bleiben an beiden unterstützten Pfaden erhalten.
- Persönliche Statusdaten werden nicht verändert.

# Changelog

## 4.4 – Aktiver Katalogausbau

- Gewinnspielkatalog mit neu verifizierten, aktuell laufenden Aktionen erweitert.
- Vier neue offizielle Gewinnspiele ergänzt: ESSEN & TRINKEN Sommergewinnspiel sowie drei AUTO-BILD-Leserwahlen.
- Neue Einträge enthalten Frist, Gewinnerzahl, Aufwand, Teilnahmeart, Quelle und Qualitätsmerkmale.
- Datenstand und Versionsdiagnose auf 4.4 aktualisiert.
- Dashboard-, Status- und lokale Nutzerdatenlogik bleiben unverändert.

## 4.3 Daily Workflow
- Tagesmodus hinzugefügt
- Dashboard-Stabilität weiter verbessert
- Fokus auf täglichen Arbeitsablauf.

## 4.3 – Qualitätsprüfung
- Live-Prüfung neuer Katalogeinträge auf Frist, Link, Quelle und Teilnahmegebiet.
- Ungültige oder abgelaufene Einträge werden blockiert.
- Qualitätswert und Warnungen werden lokal gespeichert.

## 4.0 – Dashboard-Stabilität

- Dashboard-Ladefehler behoben.
- „Nicht interessant“ repariert.
- Katalog-Gesundheit ergänzt.
- Cache auf 4.0 aktualisiert.

## 3.9 – Katalog-Manager
- Schnellerfassung für neue Gewinnspiele
- automatische Quellen- und Kategorieerkennung aus URLs
- Dublettenprüfung vor dem Speichern
- neue Dashboard-Kennzahlen für heute, morgen und diese Woche endende Aktionen
- alle Versionsstellen auf 3.9 aktualisiert

# Version 3.8.1 – Navigations-Bugfix

- Kritischen JavaScript-Startfehler behoben: `safeJSON` wurde vor der Definition aufgerufen.
- Navigation und sämtliche Initialisierungen funktionieren wieder.
- Keine Änderungen an persönlichen Speicherbereichen.

# Win Win – Changelog

## 3.8.1 – 30.07.2026
- Prüf-Warteschlange für fällige Quellen
- Priorisierung nach Quellenqualität, Prüffälligkeit und bisherigen Treffern
- Direkter Webseitenaufruf sowie Treffer-/Leer-Erfassung
- Lokaler Tagesfortschritt ohne Veränderung persönlicher Gewinnspielstatus

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


## 3.7 – 30.07.2026
- Erster aktiver Katalogausbau mit 7 neu geprüften Gewinnspielen.
- Katalog auf 28 Einträge erweitert.
- Einheitliche Versionspflege in allen App- und Datendateien.


## 4.1
- Lokale Treffer-Inbox für mehrere gefundene Direktlinks
- Quellen- und Kategorieerkennung sowie URL-Dublettenprüfung
- Übernahme einzelner Inbox-Treffer in den Katalog-Manager
- Inbox in persönlicher Komplettsicherung enthalten
