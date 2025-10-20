'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  LinearProgress,
  Chip,
} from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';

interface User {
  email: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // بررسی کاربر لاگین کرده
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      router.push('/auth');
    }
  }, [router]);

  const usageData = {
    used: 45,
    total: 100,
    percentage: 45,
  };

  const quickActions = [
    {
      title: 'مدیریت کانفیگ',
      description: 'کانفیگ‌های خود را مدیریت کنید',
      icon: <SettingsIcon sx={{ fontSize: 40 }} />,
      path: '/dashboard/configs',
      color: 'primary' as const
    },
  ];

  if (!user) {
    return (
      <Container>
        <Typography variant="h4" align="center" sx={{ mt: 4 }}>
          در حال بارگذاری...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box mb={4}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          داشبورد کاربری
        </Typography>
        <Typography variant="h6" color="text.secondary">
          خوش آمدید، {user.email}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* کارت وضعیت اشتراک */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                وضعیت اشتراک
              </Typography>
              <Box display="flex" alignItems="center" mb={2}>
                <Chip 
                  label="فعال" 
                  color="success" 
                  variant="outlined"
                  sx={{ mr: 2 }}
                />
                <Typography variant="body2" color="text.secondary">
                  سرویس حجمی - تا ۱۴۰۲/۱۰/۳۰
                </Typography>
              </Box>
              
              <Box mb={2}>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2">مصرف ترافیک</Typography>
                  <Typography variant="body2">
                    {usageData.used} گیگابایت از {usageData.total} گیگابایت
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={usageData.percentage}
                  sx={{ height: 8, borderRadius: 4 }}
                  color={usageData.percentage > 80 ? 'error' : 'primary'}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* کارت اطلاعات سریع */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                اطلاعات اتصال
              </Typography>
              <Box display="flex" alignItems="center" mb={2}>
                <SpeedIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  سرعت: ۸۵ مگابیت
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <StorageIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  سرور: تهران ۱
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <SecurityIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2">
                  وضعیت: متصل
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* اقدامات سریع */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            اقدامات سریع
          </Typography>
          <Grid container spacing={3}>
            {quickActions.map((action, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                    }
                  }}
                  onClick={() => router.push(action.path)}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: `${action.color}.main`, mb: 2 }}>
                      {action.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {action.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {action.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
