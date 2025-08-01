"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PageHeader from './PageHeader';

// --- İletişim Bilgileri ---
const contactInfo = {
  phone: '0538 451 65 67',
  whatsapp: '0538 451 65 67',
  address: 'Köprülü Kanyon Milli Parkı, Antalya',
  workingHours: '08:00 - 22:00 (Her gün)',
  socialMedia: {
    instagram: 'https://www.instagram.com/selgeadventurerafting?igsh=amlkbG5ycHB5aXk0&utm_source=qr',
    facebook: 'https://facebook.com/selgeadventurepark',
    whatsapp: 'https://wa.me/905384516567'
  }
};



// --- İletişim Kartı Bileşeni ---
function ContactCard({ icon, title, content, action }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  action?: React.ReactNode;
}) {
  return (
    <Card sx={{ height: '100%', p: 3, borderRadius: 3, boxShadow: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
          {icon}
        </Avatar>
        <Typography variant="h6" fontWeight="bold" color="primary">
          {title}
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {content}
      </Typography>
      {action && (
        <Box sx={{ mt: 'auto' }}>
          {action}
        </Box>
      )}
    </Card>
  );
}



// --- Harita Bileşeni ---
function MapSection() {
  return (
    <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
      <Typography variant="h5" fontWeight={700} color="primary" mb={3}>
        Konum
      </Typography>
      
      <Box sx={{ 
        width: '100%', 
        height: 400, 
        bgcolor: 'grey.200', 
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 2
      }}>
        <Typography variant="body1" color="text.secondary">
          Google Harita burada görüntülenecek
        </Typography>
      </Box>
      
      <Typography variant="body2" color="text.secondary" textAlign="center">
        Köprülü Kanyon Milli Parkı, Antalya
      </Typography>
    </Card>
  );
}

// --- Sosyal Medya Bileşeni ---
function SocialMediaSection() {
  return (
    <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2, height: '100%' }}>
      <Typography variant="h5" fontWeight={700} color="primary" mb={3}>
        Sosyal Medyada Takip Edin
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<WhatsAppIcon />}
          href={contactInfo.socialMedia.whatsapp}
          target="_blank"
          sx={{ py: 1.5, borderRadius: 3 }}
        >
          WhatsApp
        </Button>
        
        <Button
          variant="outlined"
          startIcon={<InstagramIcon />}
          href={contactInfo.socialMedia.instagram}
          target="_blank"
          sx={{ py: 1.5, borderRadius: 3 }}
        >
          Instagram
        </Button>
        
        <Button
          variant="outlined"
          startIcon={<FacebookIcon />}
          href={contactInfo.socialMedia.facebook}
          target="_blank"
          sx={{ py: 1.5, borderRadius: 3 }}
        >
          Facebook
        </Button>
      </Box>
    </Card>
  );
}

export default function ContactPage() {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <PageHeader
        title="İletişim"
        subtitle="Selge Adventure Park ile iletişime geçin"
        breadcrumbs={[
          { label: 'İletişim' }
        ]}
      />

      {/* İletişim Bilgileri */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight={800} color="primary" textAlign="center" mb={4}>
          İletişim Bilgileri
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: 250 }}>
            <ContactCard
              icon={<PhoneIcon />}
              title="Telefon"
              content={contactInfo.phone}
              action={
                <Button
                  variant="contained"
                  color="primary"
                  href={`tel:${contactInfo.phone}`}
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Ara
                </Button>
              }
            />
          </Box>
          
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: 250 }}>
            <ContactCard
              icon={<WhatsAppIcon />}
              title="WhatsApp"
              content="Hızlı mesaj gönderin"
              action={
                <Button
                  variant="contained"
                  color="success"
                  href={contactInfo.socialMedia.whatsapp}
                  target="_blank"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  WhatsApp
                </Button>
              }
            />
          </Box>
          

          
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: 250 }}>
            <ContactCard
              icon={<AccessTimeIcon />}
              title="Çalışma Saatleri"
              content={contactInfo.workingHours}
            />
          </Box>
          
          <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: 250 }}>
            <ContactCard
              icon={<LocationOnIcon />}
              title="Adres"
              content="Köprülü Kanyon Milli Parkı, Manavgat, Antalya"
            />
          </Box>
        </Box>
      </Box>

      {/* Harita ve Sosyal Medya */}
      <Box sx={{ display: 'flex', gap: 4, mb: 6, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ flex: { md: '8 1 0%' } }}>
          <MapSection />
        </Box>
        
        <Box sx={{ flex: { md: '4 1 0%' } }}>
          <SocialMediaSection />
        </Box>
      </Box>
    </Box>
  );
} 