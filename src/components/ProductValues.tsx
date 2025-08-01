import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KayakIcon from '@mui/icons-material/Kayaking';
import NatureIcon from '@mui/icons-material/Landscape';
import GroupIcon from '@mui/icons-material/Group';

const values = [
  {
    icon: <KayakIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Adrenalin Dolu Turlar',
    description: 'Profesyonel rehberler eşliğinde güvenli ve heyecanlı rafting deneyimi.'
  },
  {
    icon: <NatureIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Doğayla İç İçe',
    description: 'Türkiye’nin en güzel nehirlerinde, muhteşem manzaralar eşliğinde rafting.'
  },
  {
    icon: <GroupIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Her Seviyeye Uygun',
    description: 'Başlangıçtan ileri seviyeye kadar her yaşa ve gruba uygun turlar.'
  }
];

export default function ProductValues() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f7f7f7' }}>
      <Typography variant="h4" align="center" fontWeight={700} mb={6} color="primary">
        Neden Selge Adventure Park?
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
        {values.map((item, idx) => (
          <Box key={idx} sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, minWidth: 250 }}>
            <Box display="flex" flexDirection="column" alignItems="center" px={2}>
              {item.icon}
              <Typography variant="h6" fontWeight={700} mt={2} mb={1} align="center">
                {item.title}
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
} 