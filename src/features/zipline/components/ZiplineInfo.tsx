"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HeroSlider from '@/components/HeroSlider';
import ContactSection from '@/components/ContactSection';
import InfoCards from '@/components/InfoCards';
import FAQSection from '@/components/FAQSection';
import PageHeader from '@/components/PageHeader';

// --- Hero Slider ---
const heroImages = [
  '/images/zipline/zipline-2.png',
  '/images/zipline/zipline-3.png',
];

// --- Zipline Öne Çıkanları ---
const highlightImages = [
  '/images/zipline/zipline-1.png',
  '/images/zipline/zipline-2.png',
  '/images/zipline/zipline-3.png',
  '/images/zipline/zipline-4.png',
];

const highlightCards = [
  {
    title: 'Eşsiz Manzara Deneyimi',
    image: highlightImages[0],
    content: (
      <Typography variant="body1" color="text.secondary" fontWeight={700}>
        Zipline aktivitesi sırasında kuş bakışı manzaraların tadını çıkarın. Kanyonun üzerinden geçerken eşsiz doğal güzellikleri farklı bir açıdan görme fırsatı bulacaksınız.
      </Typography>
    )
  },
  {
    title: 'Adrenalin Dolu Macera',
    image: highlightImages[1],
    content: (
      <Typography variant="body1" color="text.secondary" fontWeight={700}>
        Yüksek hızda kanyonun üzerinden geçerken adrenalin dolu anlar yaşayın. Güvenli ekipmanlar ve profesyonel rehberler eşliğinde unutulmaz bir deneyim.
      </Typography>
    )
  },
  {
    title: 'Güvenli Ekipmanlar',
    image: highlightImages[2],
    content: (
      <Typography variant="body1" color="text.secondary" fontWeight={700}>
        Tüm güvenlik standartlarına uygun, modern ve kaliteli ekipmanlar kullanıyoruz. Kask, emniyet kemeri ve diğer güvenlik donanımları dahildir.
      </Typography>
    )
  },
  {
    title: 'Her Yaşa Uygun',
    image: highlightImages[3],
    content: (
      <Typography variant="body1" color="text.secondary" fontWeight={700}>
        Zipline aktivitesi 8 yaş ve üzeri herkes için uygundur. Farklı zorluk seviyeleri ile herkesin keyif alabileceği bir deneyim sunuyoruz.
      </Typography>
    )
  }
];

function ZiplineWhatIs() {
  return (
    <Box mb={6}>
      <Typography variant="h4" fontWeight={800} color="primary" textAlign="center" mb={2}>
        Zipline Nedir?
      </Typography>
      <Typography variant="body1" color="text.secondary" fontWeight={700} textAlign="center" maxWidth={800} mx="auto">
        Zipline, yüksek bir noktadan çelik bir halat üzerinde, emniyet kemeri ve makaraya bağlı olarak, yerçekimiyle hızla aşağıya kayılan adrenalin dolu bir doğa ve macera aktivitesidir. Katılımcılar, güvenlik ekipmanlarıyla donatılır ve profesyonel rehberler eşliğinde, muhteşem manzaralar eşliğinde unutulmaz bir deneyim yaşar.
      </Typography>
    </Box>
  );
}

const advantages = [
  { text: 'Eşsiz manzara ve doğa deneyimi', icon: <LandscapeIcon sx={{ fontSize: 24, color: 'primary.main', mr: 1 }} /> },
  { text: 'Adrenalin ve eğlence bir arada', icon: <SportsEsportsIcon sx={{ fontSize: 24, color: 'primary.main', mr: 1 }} /> },
  { text: 'Güvenli ve kontrollü bir macera', icon: <SecurityIcon sx={{ fontSize: 24, color: 'primary.main', mr: 1 }} /> },
  { text: 'Profesyonel rehberler ve ekipman', icon: <GroupIcon sx={{ fontSize: 24, color: 'primary.main', mr: 1 }} /> },
  { text: 'Her yaşa uygun parkurlar', icon: <AccessibilityIcon sx={{ fontSize: 24, color: 'primary.main', mr: 1 }} /> },
  { text: 'Fotoğraf/video çekimi imkanı', icon: <CameraAltIcon sx={{ fontSize: 24, color: 'primary.main', mr: 1 }} /> },
];

