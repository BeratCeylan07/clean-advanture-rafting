import * as React from 'react';
import { Metadata } from 'next';
import IletisimInfo from '../../features/iletisim/components/IletisimInfo';

export const metadata: Metadata = {
  title: 'İletişim - Selge Adventure Park | Köprülü Kanyon Rezervasyon',
  description: 'Selge Adventure Park ile iletişime geçin. Köprülü Kanyon rafting, zipline, camping rezervasyonları için: 0538 451 65 67. Adres, harita ve iletişim bilgileri.',
  keywords: 'selge adventure park iletişim, köprülü kanyon rezervasyon, antalya rafting iletişim, selge adventure park telefon',
  openGraph: {
    title: 'İletişim - Selge Adventure Park',
    description: 'Köprülü Kanyon\'da macera turizmi için iletişime geçin. Rezervasyon ve bilgi için hemen arayın.',
    images: ['/images/logo.png'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://selgeadventurepark.com/iletisim',
  },
};

export default function IletisimPageRoute() {
  return <IletisimInfo />;
} 