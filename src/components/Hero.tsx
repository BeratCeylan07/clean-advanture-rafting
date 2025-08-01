'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Hero() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        backgroundImage: 'url(/images/rafting-hero.jpg)',
        // SEO için background image alt text eklenemez, ancak CSS ile optimize edilmiş
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        py: 10,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2, textShadow: '0 2px 8px #0008' }}>
        Maceraya Hazır mısın?
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, textShadow: '0 2px 8px #0008' }}>
        Türkiye&apos;nin en heyecanlı rafting turları ile doğanın kalbinde unutulmaz bir deneyim seni bekliyor!
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        sx={{ fontWeight: 700, px: 4, py: 1.5 }}
        onClick={() => window.open('https://wa.me/905384516567?text=Merhaba! Rezervasyon yapmak istiyorum.', '_blank')}
      >
        Hemen Rezervasyon Yap
      </Button>
    </Box>
  );
}   