'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import KayakingIcon from '@mui/icons-material/Kayaking';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const packages = [
  {
    title: 'Rafting + Yemek',
    description: 'Klasik rafting deneyimi ve lezzetli yemek keyfi.',
    image: '/images/rafting/rafting-1.jpg',
  },
  {
    title: 'Rafting + Yemek + Kanyon Bot Turu',
    description: 'Rafting ve yemek yanında, kanyonun serin sularında bot turu.',
    image: '/images/koprulu-kanyon-bot-turu/koprulu-kanyon-bot-tur-1.png',
  },
  {
    title: 'Rafting + Yemek + Buggy + Zipline',
    description: 'Adrenalin dolu bir gün: rafting, buggy safari, zipline ve yemek.',
    image: '/images/buggy-safari/buggy-safari-1.jpeg',
  },
  {
    title: 'Kamp + Rafting + Yemek',
    description: 'Akşamdan kamp, sabah rafting ve nefis yemeklerle dolu bir macera.',
    image: '/images/camping/camping-1.jpeg',
  },
];

const flow = [
  { icon: <EmojiPeopleIcon color="primary" />, label: 'Geliş & Çadır Kurulumu' },
  { icon: <LocalBarIcon color="secondary" />, label: 'Parti / DJ / Organizasyon' },
  { icon: <NightShelterIcon color="info" />, label: 'Gece Konaklama (Çadır)' },
  { icon: <FreeBreakfastIcon color="warning" />, label: 'Sabah Kahvaltısı' },
  { icon: <KayakingIcon color="primary" />, label: 'Rafting Etkinliği' },
  { icon: <RestaurantIcon color="success" />, label: 'Öğle Yemeği' },
  { icon: <EmojiPeopleIcon color="primary" />, label: 'Uğurlama' },
];

export default function GroupEventsInfo() {
  return (
    <Box sx={{ py: 8, background: '#f7f7f7' }}>
      <Typography variant="h3" align="center" fontWeight={800} mb={2} color="primary">
        Grup Etkinlikleri
      </Typography>
      <Typography align="center" color="text.secondary" mb={5} maxWidth={700} mx="auto">
        Arkadaş grubunuz, şirketiniz veya topluluğunuz için unutulmaz bir macera! Akşamdan kamp, eğlence, DJ veya parti organizasyonu, sabah rafting ve lezzetli yemeklerle dolu özel grup paketlerimizle doğanın tadını çıkarın.
      </Typography>
      <Grid container spacing={4} justifyContent="center" mb={6}>
        {packages.map((p, idx) => (
          <Grid sx={{ xs:12, sm:6, md:3 }} key={idx}>
            <Card sx={{ height: '100%', boxShadow: 2, display: 'flex', flexDirection: 'column' }}>
              {p.image && (
                <img src={p.image} alt={p.title} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
              )}
              <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom color="primary">
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box maxWidth={900} mx="auto" mb={6}>
        <Typography variant="h6" fontWeight={700} mb={2} color="primary" align="center">
          Etkinlik Akışı
        </Typography>
        <Timeline position="alternate">
          {flow.map((step, idx) => (
            <TimelineItem key={idx}>
              <TimelineSeparator>
                <TimelineDot>
                  {step.icon}
                </TimelineDot>
                {idx < flow.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body1" fontWeight={600} color="text.primary">
                  {step.label}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
      <Box textAlign="center">
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          onClick={() => window.open('https://wa.me/905384516567?text=Merhaba! Grup etkinliği için teklif almak istiyorum.', '_blank')}
        >
          Grup Teklifi Al / İletişime Geç
        </Button>
      </Box>
    </Box>
  );
} 