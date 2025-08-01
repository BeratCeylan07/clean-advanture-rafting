'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import HeroSlider from '@/components/HeroSlider';
import ContactSection from '@/components/ContactSection';
import InfoCards from '@/components/InfoCards';
import FAQSection from '@/components/FAQSection';
import PageHeader from '@/components/PageHeader';
import GallerySection from '@/components/GallerySection';
import { useRouter } from 'next/navigation';

// --- Hero Slider ---
const heroImages = [
  '/images/restuarant/restuarant-1.jpeg',
  '/images/restuarant/restuarant-2.png',
  '/images/restuarant/restuarant-3.png',
];

// --- Neden Biz ---
const whyImages = [
  '/images/restuarant/restuarant-1.png',
  '/images/restuarant/restuarant-2.png'
];

const whyCards = [
  {
    title: 'Taze Malzemeler ve Geleneksel Lezzetler',
    image: whyImages[0],
    content: (
      <Typography variant="body1" color="text.secondary" fontWeight={700} mb={1}>
        Selge Restaurant, Köprülü Kanyon&apos;un kalbinde yer alan eşsiz lezzet deneyimi ile size unutulmaz anlar yaşatır. Günlük taze malzemelerle hazırlanan yemekler, yöresel tariflerle harmanlanarak modern mutfak sanatının en güzel örneklerini sunar.
      </Typography>
    )
  },
  {
    title: 'Profesyonel Şef ve Kaliteli Hizmet',
    image: whyImages[1],
    content: (
      <Typography component="ul" sx={{ m: 0, pl: 3 }}>
        <Typography component="li" variant="body1" color="text.secondary" fontWeight={700}>
          <b>Deneyimli Şef Kadromuz:</b> Alanında uzman, yöresel mutfak kültürünü bilen şeflerimiz ile lezzetli ve kaliteli yemekler hazırlanır. Her yemeğin özenle hazırlanması bizim önceliğimizdir.
        </Typography>
        <Typography component="li" variant="body1" color="text.secondary" fontWeight={700}>
          <b>Taze Malzemeler:</b> Günlük taze malzemelerle hazırlanan yemekler. Yerel üreticilerden temin edilen organik ürünler kullanılır.
        </Typography>
        <Typography component="li" variant="body1" color="text.secondary" fontWeight={700}>
          <b>Geleneksel Tarifler:</b> Yöresel mutfak kültürünü koruyarak hazırlanan otantik lezzetler. Modern sunum teknikleriyle harmanlanmış klasik tarifler.
        </Typography>
      </Typography>
    )
  },

];

// --- Menü Kategorileri ---
const menuCategories = [
  {
    title: 'Tavuk Şiş',
    description: 'Özel marine edilmiş tavuk eti, taze sebzelerle birlikte şişte pişirilir',
    image: '/images/restuarant/restuarant-1.jpeg',
    features: ['Taze marine edilmiş', 'Özel baharat karışımı', 'Yanında pilav ve salata'],
    icon: <LocalDiningIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Asma Yaprağına Sarılı Alabalık',
    description: 'Taze alabalık, asma yaprağına sarılarak özel sosla pişirilir',
    image: '/images/restuarant/balik-3.jpeg',
    features: ['Taze alabalık', 'Asma yaprağı', 'Özel sos', 'Limon dilimi'],
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Et Çeşitleri',
    description: 'Kuzu pirzola, dana antrikot ve karışık ızgara seçenekleri',
    image: '/images/restuarant/etcesitleri.png',
    features: ['Kuzu pirzola', 'Dana antrikot', 'Karışık ızgara', 'Özel soslar'],
    icon: <LocalDiningIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Kahvaltı',
    description: 'Geleneksel Türk kahvaltısı ve açık büfe seçenekleri',
    image: '/images/restuarant/kahvalti.png',
    features: ['Zeytin, peynir çeşitleri', 'Bal, kaymak', 'Taze yumurta', 'Çay servisi'],
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />
  }
];

// --- Menü Kartı Bileşeni ---
function MenuCard({ item }: { item: typeof menuCategories[0] }) {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt={`Selge Restaurant ${item.title} - Köprülü Kanyon&apos;da geleneksel lezzetler`}
        sx={{ objectFit: 'cover', height: 300 }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{ color: 'primary.main', mr: 2 }}>
            {item.icon}
          </Box>
          <Typography variant="h5" component="h3" fontWeight="bold" color="primary">
            {item.title}
          </Typography>
        </Box>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2, minHeight: '3em' }}>
          {item.description}
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          {item.features.map((feature, index) => (
            <Chip
              key={index}
              label={feature}
              size="small"
              variant="outlined"
              sx={{ mr: 1, mb: 1, fontSize: '0.75rem' }}
            />
          ))}
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
      </CardContent>
    </Card>
  );
}

