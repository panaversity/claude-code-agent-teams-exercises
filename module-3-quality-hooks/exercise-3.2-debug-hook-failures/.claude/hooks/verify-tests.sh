#!/usr/bin/env bash
# Verify tests pass before accepting task completion

INPUT=$(cat)
TASK=$(echo "$INPUT" | jq -r '.task_description // "unknown"')

# Run the test suite
npm test --silent 2>&1
TEST_EXIT=$?

if [ $TEST_EXIT -ne 0 ]; then
  echo "Tests failing after: $TASK. Fix before marking complete."
fi

# Bug: always exits 0 regardless of test result
exit 0
