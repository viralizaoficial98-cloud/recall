import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../Logo/Logo';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useScrolled } from '../../hooks/useScrollPosition';
import { useActiveSection } from '../../hooks/useActiveSection';
import { navItems } from '../../data/nav';
import { scrollToSection } from '../../utils/scrollTo';

export default function Header() {
  const { t } = useTranslation();
  const scrolled = useScrolled(30);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((n) => n.sectionId));

  const handleNavigate = (sectionId: string) => {
    setMobileOpen(false);
    scrollToSection(sectionId);
  };

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/85 shadow-md backdrop-blur-lg supports-[backdrop-filter]:bg-white/70'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <button
          type="button"
          onClick={() => handleNavigate('inicio')}
          aria-label="RE-CALL Business & Services"
          className="shrink-0"
        >
          <Logo
            variant="full"
            monochrome={solid ? false : 'light'}
            className="h-10 w-auto sm:h-11"
          />
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.sectionId)}
              className={`relative text-sm font-semibold uppercase tracking-wide transition-colors ${
                solid ? 'text-brand-black' : 'text-white'
              } ${activeSection === item.sectionId ? 'text-brand-red' : ''} hover:text-brand-red`}
            >
              {t(`nav.${item.translationKey}`)}
              {activeSection === item.sectionId && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-brand-red"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher dark={!solid} />
          <button
            type="button"
            onClick={() => handleNavigate('contactos')}
            className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.03] hover:bg-brand-red-dark active:scale-95"
          >
            {t('nav.cta')}
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher dark={!solid} />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            className={`rounded-md p-2 ${solid ? 'text-brand-black' : 'text-white'}`}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-white shadow-lg lg:hidden"
          >
            <nav className="container-x flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.sectionId)}
                  className={`rounded-lg px-3 py-3 text-left text-base font-semibold transition-colors ${
                    activeSection === item.sectionId
                      ? 'bg-brand-gray-100 text-brand-red'
                      : 'text-brand-black hover:bg-brand-gray-50'
                  }`}
                >
                  {t(`nav.${item.translationKey}`)}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavigate('contactos')}
                className="mt-2 rounded-full bg-brand-red px-5 py-3 text-center text-base font-semibold text-white"
              >
                {t('nav.cta')}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
