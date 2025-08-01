import * as React from 'react';
import HeroSlider from '@/components/HeroSlider';
import InfoCards from '@/components/InfoCards';
import GallerySection from '@/components/GallerySection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Box from '@mui/material/Box';
import PageHeader from '@/components/PageHeader';

const heroImages = [
  '/images/camping/camping-1.jpeg',
  '/images/camping/camping-2.jpeg',
  '/images/camping/camping-3.jpeg'
];

const infoCards = [
  {
    title: 'Doğanın Kalbinde Kamp',
    image: '/images/camping/camping-1.png',
    content: (
      <>
        <b>Köprülü Kanyon&apos;un eşsiz manzarasında, yıldızlarla süslenmiş gökyüzünün altında unutulmaz bir kamp deneyimi yaşayın.</b>
      </>
    )
  },
  {
    title: 'Tam Donanımlı Kamp Alanı',
    image: '/images/camping/camping-2.png',
    content: (
      <>
        <b>Çadır, uyku tulumu, mat ve diğer tüm kamp ekipmanları dahil. Sadece gelin, gerisini biz halledelim.</b>
      </>
    )
  },
  {
    title: 'Güvenli ve Konforlu',
    image: '/images/camping/camping-3.png',
    content: (
      <>
        <b>24 saat güvenlik, temiz tuvalet ve duş imkanları, elektrik ve WiFi erişimi ile konforlu bir kamp deneyimi.</b>
      </>
    )
  }
];

const galleryImages = [
  '/images/camping/camping-1.jpeg',
  '/images/camping/camping-2.jpeg',
  '/images/camping/camping-3.jpeg'
];

const faq = [
  {
    question: 'Kamp ekipmanları dahil mi?',
    answer: 'Evet, çadır, uyku tulumu, mat ve temel kamp ekipmanları tesisimiz tarafından sağlanır.'
  },
  {
    question: 'Kendi çadırımı getirebilir miyim?',
    answer: 'Evet, kendi çadırınızı getirebilirsiniz. Kamp alanında uygun yerler tahsis edilir.'
  },
  {
    question: 'Yemek imkanı var mı?',
    answer: 'Kamp alanında barbekü imkanı ve yakınlarda restoran seçenekleri mevcuttur.'
  },
  {
    question: 'Çocuklar için uygun mu?',
    answer: 'Evet, aileler için güvenli ve uygun bir kamp alanıdır. Çocuklar için özel aktiviteler de düzenlenir.'
  },
  {
    question: 'Rezervasyon gerekli mi?',
    answer: 'Yoğun sezonlarda yerinizi garantiye almak için rezervasyon önerilir.'
  }
];

export default function CampingInfo() {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <PageHeader
        title="Doğada Kamp Macerası"
        subtitle="Köprülü Kanyon&apos;un eşsiz manzarasında, yıldızlarla süslenmiş gökyüzünün altında unutulmaz bir kamp deneyimi!"
        breadcrumbs={[
          { label: 'Hizmetler' },
          { label: 'Camping' }
        ]}
      />
      
      <HeroSlider
        images={heroImages}
        title="Doğada Kamp Macerası"
        subtitle="Köprülü Kanyon&apos;un eşsiz manzarasında, yıldızlarla süslenmiş gökyüzünün altında unutulmaz bir kamp deneyimi!"
      />
      <InfoCards title="Kamp Alanımızın Özellikleri" cards={infoCards} />
      <GallerySection title="Kamp Galerisi" images={galleryImages} />
      <FAQSection title="Sıkça Sorulan Sorular" faqs={faq} />
      <ContactSection title="Ulaşım & İletişim" />
    </Box>
  );
} 