'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from '@/styles/theme';

export default function DynamicTheme({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const { mode } = useTheme();
  const theme = createAppTheme(mode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
