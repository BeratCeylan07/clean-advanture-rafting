'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';

import CampingIcon from '@mui/icons-material/Terrain';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { usePathname } from 'next/navigation';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AppsIcon from '@mui/icons-material/Apps';
import TerrainIcon from '@mui/icons-material/Terrain';
import KayakingIcon from '@mui/icons-material/Kayaking';
import CableIcon from '@mui/icons-material/Cable';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import PhoneIcon from '@mui/icons-material/Phone';

const mainMenu = [
  { label: 'Anasayfa', href: '/', icon: <HomeIcon sx={{ mr: 1 }} /> },
  { label: 'Restoran', href: '/restaurant', icon: <RestaurantIcon sx={{ mr: 1 }} /> },
  { label: 'Grup Etkinlikleri', href: '/grup-etkinlikleri', icon: <KayakingIcon sx={{ mr: 1 }} /> },
  { label: 'İletişim', href: '/iletisim', icon: <PhoneIcon sx={{ mr: 1 }} /> },
];
const servicesMenu = [
  { label: 'Tazı Kanyon', href: '/tazi-kanyon', icon: <TerrainIcon sx={{ mr: 1 }} /> },
  { label: 'Rafting', href: '/rafting', icon: <KayakingIcon sx={{ mr: 1 }} /> },
  { label: 'Zipline', href: '/zipline', icon: <CableIcon sx={{ mr: 1 }} /> },
  { label: 'Buggy Safari', href: '/buggy-safari', icon: <DirectionsCarIcon sx={{ mr: 1 }} /> },
  { label: 'Camping', href: '/camping', icon: <CampingIcon sx={{ mr: 1 }} /> },
  { label: 'Köprülü Kanyon Bot Turu', href: '/koprulu-kanyon-bot-turu', icon: <DirectionsBoatIcon sx={{ mr: 1 }} /> },
];


export default function AppAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const pathname = usePathname();

  // Sosyal medya ikonları
  const socialIcons = [
    { icon: <InstagramIcon sx={{ color: '#7AC943', fontSize: 28 }} />, href: 'https://www.instagram.com/selgeadventurerafting?igsh=amlkbG5ycHB5aXk0&utm_source=qr', label: 'Instagram' },
    { icon: <WhatsAppIcon sx={{ color: '#7AC943', fontSize: 28 }} />, href: 'https://wa.me/905384516567', label: 'WhatsApp' },
  ];

  // Açılır menü state ve fonksiyonları
  const [servicesMenuAnchorEl, setServicesMenuAnchorEl] = React.useState<null | HTMLElement>(null);
  const servicesMenuOpen = Boolean(servicesMenuAnchorEl);
  const handleServicesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setServicesMenuAnchorEl(event.currentTarget);
  };
  const handleServicesMenuClose = () => {
    setServicesMenuAnchorEl(null);
  };
  // Mobil drawer için state - Auto deploy test - should work now
  const [servicesMenuDrawerOpen, setServicesMenuDrawerOpen] = React.useState(false);
  const handleServicesMenuOpenDrawer = (event: React.MouseEvent) => {
    event.stopPropagation();
    setServicesMenuDrawerOpen((v) => !v);
  };
  const handleServicesMenuCloseDrawer = () => setServicesMenuDrawerOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '2px solid',
          borderColor: 'primary.main',
          boxShadow: '0 2px 16px 0 rgba(33, 150, 243, 0.08)',
        }}
      >
        <Toolbar sx={{ minHeight: 72, px: { xs: 2, sm: 6 }, gap: 2 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pr: { xs: 1, sm: 3 } }}>
              <Image src="/images/logo.png" alt="Selge Adventure Park Logo" width={isMobile ? 150 : 210} height={isMobile ? 150 : 210} style={{ objectFit: 'contain', width: isMobile ? 150 : 210, height: isMobile ? 150 : 210 }} />
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {isMobile ? (
            <>
              <IconButton
                color="primary"
                onClick={() => setDrawerOpen(true)}
                sx={{
                  background: 'linear-gradient(90deg, #7AC943 0%, #B6E388 100%)',
                  color: '#fff',
                  borderRadius: 2,
                  boxShadow: 2,
                  p: 1.2,
                  '&:hover': {
                    background: 'linear-gradient(90deg, #B6E388 0%, #7AC943 100%)',
                  },
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                  sx: {
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(16px)',
                  },
                }}
              >
                <Box sx={{ width: 280, py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }} role="presentation">
                  <Image src="/images/logo.png" alt="Selge Adventure Park Logo" width={60} height={60} style={{ objectFit: 'contain', marginBottom: 16 }} />
                  <List sx={{ width: '100%' }}>
                    <ListItem disablePadding>
                      <ListItemButton onClick={handleServicesMenuOpenDrawer} sx={{ borderRadius: 2, my: 1, fontWeight: 800, fontSize: 18, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                        <AppsIcon sx={{ mr: 1 }} />
                        <ListItemText primary="Hizmetler" sx={{ textAlign: 'center' }} />
                      </ListItemButton>
                    </ListItem>
                    {servicesMenuDrawerOpen && servicesMenu.map((item) => (
                      <ListItem key={item.label} disablePadding>
                        <ListItemButton
                          component={Link}
                          href={item.href}
                          sx={{
                            borderRadius: 2,
                            my: 1,
                            background: pathname === item.href ? 'linear-gradient(90deg, #7AC943 0%, #B6E388 100%)' : 'none',
                            color: pathname === item.href ? '#fff' : 'secondary.main',
                            fontWeight: 800,
                            fontSize: 18,
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                          onClick={(event) => {
                            event.stopPropagation();
                            handleServicesMenuCloseDrawer();
                            setDrawerOpen(false);
                          }}
                        >
                          {item.icon}
                          <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    {mainMenu.map((item) => (
                      <ListItem key={item.label} disablePadding>
                        <ListItemButton
                          component={Link}
                          href={item.href}
                          onClick={() => setDrawerOpen(false)}
                          sx={{
                            borderRadius: 2,
                            my: 1,
                            background: pathname === item.href ? 'linear-gradient(90deg, #7AC943 0%, #B6E388 100%)' : 'none',
                            color: pathname === item.href ? '#fff' : 'secondary.main',
                            fontWeight: 800,
                            fontSize: 18,
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {item.icon}
                          <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider sx={{ my: 2, width: '80%' }} />
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    {socialIcons.map((item) => (
                      <IconButton key={item.label} component="a" href={item.href} target="_blank" rel="noopener" color="primary" sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 1, border: '2px solid #7AC943' }}>
                        {item.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              {/* Anasayfa butonu */}
              <Button
                key="Anasayfa"
                color="primary"
                component={Link}
                href="/"
                sx={{
                  fontWeight: 800,
                  mx: 1.5,
                  fontSize: 17,
                  borderRadius: 3,
                  px: 2.5,
                  py: 1.2,
                  background: pathname === '/' ? 'linear-gradient(90deg, #7AC943 0%, #B6E388 100%)' : 'none',
                  color: pathname === '/' ? '#fff' : 'secondary.main',
                  boxShadow: pathname === '/' ? 3 : 0,
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #B6E388 0%, #7AC943 100%)',
                    color: '#fff',
                    boxShadow: 4,
                  },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {mainMenu[0].icon}Anasayfa
              </Button>
              {/* Hizmetler dropdown */}
              <Button
                color="primary"
                sx={{
                  fontWeight: 800,
                  mx: 1.5,
                  fontSize: 17,
                  borderRadius: 3,
                  px: 2.5,
                  py: 1.2,
                  background: 'none',
                  color: 'secondary.main',
                  boxShadow: 0,
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #B6E388 0%, #7AC943 100%)',
                    color: '#fff',
                    boxShadow: 4,
                  },
                  display: 'flex',
                  alignItems: 'center',
                }}
                onClick={handleServicesMenuOpen}
                aria-controls={servicesMenuOpen ? 'services-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={servicesMenuOpen ? 'true' : undefined}
              >
                <AppsIcon sx={{ mr: 1 }} /> Hizmetler
              </Button>
              <Menu
                id="services-menu"
                anchorEl={servicesMenuAnchorEl}
                open={servicesMenuOpen}
                onClose={handleServicesMenuClose}
                MenuListProps={{ 'aria-labelledby': 'services-button' }}
              >
                {servicesMenu.map((item) => (
                  <MenuItem key={item.label} component={Link} href={item.href} onClick={handleServicesMenuClose} selected={pathname === item.href}>
                    {item.icon}{item.label}
                  </MenuItem>
                ))}
              </Menu>
              {/* Grup Etkinlikleri butonu */}
              <Button
                key="Grup Etkinlikleri"
                color="primary"
                component={Link}
                href="/grup-etkinlikleri"
                sx={{
                  fontWeight: 800,
                  mx: 1.5,
                  fontSize: 17,
                  borderRadius: 3,
                  px: 2.5,
                  py: 1.2,
                  background: pathname === '/grup-etkinlikleri' ? 'linear-gradient(90deg, #7AC943 0%, #B6E388 100%)' : 'none',
                  color: pathname === '/grup-etkinlikleri' ? '#fff' : 'secondary.main',
                  boxShadow: pathname === '/grup-etkinlikleri' ? 3 : 0,
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #B6E388 0%, #7AC943 100%)',
                    color: '#fff',
                    boxShadow: 4,
                  },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <KayakingIcon sx={{ mr: 1 }} />Grup Etkinlikleri
              </Button>
              {/* Restoran butonu */}
              <Button
                key="Restoran"
                color="primary"
                component={Link}
                href="/restaurant"
                sx={{
                  fontWeight: 800,
                  mx: 1.5,
                  fontSize: 17,
                  borderRadius: 3,
                  px: 2.5,
                  py: 1.2,
                  background: pathname === '/restaurant' ? 'linear-gradient(90deg, #7AC943 0%, #B6E388 100%)' : 'none',
                  color: pathname === '/restaurant' ? '#fff' : 'secondary.main',
                  boxShadow: pathname === '/restaurant' ? 3 : 0,
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #B6E388 0%, #7AC943 100%)',
                    color: '#fff',
                    boxShadow: 4,
                  },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {mainMenu[1].icon}Restoran
              </Button>
              {/* İletişim butonu */}
              <Button
                key="İletişim"
                color="primary"
                component={Link}
                href="/iletisim"
                sx={{
                  fontWeight: 800,
                  mx: 1.5,
                  fontSize: 17,
                  borderRadius: 3,
                  px: 2.5,
                  py: 1.2,
                  background: pathname === '/iletisim' ? 'linear-gradient(90deg, #7AC943 0%, #B6E388 100%)' : 'none',
                  color: pathname === '/iletisim' ? '#fff' : 'secondary.main',
                  boxShadow: pathname === '/iletisim' ? 3 : 0,
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #B6E388 0%, #7AC943 100%)',
                    color: '#fff',
                    boxShadow: 4,
                  },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {mainMenu[2].icon}İletişim
              </Button>
              <Box sx={{ display: 'flex', gap: 1.5, ml: 2 }}>
                {socialIcons.map((item) => (
                  <Tooltip title={item.label} key={item.label}>
                    <IconButton component="a" href={item.href} target="_blank" rel="noopener" color="primary" sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 1 }}>
                      {item.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
} 