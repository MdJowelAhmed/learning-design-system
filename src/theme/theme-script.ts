/**
 * Inline script to prevent FOUC (Flash of Unstyled Content) on page load.
 * Add this script to the <head> of your HTML document before any CSS.
 *
 * Usage in Next.js layout.tsx:
 *   <script dangerouslySetInnerHTML={{ __html: themeScript }} />
 *
 * Usage in plain HTML:
 *   <script>{themeScript}</script>
 */
export const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('myds-theme');
    var theme = stored || 'system';
    if (theme === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`.trim();

/**
 * Returns a script element string for SSR/SSG usage
 */
export function getThemeScriptTag(
  storageKey = 'myds-theme',
  attribute = 'data-theme',
): string {
  return `
(function() {
  try {
    var stored = localStorage.getItem('${storageKey}');
    var theme = stored || 'system';
    if (theme === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('${attribute}', theme);
    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
  `.trim();
}