function ZiplineAdvantages() {
  return (
    <Box mb={6}>
      <Typography variant="h4" fontWeight={800} color="primary" textAlign="center" mb={4}>
        Zipline Aktivitesinin Avantajları
      </Typography>
      <Card sx={{ p: 4, borderRadius: 4, boxShadow: 3, maxWidth: 800, mx: 'auto' }}>
        <Typography component="ul" sx={{ m: 0, pl: 3 }}>
          {advantages.map((adv, idx) => (
            <Typography component="li" variant="body1" color="text.secondary" fontWeight={700} key={idx} sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
              {adv.icon}
              {adv.text}
            </Typography>
          ))}
        </Typography>
      </Card>
    </Box>
  );
}

const ziplineFaqs = [
  {
    question: 'Zipline için yaş veya kilo sınırı var mı?',
    answer: 'Genellikle 8 yaş ve üzeri, 120 kg’a kadar olan misafirler katılabilir.'
  },
  {
    question: 'Zipline güvenli mi?',
    answer: 'Tüm ekipmanlarımız uluslararası standartlara uygundur ve deneyimli personelimiz tarafından kontrol edilir.'
  },
  {
    question: 'Kıyafet öneriniz nedir?',
    answer: 'Rahat, hareketi kısıtlamayan kıyafetler ve spor ayakkabı önerilir.'
  },
  {
    question: 'Fotoğraf veya video çekimi yapılabiliyor mu?',
    answer: 'Evet, profesyonel fotoğraf ve video çekim hizmetimiz mevcuttur.'
  }
];

const galleryImages = [
  '/images/zipline/zipline-gallery-1.png',
  '/images/zipline/zipline-gallery-2.png',
  '/images/zipline/zipline-gallery-3.png',
  '/images/zipline/zipline-gallery-4.png',
  '/images/zipline/zipline-gallery-5.png',
  '/images/zipline/zipline-gallery-6.png'
];

function ZiplineGallery() {
  const [open, setOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);
  return (
    <Box mb={6}>
      <Typography variant="h4" fontWeight={800} color="primary" textAlign="center" mb={4}>
        Zipline Galerisi
      </Typography>
      <ImageList cols={3} gap={16} sx={{ maxWidth: 900, mx: 'auto' }}>
        {galleryImages.map((src, i) => (
          <ImageListItem key={i} sx={{ cursor: 'pointer', borderRadius: 3, overflow: 'hidden' }} onClick={() => { setSelectedImg(src); setOpen(true); }}>
            <img 
              src={src} 
              alt={`Köprülü Kanyon zipline deneyimi - Güvenli ekipmanlarla adrenalin dolu macera ${i + 1}`} 
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
            alt="Köprülü Kanyon zipline deneyimi"
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', margin: 'auto', borderRadius: 8, background: '#222' }}
          />
        </Box>
      </Dialog>
    </Box>
  );
}

const testimonials = [
  { name: 'Ali Y.', comment: 'Hayatımda yaşadığım en heyecanlı ve eğlenceli aktiviteydi!' },
  { name: 'Zeynep K.', comment: 'Manzara harikaydı, güvenlik ve rehberlik çok iyiydi.' },
  { name: 'Mert T.', comment: 'Ailecek katıldık, herkes çok memnun kaldı.' },
];
function ZiplineTestimonials() {
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

function ZiplineContact() {
  return (
    <ContactSection 
      title="Ulaşım & İletişim"
      address="Köprülü Kanyon, Antalya"
      phone="0 (555) 555 55 55"
      whatsapp="[Buraya ikon ve link]"
      instagram="https://www.instagram.com/selgeadventurerafting?igsh=amlkbG5ycHB5aXk0&utm_source=qr"
      showReservationButton={true}
      reservationButtonText="Hemen Rezervasyon Yap"
    />
  );
}

export default function ZiplineInfo() {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <PageHeader
        title="Zipline Macerası"
        subtitle="Kanyonun üzerinden uçarak unutulmaz anlar yaşayın"
        breadcrumbs={[
          { label: 'Hizmetler' },
          { label: 'Zipline' }
        ]}
      />
      
      <HeroSlider
        images={heroImages}
        title="Zipline Macerası"
        subtitle="Kanyonun üzerinden uçarak unutulmaz anlar yaşayın"
      />
      
      <InfoCards
        title="Zipline'ın Öne Çıkanları"
        cards={highlightCards}
      />

      <FAQSection
        title="Sıkça Sorulan Sorular"
        faqs={ziplineFaqs}
      />
      <ZiplineGallery />
      <ZiplineTestimonials />
      <ZiplineContact />
    </Box>
  );
} 