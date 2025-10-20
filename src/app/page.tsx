'use client';

import { 
  Container, 
  Typography, 
  Box, 
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Divider
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function HomePage() {
  const router = useRouter();

  const plans = [
    {
      id: 1,
      title: 'سرویس نامحدود',
      description: 'مناسب برای استریم و بازی',
      price: '۱۲۹,۰۰۰',
      period: 'ماهانه',
      features: ['ترافیک نامحدود', 'سرعت بالا', 'پشتیبانی ۲۴/۷'],
      type: 'unlimited' as const,
      popular: true
    },
    {
      id: 2,
      title: 'سرویس حجمی',
      description: 'مناسب برای استفاده معمول',
      price: '۷۹,۰۰۰',
      period: 'ماهانه',
      features: ['۱۰۰ گیگابایت', 'سرعت استاندارد', 'پشتیبانی آنلاین'],
      type: 'volume' as const,
      popular: false
    }
  ];

  const handleSelect = (type: string) => {
    router.push(`/subscription?type=${type}`);
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            پلن اشتراک متناسب با نیاز خود را انتخاب کنید
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            چه به دنبال ترافیک نامحدود برای استریم و بازی باشید و چه به دنبال پلن حجمی منعطف، ما بهترین گزینه را برای شما داریم.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => router.push('/auth')}
          >
            شروع کنید
          </Button>
        </Box>

        <Grid container spacing={4}>
          {plans.map((plan) => (
            <Grid item xs={12} md={6} key={plan.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  position: 'relative',
                  border: plan.popular ? 2 : 1,
                  borderColor: plan.popular ? 'primary.main' : 'divider'
                }}
              >
                {plan.popular && (
                  <Chip 
                    label="پرفروش" 
                    color="primary" 
                    sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)' }}
                  />
                )}
                
                <CardContent sx={{ pt: plan.popular ? 4 : 2 }}>
                  <Typography variant="h5" gutterBottom textAlign="center">
                    {plan.title}
                  </Typography>
                  <Typography color="text.secondary" textAlign="center" gutterBottom>
                    {plan.description}
                  </Typography>
                  
                  <Box textAlign="center" my={3}>
                    <Typography variant="h4" color="primary" fontWeight="bold">
                      {plan.price}
                      <Typography component="span" color="text.secondary" sx={{ mr: 1 }}>
                        تومان
                      </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {plan.period}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                    {plan.features.map((feature, index) => (
                      <Box 
                        key={index} 
                        component="li" 
                        sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                      >
                        <CheckIcon color="primary" sx={{ fontSize: 18, ml: 1 }} />
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                  <Button 
                    variant={plan.popular ? "contained" : "outlined"}
                    size="large"
                    onClick={() => handleSelect(plan.type)}
                    fullWidth
                    sx={{ mx: 2 }}
                  >
                    انتخاب پلن
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
