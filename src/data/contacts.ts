export const phone = {
  href: 'tel:+380633211898',
  label: '063 321 18 98',
  e164: '+380633211898',
  intl: '+380 63 321 18 98'
};

// Handle without @; also used for structured data (sameAs)
export const instagram = { handle: 'bez_bruda' };

export const messengers = [
  { name: 'WhatsApp', href: 'https://wa.me/380633211898', icon: '/icons/whatsapp.svg' },
  { name: 'Viber', href: 'viber://chat?number=%2B380633211898', icon: '/icons/viber.svg' },
  { name: 'Telegram', href: 'https://t.me/+380633211898', icon: '/icons/telegram.svg' },
  { name: 'Instagram', href: `https://instagram.com/${instagram.handle}`, icon: '/icons/instagram.svg' }
];
