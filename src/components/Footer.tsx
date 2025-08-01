import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, textAlign: 'center', backgroundColor: '#222', color: '#fff', mt: 8 }}>
      <Typography variant="body1" fontWeight={600}>
        © {new Date().getFullYear()} Selge Adventure Park. Tüm hakları saklıdır.
      </Typography>
      <Typography variant="body2" color="#bbb" mt={1}>
        Doğanın kalbinde, güvenli ve unutulmaz rafting deneyimi.
      </Typography>
    </Box>
  );
} 