// --- Menü Section Bileşeni ---
function RestaurantMenu() {
  return (
    <Box mb={6}>
      <Typography variant="h4" fontWeight={800} color="primary" textAlign="center" mb={4}>
        Özel Menümüz
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
        Köprülü Kanyon&apos;un taze malzemeleriyle hazırlanan geleneksel lezzetlerimizi keşfedin. 
        Her yemek, deneyimli şeflerimiz tarafından özenle hazırlanır ve doğa manzarası eşliğinde sunulur.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        {menuCategories.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' },
              minWidth: { xs: 260, sm: 300, md: 260 },
              maxWidth: 340,
              display: 'flex',
            }}
          >
            <MenuCard item={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// --- Kategoriye Göre Galeri Görselleri ---
const fishImages = [
  '/images/restuarant/balik-1.jpeg',
  '/images/restuarant/balik-2.jpeg',
  '/images/restuarant/balik-3.jpeg',
  '/images/restuarant/balik-5.jpeg',
  '/images/restuarant/balik-6.jpeg',
];

const generalImages = [
  '/images/restuarant/restuarant-1.jpeg',
  '/images/restuarant/restuarant-1.png',
  '/images/restuarant/restuarant-2.png',
  '/images/restuarant/restuarant-3.png',
];

// --- SSS ---
const restaurantFaqs = [
  {
    question: 'Restaurant hangi saatlerde açık?',
    answer: 'Restaurantımız hafta içi ve hafta sonu 08:00-22:00 saatleri arasında hizmet vermektedir.'
  },
  {
    question: 'Rezervasyon gerekli mi?',
    answer: 'Yoğun sezonlarda yerinizi garantiye almak için rezervasyon önerilir.'
  },
  {
    question: 'Özel menü seçenekleri var mı?',
    answer: 'Evet, vejetaryen, vegan ve özel diyet gereksinimleri için menü seçeneklerimiz mevcuttur.'
  },
  {
    question: 'Kahvaltı servisi var mı?',
    answer: 'Evet, geleneksel Türk kahvaltısı ve açık büfe seçeneklerimiz mevcuttur.'
  },
  {
    question: 'Alkol servisi yapılıyor mu?',
    answer: 'Evet, yerel ve uluslararası alkollü içecek seçeneklerimiz mevcuttur.'
  },
  {
    question: 'Özel etkinlikler için rezervasyon yapılabilir mi?',
    answer: 'Evet, doğum günü, evlilik teklifi gibi özel etkinlikler için özel düzenlemeler yapabiliriz.'
  }
];

// --- Müşteri Yorumları ---
const testimonials = [
  {
    name: 'Ayşe K.',
    comment: 'Yemekler harikaydı, manzara da muhteşemdi!',
    avatar: '',
  },
  {
    name: 'Mehmet T.',
    comment: 'Geleneksel lezzetleri modern sunumla harmanlamışlar, çok beğendik.',
    avatar: '',
  },
  {
    name: 'Elif D.',
    comment: 'Doğa manzarası eşliğinde yemek yemek gerçekten unutulmaz bir deneyimdi.',
    avatar: '',
  },
];

function RestaurantTestimonials() {
  return (
    <Box mb={6}>
      <Typography variant="h4" fontWeight={800} color="primary" textAlign="center" mb={4}>
        Müşteri Yorumları
      </Typography>
      <Card sx={{ p: 4, borderRadius: 4, boxShadow: 3, maxWidth: 1100, mx: 'auto' }}>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((item, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
              <Card sx={{ p: 3, borderRadius: 4, boxShadow: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ width: 56, height: 56, mb: 1, bgcolor: 'primary.main' }}>
                  <PersonIcon sx={{ fontSize: 36, color: '#fff' }} />
                </Avatar>
                <Typography variant="body1" color="text.secondary" textAlign="center" fontWeight={700}>&quot;{item.comment}&quot;</Typography>
                <Typography variant="subtitle2" color="primary" fontWeight={700}>{item.name}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}

// --- İletişim ve Rezervasyon ---
function RestaurantContact() {
  const router = useRouter();
  return (
    <ContactSection 
      title="Ulaşım & İletişim"
      address="köprülü kanyon, Beşkonak, 07550 Manavgat/Antalya"
      phone="0538 451 65 67"
      whatsapp="0538 451 65 67"
      instagram="https://www.instagram.com/selgeadventurerafting?igsh=amlkbG5ycHB5aXk0&utm_source=qr"
      showReservationButton={true}
      reservationButtonText="Rezervasyon Yap"
      onReservationClick={() => router.push('/iletisim')}
    />
  );
}

// --- Ana Bileşen ---
export default function RestaurantInfo() {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <PageHeader
        title="Selge Restaurant"
        subtitle="Köprülü Kanyon&apos;da geleneksel lezzetler ve modern mutfak sanatının buluştuğu nokta"
        breadcrumbs={[
          { label: 'Hizmetler' },
          { label: 'Restaurant' }
        ]}
      />
      
      <HeroSlider
        images={heroImages}
        title="Selge Restaurant"
        subtitle="Köprülü Kanyon&apos;da geleneksel lezzetler ve modern mutfak sanatının buluştuğu nokta"
      />
      
      <InfoCards
        title="Neden Selge Restaurant?"
        cards={whyCards}
      />

      {/* Kategoriye özel sliderlar */}
      <GallerySection title="Balıklar" images={fishImages} />
      <GallerySection title="Genel Restoran" images={generalImages} />
      {/* RestaurantGallery kaldırıldı */}
      <RestaurantMenu />
      <FAQSection
        title="Sıkça Sorulan Sorular"
        faqs={restaurantFaqs}
      />
      <RestaurantTestimonials />
      <RestaurantContact />
    </Box>
  );
} 