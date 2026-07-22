import { useTranslation } from 'react-i18next';
import { LANG_STORAGE_KEY } from '../i18n/i18n';

export type Lang = 'pt' | 'en';

export function useLanguage() {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.split('-')[0] as Lang) || 'pt';

  const setLang = (next: Lang) => {
    i18n.changeLanguage(next);
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  /** Pick the right field from a { pt, en } content object. */
  const pick = <T,>(content: Record<Lang, T>): T => content[lang] ?? content.pt;

  return { lang, setLang, pick };
}
