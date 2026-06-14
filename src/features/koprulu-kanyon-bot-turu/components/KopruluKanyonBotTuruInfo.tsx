import * as React from 'react';
import HeroSlider from '@/components/HeroSlider';
import InfoCards from '@/components/InfoCards';
import GallerySection from '@/components/GallerySection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Box from '@mui/material/Box';
import PageHeader from '@/components/PageHeader';

const heroImages = [
  '/images/koprulu-kanyon-bot-turu/tur-1.jpeg',
  '/images/koprulu-kanyon-bot-turu/tur-2.jpeg',
  '/images/koprulu-kanyon-bot-turu/tur-3.jpeg',
  '/images/koprulu-kanyon-bot-turu/tur-4.jpeg',
  '/images/koprulu-kanyon-bot-turu/tur-5.jpeg',
];

const infoCards = [
  {
    title: 'Kanyonun Derinliklerinde Yolculuk',
    image: '/images/koprulu-kanyon-bot-turu/koprulu-kanyon-bot-tur-1.jpeg',
    content: (
      <>
        <b>Köprülü Kanyon&apos;un muhteşem manzaraları eşliğinde, sakin sularında unutulmaz bir bot turu deneyimi yaşayın.</b>
      </>
    )
  },
  {
    title: 'Tarihi Köprüler ve Antik Kalıntılar',
    image: '/images/koprulu-kanyon-bot-turu/koprulu-kanyon-bot-tur-2.jpeg',
    content: (
      <>
        <b>2200 yıllık Selge Antik Kenti&apos;nin yanı başında, Roma döneminden kalma köprüler ve su kemerleri arasından geçin.</b>
      </>
    )
  },
  {
    title: 'Güvenli ve Konforlu Botlar',
    image: '/images/koprulu-kanyon-bot-turu/koprulu-kanyon-bot-tur-3.jpeg',
    content: (
      <>
        <b>Modern ve güvenli botlarımızla, deneyimli kaptanlar eşliğinde huzurlu bir kanyon turu yapın.</b>
      </>
    )
  }
];

const galleryImages = [
  '/images/koprulu-kanyon-bot-turu/tur-1.jpeg',
  '/images/koprulu-kanyon-bot-turu/tur-2.jpeg',
  '/images/koprulu-kanyon-bot-turu/tur-3.jpeg',
  '/images/koprulu-kanyon-bot-turu/tur-4.jpeg',
  '/images/koprulu-kanyon-bot-turu/tur-5.jpeg',
];

const faq = [
  {
    question: 'Bot turu ne kadar sürüyor?',
    answer: 'Standart bot turumuz yaklaşık 1,5 saat sürmektedir. Özel turlar için süre değişebilir.'
  },
  {
    question: 'Yaş sınırı var mı?',
    answer: 'Her yaştan misafirimiz bot turuna katılabilir. Çocuklar için can yeleği sağlanır.'
  },
  {
    question: 'Ne giymeliyim?',
    answer: 'Rahat kıyafetler ve suya uygun ayakkabı önerilir. Güneş kremi ve şapka almanızı tavsiye ederiz.'
  },
  {
    question: 'Yemek imkanı var mı?',
    answer: 'Bot turu sırasında hafif atıştırmalıklar ve içecekler sunulur. Özel yemekli turlar da mevcuttur.'
  },
  {
    question: 'Hava durumu etkiler mi?',
    answer: 'Kötü hava koşullarında turlar güvenlik nedeniyle ertelenebilir. Rezervasyon öncesi hava durumu kontrol edilir.'
  }
];

export default function KopruluKanyonBotTuruInfo() {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <PageHeader
        title="Köprülü Kanyon Bot Turu"
        subtitle="Kanyonun sakin sularında, tarihi köprüler ve antik kalıntılar arasında unutulmaz bir yolculuk!"
        breadcrumbs={[
          { label: 'Hizmetler' },
          { label: 'Köprülü Kanyon Bot Turu' }
        ]}
      />
      
      <HeroSlider
        images={heroImages}
        title="Köprülü Kanyon Bot Turu"
        subtitle="Kanyonun sakin sularında, tarihi köprüler ve antik kalıntılar arasında unutulmaz bir yolculuk!"
      />
      <InfoCards title="Bot Turumuzun Özellikleri" cards={infoCards} />
      <GallerySection title="Bot Turu Galerisi" images={galleryImages} />
      <FAQSection title="Sıkça Sorulan Sorular" faqs={faq} />
      <ContactSection title="Ulaşım & İletişim" />
    </Box>
  );
} 