# Win Win 2.7

Persönliche, kostenlose PWA zur Verwaltung und Priorisierung von Gewinnspielen.

## Neu in 2.5
- stärkere Dublettenerkennung über ID, URL und Fingerabdruck
- Erkennung ähnlicher Gewinnspiele
- Datenwarnungen und Anbieterqualität
- Schutz stabiler IDs bei Importen
- bestehende lokale Status wie Teilgenommen, Nicht interessant, Favoriten und Gewinne bleiben erhalten

## Installation
Alle Dateien in das bestehende GitHub-Pages-Repository hochladen und vorhandene Dateien ersetzen. Danach die Web-App vollständig schließen und erneut öffnen.


## Korrektur in 2.7
- Doppelte Anzeige von „Endet bald“ entfernt.
- Den missverständlichen Filter „Als neu markiert“ entfernt.
- „Neu seit letztem Besuch“ bleibt als eindeutiger automatischer Filter erhalten.
- Persönliche Statusdaten und vorhandene LocalStorage-Schlüssel bleiben unverändert.


## Version 2.7
JSON-Importe werden vorab geprüft, müssen ausdrücklich bestätigt werden und erhalten eine automatische lokale Katalog-Sicherung. Persönliche Status bleiben getrennt.


## Version 2.7
Die persönliche Gewichtung arbeitet ausschließlich lokal. Sie verändert nur Empfehlungen und Reihenfolge, nicht die gespeicherten Status.
