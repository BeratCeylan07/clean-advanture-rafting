'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Instagram, WhatsApp } from '@mui/icons-material';

interface ContactSectionProps {
  title?: string;
  address?: string;
  phone?: string;
  whatsapp?: string;
  instagram?: string;
  showReservationButton?: boolean;
  reservationButtonText?: string;
  onReservationClick?: () => void;
}

export default function ContactSection({
  title = "Ulaşım & İletişim",
  address = "köprülü kanyon, Beşkonak, 07550 Manavgat/Antalya",
  phone = "0538 451 65 67",
  whatsapp = "0538 451 65 67",
  instagram = "https://www.instagram.com/selgeadventurerafting?igsh=amlkbG5ycHB5aXk0&utm_source=qr",
  showReservationButton = true,
  reservationButtonText = "Hemen Rezervasyon Yap",
  onReservationClick
}: ContactSectionProps) {
  return (
    <Box mb={6}>
      <Typography variant="h4" fontWeight={800} color="primary" textAlign="center" mb={4}>
        {title}
      </Typography>
      <Card sx={{ p: 4, borderRadius: 4, boxShadow: 3, maxWidth: 1100, mx: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          <Box>
            <Typography fontWeight={700} mb={1}>Adres:</Typography>
            <Typography color="text.secondary" mb={2} fontWeight={700}>{address}</Typography>
            <Typography fontWeight={700} mb={1}>Telefon:</Typography>
            <Typography color="text.secondary" mb={2} fontWeight={700}>{phone}</Typography>
            <Typography fontWeight={700} mb={1}>WhatsApp:</Typography>
            <Typography color="text.secondary" mb={2} fontWeight={700}><WhatsApp /> {whatsapp}</Typography>
            <Typography fontWeight={700} mb={1}>Instagram:</Typography>
            <Typography 
              color="text.secondary" 
              mb={2} 
              fontWeight={700}
              sx={{ 
                cursor: 'pointer', 
                textDecoration: 'underline',
                '&:hover': { color: 'primary.main' }
              }}
              onClick={() => window.open(instagram, '_blank')}
            >
              <Instagram /> Instagram
            </Typography>
          </Box>
          <Box sx={{ width: '100%', maxWidth: 600, height: 450, borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203383.88846332702!2d30.935047075093753!3d37.20323972259714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3593458bc0a2b%3A0xcd64ea3414af90c4!2zS8O2cHLDvGzDvCBLYW55b24gTWlsbGkgUGFya8Sx!5e0!3m2!1str!2str!4v1753465888420!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Köprülü Kanyon Milli Parkı Harita"
            />
          </Box>
        </Box>
      </Card>
      {showReservationButton && (
        <Box mt={4} textAlign="center">
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            sx={{ fontWeight: 900, fontSize: '1.2rem', px: 4, py: 1.5, borderRadius: 3 }}
            onClick={onReservationClick || (() => window.open('https://wa.me/905384516567?text=Merhaba! Rezervasyon yapmak istiyorum.', '_blank'))}
          >
            {reservationButtonText}
          </Button>
        </Box>
      )}
    </Box>
  );
} 