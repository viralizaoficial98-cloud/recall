/**
 * Central site configuration. Update these values when real business
 * data becomes available — every provisional value is flagged below.
 */

export const WHATSAPP_NUMBER = '244921483399';

export const WHATSAPP_MESSAGE_PT =
  'Olá RE-CALL, gostaria de solicitar informações sobre os vossos serviços.';
export const WHATSAPP_MESSAGE_EN =
  'Hello RE-CALL, I would like to request information about your services.';

export function getWhatsAppLink(lang: 'pt' | 'en') {
  const message = lang === 'en' ? WHATSAPP_MESSAGE_EN : WHATSAPP_MESSAGE_PT;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE_CONFIG = {
  companyName: 'RE-CALL Business & Services, Lda',
  phone: '+244 921 483 399',
  email: 'geral@recallcom.com',
  address: 'Avenida de Portugal, Ingombota, Luanda, Angola',
  // Generic area embed (Luanda, Ingombota) — replace with the exact pin once the final venue address is confirmed.
  mapEmbedUrl: 'https://www.google.com/maps?q=Luanda,+Ingombota,+Angola&output=embed',
  mapLink: 'https://maps.google.com/?q=Luanda,+Ingombota,+Angola',
  // TODO: fill in once the official social media profiles exist — icons stay hidden until then.
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  },
};
