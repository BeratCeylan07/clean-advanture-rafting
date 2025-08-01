import * as React from 'react';
import { Metadata } from 'next';
import RaftingInfo from '../../features/rafting/components/RaftingInfo';

export const metadata: Metadata = {
  title: 'Rafting Macerası - Köprülü Kanyon Rafting | Selge Adventure Park',
  description: 'Köprülü Kanyon\'da unutulmaz rafting deneyimi! Profesyonel rehberler, güvenli ekipmanlar ve 14km parkur. Rezervasyon için hemen arayın: 0538 451 65 67',
  keywords: 'rafting, köprülü kanyon rafting, antalya rafting, selge adventure park, rafting turu, güvenli rafting',
  openGraph: {
    title: 'Rafting Macerası - Köprülü Kanyon Rafting',
    description: 'Köprülü Kanyon\'da unutulmaz rafting deneyimi! Profesyonel rehberler ve güvenli ekipmanlar.',
    images: ['/images/rafting/rafting-1.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://selgeadventurepark.com/rafting',
  },
};

export default function RaftingPage() {
  return <RaftingInfo />;
} 