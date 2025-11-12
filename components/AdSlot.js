import { useEffect } from 'react';

export default function AdSlot({
  slot,
  format = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block', minHeight: '90px' },
  className = '',
  layoutKey,
}) {
  useEffect(() => {
    if (typeof window === 'undefined' || !slot) {
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Adsbygoogle error:', error);
      }
    }
  }, [slot]);

  if (!slot) {
    return null;
  }

  const insProps = {
    className: `adsbygoogle ${className}`.trim(),
    style,
    'data-ad-client': 'ca-pub-4608494003373704',
    'data-ad-slot': slot,
    'data-ad-format': format,
  };

  if (layoutKey) {
    insProps['data-ad-layout-key'] = layoutKey;
  }

  if (fullWidthResponsive !== undefined) {
    insProps['data-full-width-responsive'] = fullWidthResponsive.toString();
  }

  return <ins {...insProps} />;
}

