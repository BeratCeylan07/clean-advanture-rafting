'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

interface InfoCard {
  title: string;
  image: string;
  content: React.ReactNode;
}

interface InfoCardsProps {
  title: string;
  subtitle?: string;
  cards: InfoCard[];
}

export default function InfoCards({ title, subtitle, cards }: InfoCardsProps) {
  return (
    <Box mb={6}>
      <Typography variant="h4" fontWeight={800} color="primary" textAlign="center" mb={2}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h6" color="text.secondary" textAlign="center" mb={4} fontWeight={700}>
          {subtitle}
        </Typography>
      )}
      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, idx) => (
          <Grid key={idx} size={{ xs: 12, md: 6 }}>
            <Card sx={{ p: 0, borderRadius: 4, boxShadow: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={card.image}
                alt={card.title}
                sx={{
                  height: 450,
                  objectFit: 'cover',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  boxShadow: 6,
                  transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                  transform: 'scale(1)',
                  '&:hover': {
                    transform: 'scale(1.04)',
                    zIndex: 2,
                  },
                }}
              />
              <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" fontWeight={800} color="primary" mb={1}>
                  {card.title}
                </Typography>
                {card.content}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 