/**
 * Shared utilities for the Accenture OA Simulation
 */

/**
 * Format seconds into a m:ss timer display string.
 * @param {number} secs - total seconds remaining
 * @returns {string} formatted time string (e.g. "4:02")
 */
export function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}
