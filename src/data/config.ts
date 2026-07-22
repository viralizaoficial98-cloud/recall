/**
 * Central site configuration. Update these values when real business
 * data becomes available — every provisional value is flagged below.
 */

// TODO: replace with the real WhatsApp business number (E.164, no "+")
export const WHATSAPP_NUMBER = '244900000000';

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
  // TODO: replace with the real phone number
  phone: '+244 900 000 000',
  // TODO: replace with the real email
  email: 'geral@recall-eventos.com',
  // TODO: replace with the real address
  address: 'Avenida Principal, 123, Luanda, Angola',
  // TODO: replace with the real Google Maps embed URL
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.0!2d13.2894!3d-8.8383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLuanda!5e0!3m2!1spt!2sao!4v0',
  mapLink: 'https://maps.google.com/?q=Luanda,Angola',
  social: {
    facebook: 'https://facebook.com/recalleventos',
    instagram: 'https://instagram.com/recalleventos',
    linkedin: 'https://linkedin.com/company/recalleventos',
    youtube: 'https://youtube.com/@recalleventos',
  },
};
