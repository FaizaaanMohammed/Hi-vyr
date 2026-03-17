import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const OfferSection = () => {
  const orangeAccent = '#EC9874';
  

  return (
    <Box 
      sx={{ 
        bgcolor:"#0C1D31", 
        color: '#fff', 
        py: 8, 
        position: 'relative',
        overflow: 'hidden',
        
      }}
    >
      

      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          {/* Main Title */}
          <Typography 
            variant="h4" 
            sx={{ 
              color: orangeAccent, 
              fontWeight: 800, 
              letterSpacing: 2, 
              mb: 3,
              fontSize: { xs: '1.5rem', md: '42px' },
              textTransform: 'uppercase',
              fontFamily:"Montserrat"
            }}
          >
            Limited-Time Offer
          </Typography>

          {/* Offer Details */}
          <Typography 
            sx={{ 
              fontWeight: 500, 
              fontSize: { xs: '14px', md: '18px' }, 
              letterSpacing: 1,
              mb: 0,
              lineHeight: 1.4,
              fontFamily:"Montserrat"
            }}
          >
            20% OFF + 1 YEAR FREE HOSTING
          </Typography>

          <Typography 
            sx={{ 
              fontWeight: 500, 
              fontSize: { xs: '12px', md: '18px' }, 
              opacity: 0.9,
              letterSpacing: 0.5,
              maxWidth: '500px',
              mx: 'auto',
              fontFamily:"Montserrat"
            }}
          >
            AVAILABLE FOR THE FIRST 10 INSTITUTIONS THAT PARTNER WITH US THIS MONTH.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default OfferSection;