#!/usr/bin/env python3
from pathlib import Path
import json, datetime

ROOT = Path(__file__).resolve().parents[1]
incoming = ROOT / "data" / "incoming.json"
target = ROOT / "data" / "contests.json"

def parse_date(value):
    if not value:
        return None
    try:
        return datetime.datetime.strptime(value, "%d.%m.%Y").date()
    except ValueError:
        return None

if not incoming.exists():
    print("Keine data/incoming.json gefunden – bestehende Daten bleiben unverändert.")
    raise SystemExit(0)

payload = json.loads(incoming.read_text(encoding="utf-8"))
contests = payload.get("contests", payload)
today = datetime.date.today()

clean = []
for x in contests:
    if x.get("purchaseRequired") is True:
        continue
    if x.get("winnerKnown") is True:
        continue
    if x.get("status") in {"Gewinner feststehend", "Abgelaufen"}:
        continue
    deadline = parse_date(x.get("deadline"))
    if deadline and deadline < today:
        continue
    clean.append(x)

out = {
    "updated": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "contests": clean
}
target.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"{len(clean)} aktive Gewinnspiele gespeichert.")
