export const OPEN_TO_WORK_STORAGE_KEY = "portfolio:open-to-work";
export const OPEN_TO_WORK_EVENT = "portfolio:open-to-work-changed";
export const AVAILABILITY_MODE_STORAGE_KEY = "portfolio:availability-mode";
export const AVAILABILITY_MODE_EVENT = "portfolio:availability-mode-changed";

export type AvailabilityMode = "internships" | "work";

export function readOpenToWorkPreference(defaultValue: boolean): boolean {
  if (typeof window === "undefined") return defaultValue;

  const stored = window.localStorage.getItem(OPEN_TO_WORK_STORAGE_KEY);
  if (stored === null) return defaultValue;

  return stored === "true";
}

export function writeOpenToWorkPreference(value: boolean): void {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(OPEN_TO_WORK_STORAGE_KEY, String(value));
  window.dispatchEvent(new CustomEvent<boolean>(OPEN_TO_WORK_EVENT, { detail: value }));
}

export function readAvailabilityModePreference(defaultValue: AvailabilityMode): AvailabilityMode {
  if (typeof window === "undefined") return defaultValue;

  const stored = window.localStorage.getItem(AVAILABILITY_MODE_STORAGE_KEY);
  if (stored === "work" || stored === "internships") {
    return stored;
  }

  return defaultValue;
}

export function writeAvailabilityModePreference(value: AvailabilityMode): void {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(AVAILABILITY_MODE_STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent<AvailabilityMode>(AVAILABILITY_MODE_EVENT, { detail: value }));
}