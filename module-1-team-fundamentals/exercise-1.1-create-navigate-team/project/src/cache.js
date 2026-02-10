// Simple in-memory cache

const cache = new Map();

function get(key) {
  const entry = cache.get(key);
  if (!entry) return null;

  // Check TTL
  if (entry.expiresAt && Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }

  return entry.value;
}

function set(key, value, ttlMs) {
  const entry = { value };
  if (ttlMs) {
    entry.expiresAt = Date.now() + ttlMs;
  }
  cache.set(key, entry);
}

function del(key) {
  cache.delete(key);
}

function clear() {
  cache.clear();
}

function size() {
  return cache.size;
}

// No max size limit -- potential memory leak if unbounded
// No eviction policy

module.exports = { get, set, del, clear, size };
