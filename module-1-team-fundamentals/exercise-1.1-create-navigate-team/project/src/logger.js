// Logging utility

const LOG_LEVELS = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 };

let currentLevel = LOG_LEVELS.INFO;

function setLevel(level) {
  if (LOG_LEVELS[level] !== undefined) {
    currentLevel = LOG_LEVELS[level];
  }
}

function log(level, message, data) {
  if (LOG_LEVELS[level] < currentLevel) return;

  const timestamp = new Date().toISOString();
  const entry = { timestamp, level, message };

  if (data) {
    // WARNING: logging full objects may include sensitive data (passwords, tokens)
    entry.data = data;
  }

  console.log(JSON.stringify(entry));
}

function debug(msg, data) { log("DEBUG", msg, data); }
function info(msg, data) { log("INFO", msg, data); }
function warn(msg, data) { log("WARN", msg, data); }
function error(msg, data) { log("ERROR", msg, data); }

module.exports = { setLevel, debug, info, warn, error };
