import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';

const Testimonials = () => {
  const reviews = [
    {
      text: "“New Tab didn’t just make us a website. They made it easier for parents to reach us. Everything feels calmer now.”",
      author: "– HEADMISTRESS, PINEWOODS ACADEMY",
      color: "#E59A73", // Muted Orange/Peach
    },
    {
      text: "“The design, the forms, the way patients connect — it’s made my practice more peaceful and organised.”",
      author: "– DR. A. MEENAKSHI, GENERAL PRACTITIONER",
      color: "#9FA8DA", // Muted Purple/Blue
    },
    {
      text: "“The design, the forms, the way patients connect — it’s made my practice more peaceful and organised.”",
      author: "– DR. A. MEENAKSHI, GENERAL PRACTITIONER",
      color: "#F48FB1", // Muted Pink
    },
  ];

  return (
    <Box sx={{ bgcolor: '#EAEAEA', py: { xs: 8, md: 10 }, fontFamily: "Montserrat" }}>
      <Container maxWidth="lg">
        {/* Section Label */}
        <Box sx={{ borderBottom: '2px solid #333', pb: 0.5, mb: 6, width: '100%' }}>
          <Typography sx={{ fontSize: '12px', fontWeight: 800, letterSpacing: 1.5, fontFamily: "Montserrat" }}>
            CUSTOMERS
          </Typography>
        </Box>

        {/* Section Title */}
        <Typography 
          
          sx={{ 
            fontWeight: 700, 
            color: '#0B1D33', 
            mb: 3, 
            textTransform: 'uppercase',
            fontFamily: "Montserrat",
            fontSize: { xs: '2rem', md: "38px" }
          }}
        >
          What our clients say
        </Typography>

        {/* Testimonial Cards */}
        <Grid container spacing={2}>
          {reviews.map((item, index) => (
            <Grid item  size={{xs:12,md:4}} key={index}>
              <Box 
                sx={{ 
                  bgcolor: item.color, 
                  p: 4, 
                  
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '100px'
                }}
              >
                <Typography 
                  sx={{ 
                    fontFamily: "Montserrat", 
                    fontSize: '14px', 
                    fontWeight: 500, 
                    lineHeight: 1.6,
                    color: '#333',
                    mb: 4
                  }}
                >
                  {item.text}
                </Typography>

                <Box>
                  <Divider sx={{ mb: 2, borderColor: 'rgba(0,0,0,0.2)' }} />
                  <Typography 
                    sx={{ 
                      fontFamily: "Montserrat", 
                      fontSize: '14px', 
                      fontWeight: 700, 
                      letterSpacing: 0.5,
                      color: '#333',
                      textTransform: 'uppercase'
                    }}
                  >
                    {item.author}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;