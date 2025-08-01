import * as React from 'react';
import { Metadata } from 'next';
import RestaurantInfo from '../../features/restaurant/components/RestaurantInfo';

export const metadata: Metadata = {
  title: 'Selge Restaurant - Köprülü Kanyon Restaurant | Geleneksel Lezzetler',
  description: 'Köprülü Kanyon\'da geleneksel lezzetler! Tavuk şiş, alabalık, et çeşitleri ve kahvaltı. Doğa manzarası eşliğinde unutulmaz yemek deneyimi. Rezervasyon: 0538 451 65 67',
  keywords: 'restaurant, köprülü kanyon restaurant, antalya restaurant, selge restaurant, alabalık, tavuk şiş, kahvaltı',
  openGraph: {
    title: 'Selge Restaurant - Köprülü Kanyon Restaurant',
    description: 'Köprülü Kanyon\'da geleneksel lezzetler ve modern mutfak sanatının buluştuğu nokta.',
    images: ['/images/restuarant/restuarant-1.jpeg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://selgeadventurepark.com/restaurant',
  },
};

export default function RestaurantPage() {
  return <RestaurantInfo />;
} 