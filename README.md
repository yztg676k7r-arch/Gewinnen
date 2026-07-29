
# Gewinnen – installierbare PWA

Diese Version verhält sich auf dem iPhone wie eine App:
- eigenes Icon
- Vollbild ohne Safari-Leiste
- Offline-Start
- Suche, Filter, Favoriten und Teilnahme-Häkchen
- eigener Bereich für täglich wiederholbare Gewinnspiele
- automatische Aktualisierung der Datei `data/contests.json`
- harte Filterregel gegen Kaufpflicht

## Schnell veröffentlichen

1. Kostenloses GitHub-Konto öffnen.
2. Neues öffentliches Repository anlegen, z. B. `gewinnen`.
3. Alle Dateien aus diesem Ordner hochladen.
4. Unter **Settings → Pages** die Veröffentlichung aus dem Hauptbranch aktivieren.
5. Die anschließend angezeigte Webadresse auf dem iPhone in Safari öffnen.
6. Teilen → **Zum Home-Bildschirm** → Name „Gewinnen“.

Danach startet die App ohne sichtbare Browserleiste.

## Automatische Datenpflege

Die App lädt beim Start `data/contests.json` neu. Der enthaltene GitHub-Workflow läuft täglich.
Damit er echte neue Gewinnspiele einpflegt, muss vor dem Workflow eine aktuelle
`data/incoming.json` bereitgestellt oder ein eigener Recherche-/Scrapingdienst angeschlossen werden.

Warum das nötig ist: Eine reine Webseite kann nicht selbständig beliebige fremde Seiten zuverlässig
durchsuchen. Viele Seiten haben unterschiedliche Strukturen, Captchas oder ändern ihre Bedingungen.

## Format für neue Einträge

```json
{
  "id": "eindeutige-id",
  "title": "Titel",
  "provider": "Veranstalter",
  "prize": "Gewinn",
  "url": "https://...",
  "category": "Reisen",
  "region": "Niedersachsen",
  "deadline": "31.08.2026",
  "frequency": "Täglich",
  "winners": "10",
  "chance": 4,
  "new": true,
  "verified": "29.07.2026",
  "purchaseRequired": false,
  "note": "Hinweis"
}
```

Einträge mit `"purchaseRequired": true` werden automatisch entfernt.


## Automatische Bereinigung

Die App blendet standardmäßig aus:
- Gewinnspiele mit einem Teilnahmeschluss vor dem heutigen Datum
- Einträge mit `"winnerKnown": true`
- Einträge mit `"status": "Gewinner feststehend"`
- Einträge mit `"status": "Abgelaufen"`
- Einträge mit `"purchaseRequired": true`

Über **Archiv anzeigen** können alte Einträge bei Bedarf noch eingesehen werden.
