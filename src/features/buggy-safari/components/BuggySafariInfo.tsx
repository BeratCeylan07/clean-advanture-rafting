import * as React from 'react';
import HeroSlider from '@/components/HeroSlider';
import InfoCards from '@/components/InfoCards';
import GallerySection from '@/components/GallerySection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Box from '@mui/material/Box';
import PageHeader from '@/components/PageHeader';

const heroImages = [
  '/images/buggy-safari/buggy-safari-1.jpeg',
  '/images/buggy-safari/buggy-safari-2.jpeg',
  '/images/buggy-safari/buggy-safari-3.jpeg',
  '/images/buggy-safari/buggy-safari-4.jpeg',
  '/images/buggy-safari/buggy-safari-5.jpeg',
  '/images/buggy-safari/buggy-safari-6.jpeg',
  '/images/buggy-safari/buggy-safari-7.jpeg',
  '/images/buggy-safari/buggy-safari-8.jpeg',
];

const infoCards = [
  {
    title: 'Doğada Sürüş Keyfi',
    image: '/images/buggy-safari/buggy-safari-1.png',
    content: (
      <>
        <b>Engebeli arazilerde, çamur ve su geçişlerinde adrenalin dolu bir sürüş deneyimi sizi bekliyor.</b>
      </>
    )
  },
  {
    title: 'Güvenlik ve Rehberlik',
    image: '/images/buggy-safari/buggy-safari-2.png',
    content: (
      <>
        <b>Profesyonel rehberler eşliğinde, tam donanımlı ve bakımlı araçlarla güvenli bir safari.</b>
      </>
    )
  },
  {
    title: 'Her Yaşa Uygun Macera',
    image: '/images/buggy-safari/buggy-safari-3.png',
    content: (
      <>
        <b>Çocuklar ve yetişkinler için uygun parkurlar, ailece unutulmaz anılar biriktirin.</b>
      </>
    )
  }
];

const galleryImages = [
  '/images/buggy-safari/buggy-safari-1.jpeg',
  '/images/buggy-safari/buggy-safari-2.jpeg',
  '/images/buggy-safari/buggy-safari-3.jpeg',
  '/images/buggy-safari/buggy-safari-4.jpeg',
  '/images/buggy-safari/buggy-safari-5.jpeg',
  '/images/buggy-safari/buggy-safari-6.jpeg',
  '/images/buggy-safari/buggy-safari-7.jpeg',
  '/images/buggy-safari/buggy-safari-8.jpeg',
];

const faq = [
  {
    question: 'Buggy safari için ehliyet gerekli mi?',
    answer: 'Hayır, buggy safari için ehliyet zorunlu değildir. Kısa bir eğitim sonrası herkes kullanabilir.'
  },
  {
    question: 'Yaş sınırı var mı?',
    answer: 'Genellikle 16 yaş ve üzeri herkes buggy safariye katılabilir. 18 yaş altı için ebeveyn izni gereklidir.'
  },
  {
    question: 'Ne giymeliyim?',
    answer: 'Rahat, toza ve çamura uygun kıyafetler ile spor ayakkabı önerilir. Gözlük ve maske tesisimizden temin edilebilir.'
  },
  {
    question: 'Yanıma ne almalıyım?',
    answer: 'Güneş kremi, su ve yedek kıyafet almanız tavsiye edilir.'
  }
];

export default function BuggySafariInfo() {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <PageHeader
        title="Buggy Safari Macerası"
        subtitle="Doğanın kalbinde, engebeli arazilerde unutulmaz bir sürüş deneyimi!"
        breadcrumbs={[
          { label: 'Hizmetler' },
          { label: 'Buggy Safari' }
        ]}
      />
      
      <HeroSlider
        images={heroImages}
        title="Buggy Safari Macerası"
        subtitle="Doğanın kalbinde, engebeli arazilerde unutulmaz bir sürüş deneyimi!"
      />
      <InfoCards title="Buggy Safari'nin Öne Çıkanları" cards={infoCards} />
      <GallerySection title="Buggy Safari Galerisi" images={galleryImages} />
      <FAQSection title="Sıkça Sorulan Sorular" faqs={faq} />
      <ContactSection title="Ulaşım & İletişim" />
    </Box>
  );
} 