import { SITE_CONFIG } from '../config/site';

/**
 * Generates a pre-filled WhatsApp click-to-chat URL.
 * Dynamically includes the bedroom type or custom enquiry message.
 */
export const generateWhatsAppLink = (roomType?: string, customMessage?: string): string => {
  // Clean phone number to ensure only digits
  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

  let text = '';

  if (customMessage) {
    text = customMessage;
  } else if (roomType) {
    const formattedType = roomType.toLowerCase().startsWith('a ') ? roomType : `a ${roomType}`;
    text = `Hello, I would like to enquire about booking ${formattedType}. Please share the availability and booking details.`;
  } else {
    text = `Hello, I would like to enquire about stay availability and booking details at ${SITE_CONFIG.name}.`;
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
};
