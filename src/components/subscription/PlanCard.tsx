'use client';

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useRouter } from 'next/navigation';

interface Plan {
  id: number;
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  type: 'unlimited' | 'volume';
  popular: boolean;
}

interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  const router = useRouter();

  const handleSelect = () => {
    router.push(`/subscription?type=${plan.type}`);
  };

  return (
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
          onClick={handleSelect}
          fullWidth
          sx={{ mx: 2 }}
        >
          انتخاب پلن
        </Button>
      </CardActions>
    </Card>
  );
}
