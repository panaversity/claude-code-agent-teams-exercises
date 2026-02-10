#!/usr/bin/env bash
# Check if there's remaining TODO/FIXME work for idle teammates

INPUT=$(cat)
TEAMMATE=$(echo "$INPUT" | jq -r '.teammate_name // "unknown"')

# Count remaining issues
REMAINING=$(grep -r "TODO\|FIXME" src/ 2>/dev/null | wc -l | tr -d ' ')

if [ "$REMAINING" -gt 0 ]; then
  echo "$TEAMMATE: there are $REMAINING TODO/FIXME items remaining. Pick one up."
  exit 2
fi

exit 0
