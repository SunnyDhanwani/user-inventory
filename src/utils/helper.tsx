export function getGlobalItem(key: string) {
  try {
    if (typeof window !== "undefined" && window.localStorage.getItem(key)) {
      const value = window.localStorage.getItem(key);
      if (value) return JSON.parse(window.localStorage.getItem(key) ?? "");
    }
  } catch (err) {
    return "";
  }
}

export function setGlobalItem(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function clearGlobalItem(key: string) {
  window.localStorage.removeItem(key);
}

export function clearAllGlobalItem() {
  window.localStorage.clear();
}
