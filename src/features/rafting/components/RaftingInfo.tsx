'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';

import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import HeroSlider from '@/components/HeroSlider';
import ContactSection from '@/components/ContactSection';
import InfoCards from '@/components/InfoCards';
import FAQSection from '@/components/FAQSection';
import PageHeader from '@/components/PageHeader';

// --- Hero Slider ---
const heroImages = [
  '/images/rafting/rafting-1.jpg',
  '/images/rafting/rafting-2.jpeg',
  '/images/rafting/rafting-3.jpeg',
  '/images/rafting/rafting-4.jpeg',
  '/images/rafting/rafting-5.jpeg',
  '/images/rafting/rafting-6.jpeg'
];

// --- Neden Biz ---
const whyImages = [
  '/images/rafting/rafting-1.png',
  '/images/rafting/rafting-2.png',
  '/images/rafting/rafting-3.png',
  '/images/rafting/rafting-4.png',
];

const whyCards = [
  {
    title: 'Eşsiz Doğal Güzellikler İçinde Macera',
    image: whyImages[0],
    content: (
      <Typography variant="body1" color="text.secondary" fontWeight={700} mb={1}>
        Selge Adventure Park, Köprülü Kanyon Milli Parkı&apos;nın kalbinde yer alan rafting deneyimi ile size unutulmaz anlar yaşatır. Toros Dağları&apos;nın muhteşem manzaraları eşliğinde, tarih ve doğanın iç içe geçtiği bu eşsiz lokasyonda adrenalin dolu bir maceraya hazır olun.
      </Typography>
    )
  },
  {
    title: 'Profesyonel Güvenlik ve Kaliteli Hizmet',
    image: whyImages[1],
    content: (
      <Typography component="ul" sx={{ m: 0, pl: 3 }}>
        <Typography component="li" variant="body1" color="text.secondary" fontWeight={700}>
          <b>Deneyimli Rehber Kadromuz:</b> Alanında uzman, sertifikalı rafting rehberlerimiz ile güvenli ve keyifli bir deneyim yaşayın. Her katılımcının güvenliği bizim önceliğimizdir.
        </Typography>
        <Typography component="li" variant="body1" color="text.secondary" fontWeight={700}>
          <b>Tam Donanım:</b> Kask, can yeleği, kürek ve diğer tüm güvenlik ekipmanları dahil. Modern ve güvenli malzemelerle donatılmış botlarımızla nehirde huzurla yolculuk yapın.
        </Typography>
        <Typography component="li" variant="body1" color="text.secondary" fontWeight={700}>
          <b>Seviye 2-3 Zorluk:</b> Hem yeni başlayanlar hem de deneyimli raftingciler için ideal zorluk seviyesi. Heyecan verici ama kontrollü bir deneyim.
        </Typography>
      </Typography>
    )
  },
  {
    title: "Köprülü Kanyon&apos;un Avantajları",
    image: whyImages[2],
    content: (
      <Typography component="ul" sx={{ m: 0, pl: 3 }}>
        <Typography component="li" variant="body1" color="text.secondary" fontWeight={700}>
          <b>Türkiye&apos;nin En Popüler Rafting Rotası:</b> 14 km&apos;lik parkur boyunca nefes kesen doğal güzellikler
        </Typography>
        <Typography component="li" variant="body1" color="text.secondary" fontWeight={700}>
          <b>Kristal Berraklığında Su:</b> Toros Dağları&apos;ndan gelen temiz ve soğuk nehir suları
        </Typography>
        <Typography component="li" variant="body1" color="text.secondary" fontWeight={700}>
          <b>Milli Park Koruması:</b> Doğal yaşamın korunduğu, bakir bir çevrede aktivite imkanı
        </Typography>
        <Typography component="li" variant="body1" color="text.secondary" fontWeight={700}>
          <b>4 Mevsim Aktivite:</b> Nisan-Kasım arası ideal rafting koşulları
        </Typography>
      </Typography>
    )
  }
];

