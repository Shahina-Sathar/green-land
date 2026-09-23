/** Store-hours helpers. Hours are whole numbers 0–23; close_hour 0 means midnight. */

export function isOpenNow(openHour: number, closeHour: number, now = new Date()): boolean {
  const hour = now.getHours();
  if (openHour === closeHour) return true;
  if (openHour < closeHour) return openHour <= hour && hour < closeHour;
  return hour >= openHour || hour < closeHour;
}

export function formatHour(hour: number): string {
  const h = ((hour % 24) + 24) % 24;
  if (h === 0) return "12 midnight";
  if (h === 12) return "12 noon";
  return h < 12 ? `${h} AM` : `${h - 12} PM`;
}

export function formatHoursRange(openHour: number, closeHour: number): string {
  if (openHour === closeHour) return "Open 24 hours";
  return `${formatHour(openHour)} – ${formatHour(closeHour)}`;
}

/** "08:00" / "22:00" — for schema.org openingHours. */
export function toIsoHour(hour: number): string {
  return `${String(((hour % 24) + 24) % 24).padStart(2, "0")}:00`;
}
