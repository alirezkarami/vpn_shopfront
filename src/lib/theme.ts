'use client';

import { createTheme } from '@mui/material/styles';

// رنگ‌های داینامیک برای لایت و دارک مود
const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#1976d2' : '#90caf9',
      light: mode === 'light' ? '#42a5f5' : '#e3f2fd',
      dark: mode === 'light' ? '#1565c0' : '#42a5f5',
    },
    secondary: {
      main: mode === 'light' ? '#dc004e' : '#f48fb1',
      light: mode === 'light' ? '#ff5983' : '#fce4ec',
      dark: mode === 'light' ? '#9a0036' : '#ad1457',
    },
    background: {
      default: mode === 'light' ? '#f8f9fa' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
    text: {
      primary: mode === 'light' ? '#1a2027' : '#ffffff',
      secondary: mode === 'light' ? '#65676b' : '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Vazir", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '2rem' },
    h3: { fontWeight: 600, fontSize: '1.75rem' },
    h4: { fontWeight: 600, fontSize: '1.5rem' },
    h5: { fontWeight: 500, fontSize: '1.25rem' },
    h6: { fontWeight: 500, fontSize: '1.1rem' },
  },
  direction: 'rtl',
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: mode === 'light' 
            ? '0 2px 8px rgba(0,0,0,0.1)' 
            : '0 2px 8px rgba(0,0,0,0.3)',
        },
      },
    },
  },
});

export const createAppTheme = (mode: 'light' | 'dark') => 
  createTheme(getDesignTokens(mode));
