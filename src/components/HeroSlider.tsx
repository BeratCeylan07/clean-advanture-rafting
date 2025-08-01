'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface HeroSliderProps {
  images: string[];
  title: string;
  subtitle: string;
  autoPlayInterval?: number;
}

export default function HeroSlider({ 
  images, 
  title, 
  subtitle, 
  autoPlayInterval = 3500 
}: HeroSliderProps) {
  const [index, setIndex] = React.useState(0);
  const total = images.length;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [total, autoPlayInterval]);

  return (
    <Box sx={{
      width: '100%',
      minHeight: { xs: 220, md: 340 },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #E3F2FD 0%, #B6E388 100%)',
      borderRadius: 6,
      mb: 6,
      p: { xs: 1, md: 4 },
      boxShadow: 4,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Box sx={{ position: 'relative', width: '100%', maxWidth: 1400, height: { xs: 400, md: 600 }, mb: 3, borderRadius: 4, overflow: 'hidden', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Hero ${i + 1}`}
            fill
            style={{
              objectFit: 'cover',
              opacity: i === index ? 1 : 0,
              transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)',
              zIndex: i === index ? 1 : 0,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        ))}
        <Box sx={{ position: 'absolute', bottom: 8, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 1 }}>
          {images.map((_, i) => (
            <Box key={i} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: i === index ? 'primary.main' : 'grey.400', opacity: 0.8 }} />
          ))}
        </Box>
      </Box>
      <Typography variant="h2" fontWeight={900} color="primary" textAlign="center" mb={2}>
        {title}
      </Typography>
      <Typography variant="h5" color="text.secondary" textAlign="center" maxWidth={600} fontWeight={700}>
        {subtitle}
      </Typography>
    </Box>
  );
} 