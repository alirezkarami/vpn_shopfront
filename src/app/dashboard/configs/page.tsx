'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';

interface User {
  email: string;
}

interface Config {
  id: number;
  name: string;
  server: string;
  protocol: string;
  status: string;
}

export default function ConfigsPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      router.push('/auth');
    }
  }, [router]);

  const configs: Config[] = [
    {
      id: 1,
      name: 'کانفیگ تهران ۱',
      server: 'tehran-1.vpn.com',
      protocol: 'WireGuard',
      status: 'فعال'
    },
    {
      id: 2,
      name: 'کانفیگ اروپا',
      server: 'europe-1.vpn.com',
      protocol: 'OpenVPN',
      status: 'غیرفعال'
    }
  ];

  const handleCopyConfig = (configId: number) => {
    // TODO: کپی کردن کانفیگ
    alert(`کانفیگ ${configId} کپی شد`);
  };

  const handleDownloadConfig = (configId: number) => {
    // TODO: دانلود کانفیگ
    alert(`کانفیگ ${configId} دانلود شد`);
  };

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
          مدیریت کانفیگ‌ها
        </Typography>
        <Typography variant="h6" color="text.secondary">
          کانفیگ‌های VPN خود را مدیریت کنید
        </Typography>
      </Box>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            کانفیگ‌های شما
          </Typography>
          <List>
            {configs.map((config) => (
              <ListItem key={config.id} divider>
                <ListItemText
                  primary={config.name}
                  secondary={
                    <>
                      سرور: {config.server}
                      <br />
                      پروتکل: {config.protocol}
                      <br />
                      وضعیت: {config.status}
                    </>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton 
                    edge="end" 
                    aria-label="copy"
                    onClick={() => handleCopyConfig(config.id)}
                    sx={{ mr: 1 }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                  <IconButton 
                    edge="end" 
                    aria-label="download"
                    onClick={() => handleDownloadConfig(config.id)}
                  >
                    <DownloadIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary">
          ایجاد کانفیگ جدید
        </Button>
      </Box>
    </Container>
  );
}
