import { useTranslation } from 'react-i18next';
import { ArrowUp, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../Logo/Logo';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { navItems } from '../../data/nav';
import { services } from '../../data/services';
import { SITE_CONFIG } from '../../data/config';
import { scrollToSection } from '../../utils/scrollTo';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-black text-white/80">
      <div className="container-x grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="full" monochrome="light" className="h-10 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">{t('footer.description')}</p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { icon: Facebook, href: SITE_CONFIG.social.facebook },
              { icon: Instagram, href: SITE_CONFIG.social.instagram },
              { icon: Linkedin, href: SITE_CONFIG.social.linkedin },
              { icon: Youtube, href: SITE_CONFIG.social.youtube },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-red"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">{t('footer.quickLinks')}</h4>
          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-sm text-white/60 transition-colors hover:text-brand-red"
                >
                  {t(`nav.${item.translationKey}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">{t('footer.servicesTitle')}</h4>
          <ul className="space-y-2.5">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection('servicos')}
                  className="text-sm text-white/60 transition-colors hover:text-brand-red"
                >
                  {t(`services.items.${service.translationKey}.title`)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">{t('footer.contactTitle')}</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-red" />
              {t('contact.addressValue')}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-brand-red" />
              {SITE_CONFIG.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-brand-red" />
              {SITE_CONFIG.email}
            </li>
          </ul>
          <div className="mt-5">
            <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-white">{t('footer.langTitle')}</h4>
            <LanguageSwitcher dark />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-center text-xs text-white/50 sm:text-left">{t('footer.rights')}</p>
          <div className="flex items-center gap-5 text-xs text-white/50">
            <a href="#privacidade" className="hover:text-brand-red">
              {t('footer.privacy')}
            </a>
            <a href="#termos" className="hover:text-brand-red">
              {t('footer.terms')}
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label={t('footer.backToTop')}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-red"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
