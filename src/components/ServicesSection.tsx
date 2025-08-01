import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const services = [
  {
    title: 'Rafting',
    image: '/images/rafting/rafting-1.jpg',
    description: 'Köprülü Kanyon’un serin sularında, profesyonel rehberler eşliğinde adrenalin dolu rafting deneyimi.',
    link: '/rafting',
  },
  {
    title: 'Zipline',
    image: '/images/zipline/zipline-1.png',
    description: 'Yüksekten süzülerek eşsiz manzaranın tadını çıkarın, heyecanı doruklarda yaşayın.',
    link: '/zipline',
  },
  {
    title: 'Buggy Safari',
    image: '/images/buggy-safari/buggy-safari-1.jpeg',
    description: 'Doğanın içinde, engebeli arazilerde buggy araçlarla macera dolu bir safari.',
    link: '/buggy-safari',
  },
  {
    title: 'Kamp',
    image: '/images/camping/camping-1.jpeg',
    description: 'Doğayla iç içe, yıldızların altında huzurlu bir kamp deneyimi.',
    link: '/camping',
  },
  {
    title: 'Kahvaltı & Restaurant',
    image: '/images/restaurant-hero.jpg',
    description: 'Doğal ortamda, taze ve lezzetli ürünlerle zengin kahvaltı ve yemek keyfi.',
    link: '/restaurant',
  },
  {
    title: 'Köprülü Kanyon Bot Turu',
    image: '/images/koprulu-kanyon-bot-turu/koprulu-kanyon-bot-tur-1.png',
    description: 'Köprülü Kanyon’un eşsiz manzarasında bot turları ile doğayı keşfedin, serin suların keyfini çıkarın.',
    link: '/koprulu-kanyon-bot-turu',
  },
];

export default function ServicesSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" fontWeight={700} mb={6} color="primary">
        Hizmetlerimiz & Aktivitelerimiz
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, idx) => (
          <Grid sx={{xs:12, sm:6, md:4}} key={idx}>
            <Link href={service.link} style={{ textDecoration: 'none' }} passHref>
              <Card
                sx={{
                  width: '100%',
                  maxWidth: 350,
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  height: 'auto',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                  boxShadow: 2,
                  '&:hover': {
                    boxShadow: 8,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 360, objectFit: 'cover' }}
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom color="text.primary">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 