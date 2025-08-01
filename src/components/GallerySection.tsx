'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';

export type GallerySectionProps = {
  title?: string;
  images?: string[];
};

const defaultImages = [
  '/images/Mekan/1.jpeg',
  '/images/Mekan/2.jpeg',
  '/images/Mekan/3.jpeg',
  '/images/Mekan/4.jpeg',
  '/images/Mekan/6.jpeg',
  '/images/Mekan/7.jpeg',
  '/images/Mekan/8.jpeg',
  '/images/Mekan/9.jpeg',
  '/images/Mekan/10.jpeg',
  '/images/Mekan/11.jpeg',
];

export default function GallerySection({ title = 'Mekanımızdan Kareler', images = defaultImages }: GallerySectionProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);

  const handleOpen = (src: string) => {
    setSelectedImg(src);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" fontWeight={700} mb={2} color="primary">
        {title}
      </Typography>
      <Typography align="center" color="text.secondary" mb={5} maxWidth={700} mx="auto">
        Selge Adventure Park, Köprülü Kanyon’un eşsiz doğasında, yemyeşil ağaçlar ve serin sular eşliğinde unutulmaz bir macera ve huzur sunar. Doğayla iç içe, ferah ve güvenli ortamımızda hem eğlenceyi hem de dinlenmeyi bir arada yaşayabilirsiniz.
      </Typography>
      <ImageList cols={3} gap={16} sx={{ maxWidth: 1100, mx: 'auto' }}>
        {images.map((src, i) => (
          <ImageListItem key={i} sx={{ cursor: 'pointer', borderRadius: 3, overflow: 'hidden' }} onClick={() => handleOpen(src)}>
            <img src={src} alt={`${title} ${i + 1}`} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {selectedImg && (
          <Box sx={{ width: '100%', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0, bgcolor: '#000' }}>
            <img src={selectedImg} alt="Büyük görsel" style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', margin: 'auto', display: 'block', background: '#000' }} />
          </Box>
        )}
      </Dialog>
    </Box>
  );
} 