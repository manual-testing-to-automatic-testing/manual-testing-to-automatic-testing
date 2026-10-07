#!/usr/bin/env sh
# Load the training profile and the synthetic bundle into the FHIR sandbox.
# Usage: scripts/load.sh [base-url]   (default http://localhost:8080/fhir)
set -eu
BASE="${1:-${FHIR_BASE_URL:-http://localhost:8080/fhir}}"
DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "Waiting for $BASE/metadata ..."
i=0
until curl -sf "$BASE/metadata" >/dev/null; do
  i=$((i + 1))
  if [ "$i" -gt 60 ]; then echo "FHIR server not reachable at $BASE" >&2; exit 1; fi
  sleep 5
done

echo "Loading profile ..."
curl -sf -X PUT -H "Content-Type: application/fhir+json" \
  --data-binary "@$DIR/profiles/training-patient.json" \
  "$BASE/StructureDefinition/training-patient" >/dev/null

echo "Loading synthetic bundle ..."
curl -sf -X POST -H "Content-Type: application/fhir+json" \
  --data-binary "@$DIR/data/synthetic-bundle.json" \
  "$BASE" >/dev/null

echo "Done: $(curl -sf "$BASE/Patient?_summary=count" | sed -n 's/.*"total": *\([0-9]*\).*/\1/p') patients loaded."