// --- Galeri ---
const raftingImages = [
  '/images/rafting/rafting-1.jpg',
  '/images/rafting/rafting-2.jpeg',
  '/images/rafting/rafting-3.jpeg',
  '/images/rafting/rafting-4.jpeg',
  '/images/rafting/rafting-5.jpeg',
  '/images/rafting/rafting-6.jpeg',
];
function RaftingGallery() {
  const [open, setOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);
  return (
    <Box mb={6}>
      <Typography variant="h4" fontWeight={800} color="primary" textAlign="center" mb={4}>
        Raftingten Kareler
      </Typography>
      <ImageList cols={3} gap={16} sx={{ maxWidth: 900, mx: 'auto' }}>
        {raftingImages.map((src, i) => (
          <ImageListItem key={i} sx={{ cursor: 'pointer', borderRadius: 3, overflow: 'hidden' }} onClick={() => { setSelectedImg(src); setOpen(true); }}>
            <img 
              src={src} 
              alt={`Köprülü Kanyon rafting deneyimi - Profesyonel rehberler eşliğinde güvenli rafting aktivitesi ${i + 1}`} 
              loading="lazy" 
              style={{ width: '100%', height: 180, objectFit: 'cover' }} 
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth={false} PaperProps={{ sx: { bgcolor: 'black', m: 0 } }} fullWidth>
        <Box sx={{ width: '90vw', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0 }}>
          <img
            src={selectedImg || ''}
            alt="Köprülü Kanyon rafting deneyimi"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              margin: 'auto',
              borderRadius: 8,
              background: '#222',
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
}

const raftingFaqs = [
  {
    question: 'Rafting için yaş sınırı var mı?',
    answer: 'Genellikle 6 yaş ve üzeri herkes rafting yapabilir. Çocuklar için ebeveyn izni gereklidir.'
  },
  {
    question: 'Yüzme bilmek zorunlu mu?',
    answer: 'Hayır, yüzme bilmek zorunlu değildir. Tüm katılımcılara can yeleği verilmektedir.'
  },
  {
    question: 'Ne giymeliyim?',
    answer: 'Hızlı kuruyan spor kıyafetler ve suya uygun ayakkabı önerilir. Tesisimizde soyunma kabinleri ve duşlar mevcuttur.'
  },
  {
    question: 'Ekipmanları siz mi sağlıyorsunuz?',
    answer: 'Evet, tüm güvenlik ekipmanları (kask, can yeleği, kürek vb.) tesisimiz tarafından sağlanır.'
  },
  {
    question: 'Rezervasyon gerekli mi?',
    answer: 'Yoğun sezonlarda yerinizi garantiye almak için rezervasyon önerilir.'
  }
];

// --- Müşteri Yorumları ---
const testimonials = [
  {
    name: 'Ayşe K.',
    comment: 'Hayatımda yaşadığım en heyecanlı gündü!',
    avatar: '',
  },
  {
    name: 'Mehmet T.',
    comment: 'Çocuklarımızla birlikte çok eğlendik, ekip harikaydı.',
    avatar: '',
  },
  {
    name: 'Elif D.',
    comment: 'Doğa, güvenlik ve eğlence bir arada. Tavsiye ederim!',
    avatar: '',
  },
];
function RaftingTestimonials() {
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
                <Typography variant="body1" color="text.secondary" textAlign="center" fontWeight={700}>“{item.comment}”</Typography>
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
function RaftingContact() {
  return (
    <ContactSection 
      title="Ulaşım & İletişim"
      address="köprülü kanyon, Beşkonak, 07550 Manavgat/Antalya"
      phone="0538 451 65 67"
      whatsapp="0538 451 65 67"
      instagram="https://www.instagram.com/selgeadventurerafting?igsh=amlkbG5ycHB5aXk0&utm_source=qr"
      showReservationButton={true}
      reservationButtonText="Hemen Rezervasyon Yap"
    />
  );
}

// --- Ana Bileşen ---
export default function RaftingInfo() {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <PageHeader
        title="Rafting Macerası"
        subtitle="Köprülü Kanyon&apos;da unutulmaz bir rafting deneyimi yaşayın"
        breadcrumbs={[
          { label: 'Hizmetler' },
          { label: 'Rafting' }
        ]}
      />
      
      <HeroSlider
        images={heroImages}
        title="Rafting Macerası"
        subtitle="Köprülü Kanyon&apos;da unutulmaz bir rafting deneyimi yaşayın"
      />
      
      <InfoCards
        title="Neden Selge Adventure Park'ta Rafting?"
        cards={whyCards}
      />

      <RaftingGallery />
      <FAQSection
        title="Sıkça Sorulan Sorular"
        faqs={raftingFaqs}
      />
      <RaftingTestimonials />
      <RaftingContact />
    </Box>
  );
} 