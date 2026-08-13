import { SITE_CONFIG } from '../config/site';

/**
 * Generates a pre-filled WhatsApp click-to-chat URL.
 * Dynamically includes the room name for specific cottage enquiries.
 */
export const generateWhatsAppLink = (roomName?: string, customMessage?: string): string => {
  // Clean phone number to ensure only digits
  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');

  let text = '';

  if (customMessage) {
    text = customMessage;
  } else if (roomName) {
    text = `Hello! I would like to enquire about booking ${roomName} at ${SITE_CONFIG.name}. Please share the availability, tariff, and booking details.`;
  } else {
    text = `Hello! I would like to enquire about stay availability and booking details at ${SITE_CONFIG.name}.`;
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
};
