import type { Metadata } from 'next';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { createAppTheme } from '@/styles/theme';
import DynamicTheme from '@/components/DynamicTheme';
import './globals.css';

export const metadata: Metadata = {
  title: 'سرویس VPN حرفه‌ای',
  description: 'سرویس VPN با سرعت بالا و امنیت تضمینی',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vazir:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <DynamicTheme>
              {children}
            </DynamicTheme>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
