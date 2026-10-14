const digits = '380633211898';

export const phone = {
  href: `tel:+${digits}`,
  label: '063 321 18 98',
  e164: `+${digits}`,
  intl: '+380 63 321 18 98',
  icon: '/icons/phone.svg'
};

// Handle without @
export const instagram = { handle: 'bez_bruda', href: 'https://instagram.com/bez_bruda' };

export const messengers = [
  { name: 'WhatsApp', href: `https://wa.me/${digits}`, icon: '/icons/whatsapp.svg' },
  { name: 'Viber', href: `viber://chat?number=%2B${digits}`, icon: '/icons/viber.svg' },
  { name: 'Telegram', href: `https://t.me/+${digits}`, icon: '/icons/telegram.svg' },
  { name: 'Instagram', href: instagram.href, icon: '/icons/instagram.svg' }
];
