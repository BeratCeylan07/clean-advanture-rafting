"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import TerrainIcon from '@mui/icons-material/Terrain';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import CableIcon from '@mui/icons-material/Cable';
import HeroSlider from '@/components/HeroSlider';
import ContactSection from '@/components/ContactSection';
import InfoCards from '@/components/InfoCards';
import FAQSection from '@/components/FAQSection';
import PageHeader from '@/components/PageHeader';

// --- Hero Slider ---
const heroImages = [
  '/images/tazi-kanyon/tazi-kanyon-1.jpeg',
  '/images/tazi-kanyon/tazi-kanyon-2.jpeg',
  '/images/tazi-kanyon/tazi-kanyon-3.jpeg',
  '/images/tazi-kanyon/tazi-kanyon-9.png',

];

// --- Tazı Kanyon Öne Çıkanları ---
const highlightImages = [
  '/images/tazi-kanyon/tazi-kanyon-5.png',
  '/images/tazi-kanyon/tazi-kanyon-6.png',
  '/images/tazi-kanyon/tazi-kanyon-7.png',
  '/images/tazi-kanyon/tazi-kanyon-4.png',
];

const highlightCards = [
  {
    title: 'Eşsiz Doğal Güzellikler',
    image: highlightImages[0],
    content: (
      <Typography variant="body1" color="text.secondary" fontWeight={700}>
        Tazı Kanyon, Türkiye&apos;nin en etkileyici doğal oluşumlarından biri olarak, ziyaretçilerine benzersiz manzaralar ve macera dolu aktiviteler sunar. Kanyonun derinliklerinde gizli kalmış güzellikleri keşfedin.
      </Typography>
    )
  },
  {
    title: 'Macera Dolu Aktiviteler',
    image: highlightImages[1],
    content: (
      <Typography variant="body1" color="text.secondary" fontWeight={700}>
        Tazı Kanyon&apos;da rafting, zipline, kanyoning ve doğa yürüyüşü gibi çeşitli macera aktiviteleri ile adrenalin dolu anlar yaşayın. Her seviyeye uygun aktiviteler mevcuttur.
      </Typography>
    )
  },
  {
    title: 'Profesyonel Rehberlik',
    image: highlightImages[2],
    content: (
      <Typography variant="body1" color="text.secondary" fontWeight={700}>
        Deneyimli ve sertifikalı rehberlerimiz eşliğinde güvenli bir şekilde kanyonun gizemli dünyasını keşfedin. Tüm güvenlik önlemleri alınmıştır.
      </Typography>
    )
  },
  {
    title: 'Doğal Yaşam Alanı',
    image: highlightImages[3],
    content: (
      <Typography variant="body1" color="text.secondary" fontWeight={700}>
        Kanyon, zengin flora ve faunası ile doğa tutkunları için ideal bir ortam sunar. Nadir bitki türleri ve yaban hayatı gözlemleme fırsatı bulacaksınız.
      </Typography>
    )
  }
];

const taziKanyonFaqs = [
  {
    question: 'Tazı Kanyon’a nasıl ulaşabilirim?',
    answer: 'Antalya ve çevresinden transfer hizmetimiz mevcuttur. Kendi aracınızla da kolayca ulaşabilirsiniz.'
  },
  {
    question: 'Kanyonda hangi aktiviteler yapılabilir?',
    answer: 'Rafting, zipline, doğa yürüyüşü, kamp ve fotoğrafçılık gibi birçok aktivite sunulmaktadır.'
  },
  {
    question: 'Kanyon gezisi için özel ekipman gerekli mi?',
    answer: 'Temel güvenlik ekipmanları tesisimiz tarafından sağlanır. Rahat kıyafet ve spor ayakkabı önerilir.'
  },
  {
    question: 'Çocuklar katılabilir mi?',
    answer: 'Çocuklar için uygun parkurlar ve aktiviteler bulunmaktadır. Ebeveyn gözetimi gereklidir.'
  }
];


export default function TaziKanyonInfo() {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <PageHeader
        title="Tazı Kanyon Macerası"
        subtitle="Doğanın gizemli dünyasını keşfedin"
        breadcrumbs={[
          { label: 'Hizmetler' },
          { label: 'Tazı Kanyon' }
        ]}
      />
      
      <HeroSlider
        images={heroImages}
        title="Tazı Kanyon Macerası"
        subtitle="Doğanın gizemli dünyasını keşfedin"
      />
      
      <InfoCards
        title="Tazı Kanyon&apos;un Öne Çıkanları"
        cards={highlightCards}
      />
      <FAQSection
        title="Sıkça Sorulan Sorular"
        faqs={taziKanyonFaqs}
      />
    </Box>
  );
} 