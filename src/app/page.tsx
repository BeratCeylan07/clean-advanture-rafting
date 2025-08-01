import { Metadata } from 'next';
import Hero from '../components/Hero';
import ProductValues from '../components/ProductValues';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import GroupEventsSection from '../components/GroupEventsSection';

export const metadata: Metadata = {
  title: 'Selge Adventure Park - Köprülü Kanyon Macera Turizmi',
  description: 'Köprülü Kanyon\'da rafting, zipline, camping, buggy safari ve restaurant hizmetleri. Antalya\'nın en iyi macera parkı. Profesyonel rehberler ve güvenli ekipmanlar. Rezervasyon: 0538 451 65 67',
  keywords: 'selge adventure park, köprülü kanyon, rafting, zipline, camping, buggy safari, antalya macera turizmi, outdoor aktiviteler, macera parkı',
  openGraph: {
    title: 'Selge Adventure Park - Köprülü Kanyon Macera Turizmi',
    description: 'Köprülü Kanyon\'da rafting, zipline, camping, buggy safari ve restaurant hizmetleri.',
    images: ['/images/logo.png'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://selgeadventurepark.com',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProductValues />
      <GallerySection />
      <GroupEventsSection />
    </>
  );
}
// Test comment for Vercel deployment
// Vercel integration test
// Token permissions test
// Missing permissions test - workflow, admin:org, admin:repo_hook added
// GitHub token permissions test - workflow, admin:org, admin:repo_hook
// Disconnect and reconnect test with updated token permissions
// Deploy hook test - GitHub Actions workflow test
