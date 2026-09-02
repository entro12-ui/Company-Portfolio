export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs inline in <head> so the correct theme class lands on <html> before the
 * first paint, avoiding a flash of the wrong palette. Resolution order matches
 * ThemeProvider: stored preference, then the OS setting, then light.
 */
export const themeInitScript = `(function(){try{var k="${THEME_STORAGE_KEY}";var s=localStorage.getItem(k);var t=(s==="dark"||s==="light")?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var r=document.documentElement;r.classList.toggle("dark",t==="dark");r.classList.add("js");r.style.colorScheme=t;}catch(e){}})();`;
