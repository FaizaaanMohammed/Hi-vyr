import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';

const WhyUs = () => {
  const reasons = [
    { id: '01', text: 'CALM, INTENTIONAL DESIGN' },
    { id: '02', text: 'CLEAR, EASY-TO-USE SYSTEMS' },
    { id: '03', text: 'SUPPORT THAT LISTENS, NOT JUST RESPOND' },
    { id: '04', text: 'BUILT FOR INDIAN INSTITUTIONS, BIG AND SMALL' },
    { id: '05', text: 'A DIGITAL PARTNER THAT GROWS WITH YOU' },
  ];

  return (
    <Box sx={{ bgcolor: '#EAEAEA', py: { xs: 8, md: 12 }, fontFamily: "Montserrat" }}>
      <Container maxWidth="lg">
        {/* Top Label and Line */}
        <Box sx={{ borderBottom: '2px solid #333', pb: 0.5, mb: 8, width: '100%',borderWidth:"100%" }}>
          <Typography sx={{ fontSize: '12px', fontWeight: 800, letterSpacing: 1.5, fontFamily: "Montserrat" }}>
            WHY US?
          </Typography>
          
        </Box>

        

        <Grid container spacing={6}>
          {/* Left Column: Heading and Text */}
          <Grid item  size={{xs:12,md:5}}>
            <Typography 
              variant="h3" 
              sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase', color: '#333', fontFamily: "Montserrat", fontSize: "38px" }}
            >
              Why Institutions <br /> Choose Us
            </Typography>
            <Typography 
              sx={{ 
                color: '#555', 
                fontSize: '16px', 
                lineHeight: 1.6, 
                maxWidth: '400px', 
                fontFamily: "Montserrat" 
              }}
            >
              At New Tab Tech Lab, we help educational and healthcare institutions build digital homes that feel <strong>warm, trustworthy, and professional</strong> — just like the care they provide in real life.
            </Typography>
          </Grid>

          {/* Right Column: Grid of Reason Boxes */}
          <Grid item  size={{xs:12,md:7}}>
            <Grid container spacing={2}>
              {reasons.map((item) => (
                <Grid item  size={{xs:12,md:6}} key={item.id}>
                  <Box 
                    sx={{ 
                      bgcolor: '#D9D9D9', 
                      p: 3, 
                      height: '80px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between' 
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: '12px', fontWeight: 700, fontFamily: "Montserrat" }}>
                        {item.id}
                      </Typography>
                      <Divider sx={{ width: '100%', mt: 0, borderColor: '#333' }} />
                    </Box>
                    <Typography 
                      sx={{ 
                        fontWeight: 800, 
                        fontSize: '14px', 
                        lineHeight: 1.3, 
                        color: '#333',
                        textTransform: 'uppercase',
                        fontFamily: "Montserrat"
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyUs;