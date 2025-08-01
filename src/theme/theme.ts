import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA726', // Turuncu (logo ana rengi)
      contrastText: '#fff',
    },
    secondary: {
      main: '#7AC943', // Yeşil (logo)
      contrastText: '#fff',
    },
    info: {
      main: '#2E3192', // Mavi (logo)
      contrastText: '#fff',
    },
    background: {
      default: '#E3F2FD', // Açık mavi arka plan
      paper: '#fff',
    },
    text: {
      primary: '#1A237E', // Koyu mavi
      secondary: '#7AC943', // Yeşil
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: '#FFC107',
    },
    success: {
      main: '#00BFAE',
    },
  },
  typography: {
    fontFamily: 'Fredoka One, Rubik, Arial, sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '3rem',
      letterSpacing: '-0.01562em',
      color: '#FFA726', // Turuncu
    },
    h2: {
      fontWeight: 800,
      fontSize: '2.25rem',
      letterSpacing: '-0.00833em',
      color: '#2E3192', // Mavi
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
      letterSpacing: '0em',
      color: '#7AC943', // Yeşil
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
      letterSpacing: '0.00735em',
      color: '#1A237E', // Koyu mavi
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.25rem',
      letterSpacing: '0em',
      color: '#FFA726', // Turuncu
    },
    h6: {
      fontWeight: 700,
      fontSize: '1rem',
      letterSpacing: '0.0075em',
      color: '#2E3192', // Mavi
    },
  },
});

export default theme; 