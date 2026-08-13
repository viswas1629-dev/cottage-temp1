import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface WhatsAppButtonProps {
  roomName?: string;
  customMessage?: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'floating';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  showArrow?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  roomName,
  customMessage,
  label,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  showArrow = true
}) => {
  const link = generateWhatsAppLink(roomName, customMessage);
  const defaultText = roomName ? `Enquire About ${roomName}` : 'Enquire on WhatsApp';
  const buttonText = label || defaultText;

  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#15291E] focus:ring-offset-2';
  
  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-2',
    md: 'px-6 py-3 text-sm gap-2.5',
    lg: 'px-8 py-4 text-base gap-3'
  };

  // Variant styles
  const variantStyles = {
    primary: 'bg-[#15291E] text-[#FAF7F2] hover:bg-[#1D3829] shadow-md hover:shadow-lg border border-[#274B37]',
    secondary: 'bg-[#C89D66] text-[#15291E] hover:bg-[#D8AE77] shadow-sm hover:shadow-md font-semibold',
    outline: 'border border-[#15291E] text-[#15291E] hover:bg-[#15291E] hover:text-[#FAF7F2]',
    floating: 'bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-xl hover:scale-105'
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Send WhatsApp enquiry for ${roomName || 'stay'}`}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageCircle className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} transition-transform duration-300 group-hover:scale-110 flex-shrink-0`} />
      <span className="truncate">{buttonText}</span>
      {showArrow && (
        <ArrowRight className={`${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0`} />
      )}
    </a>
  );
};

export default WhatsAppButton;
