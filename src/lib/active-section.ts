/** Returns the section whose top has crossed the viewport marker. */
export function getActiveSectionId(ids: readonly string[], markerRatio = 0.3): string {
  const marker = window.innerHeight * markerRatio;
  let current = '';

  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= marker) current = id;
  }

  return current;
}
