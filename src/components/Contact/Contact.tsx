import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { fadeInUp, zoomIn, viewportOnce } from '../../utils/motionVariants';
import { SITE_CONFIG, getWhatsAppLink } from '../../data/config';
import { useLanguage } from '../../hooks/useLanguage';
import { submitQuickContact } from '../../utils/api';
import SectionHeading from '../SectionHeading/SectionHeading';

export default function Contact() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const [quick, setQuick] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await submitQuickContact(quick);
    setSending(false);
    setSent(true);
    setQuick({ name: '', email: '', message: '' });
  };

  const infoItems = [
    { icon: MapPin, label: t('contact.address'), value: t('contact.addressValue') },
    { icon: Phone, label: t('contact.phone'), value: t('contact.phoneValue') },
    { icon: FaWhatsapp, label: t('contact.whatsapp'), value: SITE_CONFIG.phone, href: getWhatsAppLink(lang) },
    { icon: Mail, label: t('contact.email'), value: t('contact.emailValue') },
    { icon: Clock, label: t('contact.hours'), value: t('contact.hoursValue') },
  ];

  const socials = [
    { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
  ].filter((s) => s.href);

  return (
    <section id="contactos" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading tag={t('contact.tag')} title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-5">
            {infoItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-xl border border-brand-gray-200 p-5 transition-colors hover:border-brand-red/50">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-black">{item.label}</div>
                    <div className="mt-0.5 text-sm text-brand-gray-600">{item.value}</div>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}

            {socials.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                <span className="text-sm font-bold text-brand-black">{t('contact.social')}</span>
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gray-100 text-brand-black transition-colors hover:bg-brand-red hover:text-white"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div variants={zoomIn} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-brand-gray-200 shadow-sm">
              <iframe
                title="RE-CALL location"
                src={SITE_CONFIG.mapEmbedUrl}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={SITE_CONFIG.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-black px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red"
              >
                <MapPin size={16} />
                {t('contact.mapButton')}
              </a>
            </div>

            <form
              onSubmit={handleQuickSubmit}
              className="rounded-2xl border border-brand-gray-200 bg-brand-gray-50 p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-brand-black">{t('contact.quickForm.title')}</h3>
              <div className="mt-4 space-y-3">
                <input
                  required
                  placeholder={t('contact.quickForm.name')}
                  value={quick.name}
                  onChange={(e) => setQuick((p) => ({ ...p, name: e.target.value }))}
                  className="w-full rounded-lg border border-brand-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-red"
                />
                <input
                  required
                  type="email"
                  placeholder={t('contact.quickForm.email')}
                  value={quick.email}
                  onChange={(e) => setQuick((p) => ({ ...p, email: e.target.value }))}
                  className="w-full rounded-lg border border-brand-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-red"
                />
                <textarea
                  required
                  rows={3}
                  placeholder={t('contact.quickForm.message')}
                  value={quick.message}
                  onChange={(e) => setQuick((p) => ({ ...p, message: e.target.value }))}
                  className="w-full rounded-lg border border-brand-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-red"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red disabled:opacity-70"
              >
                {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {t('contact.quickForm.send')}
              </button>
              {sent && (
                <p className="mt-3 flex items-center gap-2 text-sm font-medium text-green-700">
                  <CheckCircle2 size={16} />
                  {t('form.success')}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
