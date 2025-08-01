'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #E3F2FD 0%, #B6E388 100%)',
        py: 4,
        px: { xs: 2, md: 4 },
        mb: 4,
        borderRadius: 3,
        boxShadow: 2,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        }
      }}
    >
      {breadcrumbs && (
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          sx={{ mb: 2 }}
        >
          <Link href="/" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <HomeIcon sx={{ mr: 0.5, fontSize: 20 }} />
            Anasayfa
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <Typography key={index} color="text.secondary" sx={{ fontWeight: 600 }}>
              {crumb.label}
            </Typography>
          ))}
        </Breadcrumbs>
      )}
      
      <Typography 
        variant="h3" 
        component="h1"
        fontWeight={900} 
        color="primary" 
        textAlign="center" 
        mb={1}
        sx={{
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          fontSize: { xs: '2rem', md: '3rem' }
        }}
      >
        {title}
      </Typography>
      
      {subtitle && (
        <Typography 
          variant="h6" 
          color="text.secondary" 
          textAlign="center" 
          fontWeight={700}
          sx={{ 
            maxWidth: 600, 
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
} 