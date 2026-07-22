export const HEADER_OFFSET = 84;

export function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}
