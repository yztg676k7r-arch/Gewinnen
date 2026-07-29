# Gewinnen 1.0

Persönliche, installierbare Web-App für GitHub Pages.

## Enthalten
- iPhone-optimiertes Dashboard
- korrektes Apple-Touch-Icon im Projektstamm
- Favoriten und „Teilgenommen“ lokal pro Gerät
- Suche, Kategorien und Sortierung
- automatische Ausblendung abgelaufener Aktionen
- Fallback-Daten: Die Liste bleibt sichtbar, selbst wenn `data/contests.json` nicht geladen werden kann
- Offline-Grundfunktion durch Service Worker

## Update auf GitHub
Alle Dateien aus diesem Paket in die oberste Ebene des Repositorys `gewinnen` hochladen.
`index.html`, `apple-touch-icon.png` und `manifest.webmanifest` müssen direkt oben liegen.

## Wichtig zum Icon auf dem iPhone
Nach dem Upload:
1. Zwei Minuten warten.
2. Alte Gewinnen-App vom Home-Bildschirm entfernen.
3. In Safari die GitHub-Pages-Adresse öffnen.
4. Safari-Seite neu laden.
5. Erneut „Zum Home-Bildschirm“ wählen.

Das neue Icon liegt zusätzlich als `apple-touch-icon.png` direkt im Projektstamm, weil iOS genau diese Datei bevorzugt.
